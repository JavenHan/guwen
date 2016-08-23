/*
 *   jq扩展--星星评分插件
 *
 *   通过对象的属性data-score获取评分值
 *   星星使用元素i表示，绑定星星背景图
 *   鼠标进入、离开事件的绑定样式为inred，改变背景图
 *   点击事件的绑定样式为onred，改变背景图
 */
(function ($) {
    "use strict";
    $.fn.BindStars = function () {
        var starElement = $(this);
        starElement.children("i").mouseleave(function () {
            starElement.find("i").each(function (index) {
                $(this).removeClass("inred");
            });
        });
        starElement.children("i").mouseenter(function () {
            var curIndex = starElement.find("i").index(this);
            starElement.find("i").each(function (index) {
                if (index <= curIndex) {
                    $(this).addClass("inred");
                }
                else {
                    $(this).removeClass("inred");
                }
            });
        });
        starElement.children("i").click(function () {
            var curIndex = starElement.find("i").index(this);
            starElement.find("i").each(function (index) {
                if (index <= curIndex) {
                    $(this).addClass("onsel");
                }
                else {
                    $(this).removeClass("onsel");
                }
            });
            starElement.attr("data-score", curIndex + 1);
        });
    };
    $.fn.SetStars = function (score) {
        var scoreStr = "";
        for (var i = 0; i < 5; i++) {
            if (i < score) {
                scoreStr += "<i class='onsel'></i>";
            } else {
                scoreStr += "<i></i>";
            }
        }
        $(this).html(scoreStr);
    };
})(window.jQuery);