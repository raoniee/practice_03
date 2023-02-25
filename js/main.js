$(function () {
    $(window).on('wheel', function (event) {
        // console.log(event.originalEvent.deltaY)
        var wdY = event.originalEvent.deltaY; // 100, -100
        // if (wdY > 0) {
        //     $('#header').addClass('on')
        // } else {
        //     $('#header').removeClass('on')
        // }
        wdY > 0 ? $('#header').addClass('on') : $('#header').removeClass('on')
    })

    $(window).on('scroll', function () {
        var scrValue = $(window).scrollTop(); // 스크롤 값을 구한다.
        console.log(scrValue)
        if (scrValue > 300) {
            $('#element').fadeIn();
        } else {
            $('#element').fadeOut();
        }
        // scrValue > 300 ? $('#toTop').fadeIn() : $('#toTop').fadeOut();

        // scrValue === 0 ? $('#header').removeClass('on') : $('#header').addClass('on')

        if (scrValue === 0) $('#header').removeClass('on')



    })

    $('#element').on('click', function () {
        $('html,body').animate({ scrollTop: 0 }, 800)
    })


    $('.mainSlide').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        // 마우스가 올라가도 슬라이드 넘기기
        pauseOnHover: false,
        pauseOnFocus: false,
        arrows: false,
    })

    $('.mainSlide').on('afterChange', function (e, s, c) {
        $('.main_dots li').eq(c).addClass('on').siblings().removeClass('on');
    })

    $('.main_dots li').on('click', function () {
        var idx = $(this).index();
        $('.mainSlide').slick('slickGoTo', idx)
    })

    $('.artslide').slick({
        dots: true,
        autoplay: false,
        pauseOnHover: false,
        pauseOnFocus: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        swipeToSlide: true,
        infinite: false,
        arrows: false,
    });


    $('#mainBestArt .slideArrow li:nth-child(1)').on('click', function () {
        $('.artslide').slick('slickPrev')

    })

    $('#mainBestArt .slideArrow li:nth-child(2)').on('click', function () {
        $('.artslide').slick('slickNext')
    })


    $('#mainBestArt .slideArrow button').on('click', function () {
        $('#mainBestArt .slideArrow li').removeClass('on')
        $(this).parent().addClass('on');
    });




    $('#mainMD .inner .content .slide').slick({
        arrows: false,
        infinite: false,
    })

    $('#mainMD .inner .tab_manu>li').on('click', function () {
        var idx = $(this).index();
        console.log(idx)
        $('#mainMD .inner .tabs_wrap .content>div').removeClass('on');
        $('#mainMD .inner .tabs_wrap .content>div').eq(idx).addClass('on');

        $('#mainMD .inner .tab_manu>li').removeClass('on');
        $(this).addClass('on');

        $('#mainMD .inner .content .slide').slick('slickGoTo', 0);

    })

    $('#mainMD .slide_arrow li:nth-child(1)').on('click', function () {
        $('#mainMD .inner .content .slide').slick('slickPrev')

    })

    $('#mainMD .slide_arrow li:nth-child(2)').on('click', function () {
        $('#mainMD .inner .content .slide').slick('slickNext')

    })

    $('#mainMD .slide_arrow button').on('click', function () {
        $('#mainMD .slide_arrow li').removeClass('on')
        $(this).parent().addClass('on');
    });

})