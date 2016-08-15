var Width = $(window).width() / 1080;
$("#meta").attr("content","width=device-width, initial-scale="+Width+", maximum-scale=1, user-scalable=no")

//select选中后颜色
$("select").change(function(){
    var select_op = $(this).find("option").eq(0);
    if(!($(this).val() == select_op.val()))
    {
        $(this).addClass("select_color");
    }else
    {
        $(this).removeClass("select_color");
    }
});


//搜索框清除文字
$(".seek div b").click(function(){
	$(".seek div input").attr("value","");
});
