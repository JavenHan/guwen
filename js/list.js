/**
 * Created by ada on 2016/8/20.
 */
    //Regional开始
$(document).ready(function(){
    $(".Regional").click(function(){
        if ($('.grade-eject').hasClass('grade-w-roll')) {
            $('.grade-eject').removeClass('grade-w-roll');
            $(this).removeClass('current');
            $('.screening').attr('style',' ');
        } else {
            $('.grade-eject').addClass('grade-w-roll');
            $(this).addClass('current');
            $(".Sort").removeClass('current');
            $('.screening').attr('style','position: fixed;top:0;');
        }
    });
});

$(document).ready(function(){
    $(".grade-w>li").click(function(){
        $(".grade-t")
            .css("left","50%")
    });
});

$(document).ready(function(){
    $(".grade-t>li").click(function(){
        $(".grade-s")
            .css("left","50%")
    });
});

//Sort开始

$(document).ready(function(){
    $(".Sort").click(function(){
        if ($('.Sort-eject').hasClass('grade-w-roll')) {
            $('.Sort-eject').removeClass('grade-w-roll');
            $(this).removeClass('current');
            $('.screening').attr('style',' ');
        } else {
            $('.Sort-eject').addClass('grade-w-roll');
            $(this).addClass('current');
            $(".Regional").removeClass('current');
            $('.screening').attr('style','position: fixed;top:0;');
        }
    });
});
$(document).ready(function(){
    $(".Regional").click(function(){
        if ($('.Sort-eject').hasClass('grade-w-roll')){
            $('.Sort-eject').removeClass('grade-w-roll');
        };
    });
});

$(document).ready(function(){
    $(".Sort").click(function(){
        if ($('.grade-eject').hasClass('grade-w-roll')){
            $('.grade-eject').removeClass('grade-w-roll');
        };

    });
});

function Sorts(sbj){
    var arr = document.getElementById("Sort-Sort").getElementsByTagName("li");
    for (var i = 0; i < arr.length; i++){
        var a = arr[i];
        a.style.background = "";
    };
    /*sbj.style.background = "#eee"*/
    console.log(1);
}
function grade1(wbj){
    var arr = document.getElementById("gradew").getElementsByTagName("li");
    for (var i = 0; i < arr.length; i++){
        var a = arr[i];
        a.style.background = "";
        a.style.color = "#414141";
    };
    wbj.style.background = "#eee";
    wbj.style.color = "#369ef5";
    console.log(2);
}
function gradet(tbj){
    var arr = document.getElementById("gradet").getElementsByTagName("li");
    for (var i = 0; i < arr.length; i++){
        var a = arr[i];
        a.style.background = "#eeeeee";
        a.style.color = "#414141";
    };
    tbj.style.background = "#ffffff";
    tbj.style.color = "#369ef5";
    console.log(3);
}
