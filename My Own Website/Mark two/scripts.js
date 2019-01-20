function openNav() {
    document.getElementById("myNav").style.width = "100%";
}
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

$(document).ready(function(){
    $(".ne").hover(function(){
        $(this).parent().parent().addClass("newengland");
    });
    $(".ne").mouseleave(function(){
        $(this).parent().parent().addClass("overlay");
        $(this).parent().parent().removeClass("newengland");
    });
});

$(document).ready(function(){
    $(".co").hover(function(){
        $(this).parent().parent().addClass("colorado");
    });
    $(".co").mouseleave(function(){
        $(this).parent().parent().addClass("overlay");
        $(this).parent().parent().removeClass("colorado");
    });
});

$(document).ready(function(){
    $(".eu").hover(function(){
        $(this).parent().parent().addClass("europe");
    });
    $(".eu").mouseleave(function(){
        $(this).parent().parent().addClass("overlay");
        $(this).parent().parent().removeClass("europe");
    });
});
