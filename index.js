$(document).ready(function(){
    document.getElementById('year').innerHTML = new Date().getFullYear();

    $(window).scroll(function(){
        if(this.scrollY > 400){
            $('.navbar').addClass("sticky");
            $('.navbar .max-width span').addClass("sticky-span");
        }else{
            $('.navbar').removeClass("sticky");
            $('.navbar .max-width span').removeClass("sticky-span");
        }
        /*if(this.scrollY > 500){
            $(".scroll-up-btn").addClass("show");
        }else{
            $(".scroll-up-btn").removeClass("show");
        }*/
    });
    // Slide-up script
    $(".scroll-up-btn").click(function(){
        $('html').animate({scrollTop: 0});
    });
    // toogle menu script
    $(".menu-btn").click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    // Typing animation
    var typed = new Typed(".typing", {
        strings: ["Software Engineer", "Web Developer", "Game Programer", "Freelancer", "Computer Scientist"],
        typeSpeed: 120,
        backSpeed: 60,
        startDelay: 1300,
        backDelay: 1300,
        loop: true
    });
    var typed = new Typed(".typing2", {
        strings: ["Software Engineer", "Web Developer", "Game Programer", "Freelancer", "Computer Scientist"],
        typeSpeed: 140,
        backSpeed: 60,
        backDelay: 2000,
        loop: true
    });
});


alert("This page is still in progress. Things may not work yet");