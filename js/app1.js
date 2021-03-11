$(document).ready(function () {
  Init();//初始化
  $("div.restart").click(function () {
    Init();//初始化
  });

  $("li").click(function(evt) {

      if (evt) {
       var thisSquare = evt.target;
      } else {
        var thisSquare = window.event.srcElenment;
      }
      if (thisSquare.className == "card") {
        $(this).addClass("card open show");
        }

  })
  }
);


Init = function(){
  $("ul").children().removeClass().addClass("card");//把所有卡片的类都换成card.
  $("#stars-three").find("i").removeClass();//初始化星星。
  $("#squar").find("i").removeClass();//清除所有i元素下的图形。
  for(var i= 0; i < 16; i++){
    $("#square"+i).addClass(cards[i]);//给每个卡片一个随机的图形。
  };

};//初始化函数

var cards = ["fa fa-diamond","fa fa-diamond",
    "fa fa-paper-plane-o","fa fa-paper-plane-o",
    "fa fa-anchor","fa fa-anchor",
    "fa fa-bolt","fa fa-bolt",
    "fa fa-cube","fa fa-cube",
    "fa fa-leaf","fa fa-leaf",
    "fa fa-bicycle","fa fa-bicycle",
    "fa fa-bomb","fa fa-bomb"];
 /*changCards = function{
$("#square0").removeClass().addClass(cards[7]);
};*/
