$(function() {
    $('body').css('visibility','visible');
    var bannerNum = $('.banner-swiper-container .swiper-slide').length;
    if (bannerNum > 1) {
        $('.banner-swiper-container .swiper-pagination').css('display','block');
        var bannerSwiper = new Swiper('.banner-swiper-container', {
            pagination: {
                el: '.swiper-pagination',
            },
        });
    }
    var step_swiper = new Swiper('.step-swiper-container', {
        initialSlide: 0,
        effect: 'coverflow',
        loop: true,
        // autoplay:true,
        centeredSlides: true,
        slidesPerView: 'auto',
        spaceBetween : 50,
        coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 200,
        modifier: 1,
        slideShadows : false,
        },
        pagination: {
            el: '.swiper-pagination',
        },
    });
})