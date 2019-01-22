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
        $(this).parent().parent().addClass("scotland");
    });
    $(".sc").mouseleave(function(){
        //$(this).parent().parent().addClass("overlay");
        $(this).parent().parent().removeClass("scotland");
    });
});

$(document).ready(function(){
    $(".nh").hover(function(){
        $(this).parent().parent().addClass("newhampshire");
    });
    $(".nh").mouseleave(function(){
        //$(this).parent().parent().addClass("overlay");
        $(this).parent().parent().removeClass("newhampshire");
    });
});

$(document).ready(function(){
    $(".me").hover(function(){
        $(this).parent().parent().addClass("maine");
    });
    $(".me").mouseleave(function(){
        //$(this).parent().parent().addClass("overlay");
        $(this).parent().parent().removeClass("maine");
    });
});
