$(document).ready(function() {
    var b = 0; //声明一个计数用的变量b。
    var CardPic = new Array(); //声明一个数组用来存放卡片i元素的类。
    var CardId = new Array(); //声明一个数组用来存放卡片的id标签。
    Init(); //初始化
    $(".restart").click(function() {
       location.reload();

    });
    //点击事件编写
    $("li").bind("click",function() {
        if($(this).attr("class") == "card") {
            $(this).removeClass().addClass("card open show")
                .fadeTo(400, 0.25).fadeTo(100, 1); //产生一个动画效果。

        }
        b++;

        CardPic[b] = $(this).find("i").prop("className"); //通过点击把“i”所含的类赋值给CardPic。
        CardId[b] = $(this).find("i").prop("id"); //通过点击“i”的Id赋值给Cardid.


        if(b % 2 == 0) {
            setTimeout(function() {
                if(CardPic[b] == CardPic[b - 1] && CardId[b] !== CardId[b - 1]) {
                    $("#square" + CardId[b].substring(6)).parent().unbind("click");
                    $("#square" + CardId[b - 1].substring(6)).parent().unbind("click");
                }//只有在不同卡片的图案相同时去除点击事件。

                if(CardPic[b] !== CardPic[b - 1] || CardId[b] == CardId[b - 1]) { //当点击两次所获得的i元素的类不同且不是同一张卡片时进行如下操做。
                    $("#square" + CardId[b].substring(6)) //当满足上面条件时，把卡片遮盖起来。
                        .parent().removeClass().addClass("card");
                    $("#square" + CardId[b - 1].substring(6))
                        .parent().removeClass().addClass("card");
                } //CardId这条目的是防止操作者在同一张卡片上点击两次，从而扰乱以下逻辑。

            }, 100);

        }

    });
});


//初始化函数
function Init() {
    cleanCards(); //清除原有布局
    newCards(); //布设新的卡片布局
} //初始化函数
var cards = new Array("fa fa-diamond",
    "fa fa-paper-plane-o",
    "fa fa-anchor",
    "fa fa-bolt",
    "fa fa-cube",
    "fa fa-leaf",
    "fa fa-bicycle",
    "fa fa-bomb",
    "fa fa-diamond",
    "fa fa-paper-plane-o",
    "fa fa-anchor",
    "fa fa-bolt",
    "fa fa-cube",
    "fa fa-leaf",
    "fa fa-bicycle",
    "fa fa-bomb");

//生成新的卡片布局。
function newCards() {

    var usedNums = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15);
    for(var i = 0; i < 16; i++) {
        var x, Pic;

        do {
            x = setSquare();
            Pic = usedNums[x];
        } while (usedNums[x] < 0); //产生一个合理的随机数字，提供给下面的数组，目的是使卡片图案分配合理。
        $("#square" + i).addClass(cards[Pic]); //给每个卡片一个随机的图形。
        usedNums[x] = -1;
    }
}
//清除原有布局
function cleanCards() {
    $("#squar")
        .find("li").removeClass().addClass("card") //把所有卡片的类都换成card. 找到标签li,同时清除类。
        .find("i").removeClass(); //同时清除html文档里的i标签下的图形。
    $("#stars-three").find("i").removeClass(); //初始化星星。
}
//产生一个0到16之间的随机整数
function setSquare() {
    return Math.floor(Math.random() * 16);
}
