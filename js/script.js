
$('.service-owl').owlCarousel({
    items: 5,
    loop: true,
    margin: 10,
    autoplay: true,
    nav: true,
    navText: ['<i class="fa-solid fa-angle-left"></i>', '<i class="fa-solid fa-angle-right"></i>'],
    autoplayTimeout: 1000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        576: {
            items: 1
        },
        768: {
            items: 3
        },
        1000: {
            items: 3
        }
    }
})


// section-two start
// owl two

$('.owl-carousel').owlCarousel({
    items: 5,
    loop: true,
    margin: 10,
    // autoplay: true,
    nav: true,
    // navText: ['<i class="fa-solid fa-angle-left"></i>', '<i class="fa-solid fa-angle-right"></i>'],
    autoplayTimeout: 1000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        576: {
            items: 1
        },
        768: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
})


