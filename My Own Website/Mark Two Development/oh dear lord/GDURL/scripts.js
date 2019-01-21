function openNav() {
    document.getElementById("myNav").style.width = "100%";
}
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

$(document).ready(function(){
    $(".ma").hover(function(){
        $(this).parent().parent().addClass("newengland");
    });
    $(".ma").mouseleave(function(){
        //$(this).parent().parent().addClass("overlay");
        $(this).parent().parent().removeClass("newengland");
    });
});

$(document).ready(function(){
    $(".co").hover(function(){
        $(this).parent().parent().addClass("colorado");
    });
    $(".co").mouseleave(function(){
        //$(this).parent().parent().addClass("overlay");
        $(this).parent().parent().removeClass("colorado");
    });
});

$(document).ready(function(){
    $(".sc").hover(function(){
        $(this).parent().parent().addClass("europe");
    });
    $(".sc").mouseleave(function(){
        //$(this).parent().parent().addClass("overlay");
        $(this).parent().parent().removeClass("europe");
    });
});
