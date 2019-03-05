window.addEventListener("load", function(){
    var overlay= document.getElementsByClassName("overlay");
    oveelay.className += " hidden"
})

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})