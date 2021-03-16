$(document).ready(function() {

    Init(); //初始化
    $("div.restart").click(function() {
        Init(); //初始化
    });

    $("li").click(function(evt) {

        if(evt) {
            var thisSquare = evt.target;
        } else {
            var thisSquare = window.event.srcElenment;
        }
        if(thisSquare.className == "card") {
            $(this).addClass("card open show");
        }

    });
});


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
    "fa fa-bomb",
);



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
    };
};
//清除原有布局
function cleanCards() {
    $("#squar")
        .find("li").removeClass().addClass("card") //把所有卡片的类都换成card. 找到标签li,同时清除类。
        .find("i").removeClass(); //同时清除html文档里的i标签下的图形。
    $("#stars-three").find("i").removeClass(); //初始化星星。
}

//随机数的产生
function setSquare() {
    return Math.floor(Math.random() * 16);
}
