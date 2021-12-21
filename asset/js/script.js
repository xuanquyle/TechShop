$(document).ready(function () {
    /// responsive navigation
    $('#bar-icon').click(function (event) {
        if ($(window).width() <= 740) {
            event.stopPropagation();
            $("#navbar-list").slideToggle("fast");
        }
    });
    $("#navbar-list").on("click", function (event) {
        if ($(window).width() <= 740) {
            event.stopPropagation();

        }
    });
    $(document).on("click", function () {
        if ($(window).width() <= 740) {
           if(document.getElementById("navbar-list").style.display=="block")
           {
            document.getElementById("navbar-list").style.display="";
           }
        }
    });


    $(function () {
        $(window).scroll(function() {
            document.getElementById("navbar-list").style.display="";
        });
    });

    // Scroll-up
    $(function () {
        $(window).scroll(function() {
            if ($(this).scrollTop() - 200 > 0) {
                $('#scroll-up').stop().slideDown('fast'); // show the button
            } else {
                $('#scroll-up').stop().slideUp('fast'); // hide the button
            }
        });
    });
    $("#scroll-up").on("click", function () {
        $("html, body").animate({
            scrollTop: 0
        }, 200);
    });

});

// click bar icon responsive
document.getElementById("bar-icon").onclick = () => {
    if(document.querySelector("#navbar-list").style.display=="none")
    {
        document.querySelector(".bar-icon i").className="fas fa-times";
    }
    else
    {
        document.querySelector(".bar-icon i").className="fas fa-bars";
    }
}

// click top link 
document.getElementById("header_top-link").onclick = () => {
    var header_top_right = document.getElementById("header_top-right");
    if (header_top_right.style.overflow == "hidden") {
        header_top_right.style.overflow = "visible";
        document.getElementById("header_top-rightlist").style.borderBottom = "#444 1px solid";
    }
    else {
        header_top_right.style.overflow = "hidden";
    }
}

// scroll to fix nav bar
window.onscroll = function () { scrollToFixNav() };
var navbar = document.getElementById("header-bottom");

var sticky = navbar.offsetTop;
function scrollToFixNav() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}

// dropmenu
$('#product-item').click(function (event) {
    if ($(window).width() > 740) {
        event.stopPropagation();
        $(".product-item .menu-dropdown").slideToggle("fast");
    }
});
$(".product-item .menu-dropdown").on("click", function (event) {
    if ($(window).width() > 740) {
        event.stopPropagation();

    }
});
$(document).on("click", function () {
    if ($(window).width() > 740) {
       if(document.querySelector(".product-item .menu-dropdown").style.display=="block")
       {
        document.querySelector(".product-item .menu-dropdown").style.display="";
       }
    }
});