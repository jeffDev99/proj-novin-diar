/*close btn menu*/
let mainNavList = document.querySelector(".main-nav-list");
let mainNavCloseBtn = document.querySelector(".main-nav-list__close-btn");
let mainNavOpenBtn = document.querySelector(".main-nav-list__open-btn");
let mainNavIcon = document.querySelector(".main-nav-list__btn i");
let backDrop = document.querySelector(".backdrop");
mainNavOpenBtn.addEventListener("click", function () {
    mainNavList.style.right = "0";
    backDrop.style.opacity = "1";
    backDrop.style.pointerEvents = "auto";
})
mainNavCloseBtn.addEventListener("click", function () {
    mainNavList.style.right = "-20.4em";
    backDrop.style.opacity = "0";
    backDrop.style.pointerEvents = "none";
})

/*----------------|submenu|----------------*/
function showSub(className) {
    let mainNavListLink = $('.main-nav-list__link')
    $(className).slideToggle(200, function () {
        $(className).siblings('.main-nav-list__link').toggleClass('active');
    });
}

/*----------------|persian number|----------------*/
$(document).ready(function(){
    $('.pn').persiaNumber();
});
/*----------------|sldier|----------------*/
const swiper = new Swiper('.swiper-slider1 .swiper-container', {
    direction: 'horizontal',
    loop: false,
    slidesPerView: 1,
    spaceBetween: 25,
    navigation: {
        nextEl: '.btn-next',
        prevEl: '.btn-prev',
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 15
        },
        576: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 40
        },
        992: {
            slidesPerView: 2,
            spaceBetween: 20
        }
    }
});

const swiper2 = new Swiper('.swiper-slider2 .swiper-container', {
    direction: 'horizontal',
    loop: false,
    slidesPerView: 1,
    spaceBetween: 25,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',

    }
});


const swiper3 = new Swiper('.swiper-slider3 .swiper-container', {
    direction: 'horizontal',
    loop: false,
    slidesPerView: 5,
    spaceBetween: 25,
    breakpoints: {
        0: {
            slidesPerView: 2,
            spaceBetween: 15
        },
        576: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 40
        },
        992: {
            slidesPerView: 5,
            spaceBetween: 20
        }
    }
});


const swiper4 = new Swiper('.swiper-slider4 .swiper-container', {
    direction: 'horizontal',
    loop: false,
    slidesPerView: 5,
    spaceBetween: 25,
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 15
        },
        576: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 40
        },
        992: {
            slidesPerView: 4,
            spaceBetween: 20
        }
    }
});


const swiper5 = new Swiper('.swiper-slider5 .swiper-container', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    spaceBetween: 25,
    navigation: {
        nextEl: '.btn-next',
        prevEl: '.btn-prev',

    }
});

const swiper6 = new Swiper('.swiper-slider6 .swiper-container', {
    direction: 'horizontal',
    loop: false,
    slidesPerView: 8,
    spaceBetween: 25,
    breakpoints: {
        0: {
            slidesPerView: 2,
            spaceBetween: 15
        },
        576: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 40
        },
        992: {
            slidesPerView: 5,
            spaceBetween: 20
        },
        1200: {
            slidesPerView: 6,
            spaceBetween: 20
        },
        1400: {
            slidesPerView: 7,
            spaceBetween: 20
        }
    }
});

