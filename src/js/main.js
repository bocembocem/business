$(function() {
    let countArrow = 0;
    let countSlide = 0;
    let countControls = 0;
    let menuCheck = false;

    getNormal(menuCheck);

    $(window).on('resize', function() {
        getNormal(menuCheck);
    });

    $('.price-item-inner').on('mouseenter', function() {
        $(this).css({
            backgroundColor: '#709dca',
            zIndex: 4
        });

        $(this).parent().children('.price-item-layer').css({
            zIndex: 2
        });
        $(this).children('.price-item-title').css({
            color: '#ffffff'
        });
        $(this).children('.price-item-number').css({
            color: '#ffffff'
        });
        $(this).children('.price-item-subtitle').css({
            color: '#ffffff'
        });
        $(this).children('.price-item-condition').css({
            color: '#c2e1ff',
            borderTop: '1px solid #c2e1ff'
        });
    });
    $('.price-item-inner').on('mouseleave', function() {
        $(this).css({
            backgroundColor: '#ffffff',
            zIndex: 1
        });

        $(this).parent().children('.price-item-layer').css({
            zIndex: -1
        });
        $(this).children('.price-item-title').css({
            color: '#818b95'
        });
        $(this).children('.price-item-number').css({
            color: '#ffbb42'
        });
        $(this).children('.price-item-subtitle').css({
            color: '#818b95'
        });
        $(this).children('.price-item-condition').css({
            color: '#b5bbc1',
            borderTop: '1px solid #e2e9f0'
        });
    });

    $('.work-step-arrow').each(function() {
        if(countArrow % 2 != 0) {
            $(this).css({
                top: '100px',
                transform: 'rotate(180deg)'
            });
        }
        countArrow++;
    });

    $('.header-menu-mini').on('mouseenter', function() {
        $('.header-menu-mini-line').css({
            backgroundColor: '#ffbb42'
        });
    });
    $('.header-menu-mini').on('mouseleave', function() {
        $('.header-menu-mini-line').css({
            backgroundColor: '#868686'
        });
    });
    $('.header-menu-mini').on('click', function() {
        if(!menuCheck) {
            $('.header-menu-links').css({
                display: 'flex'
            });
        } else {
            $('.header-menu-links').css({
                display: 'none'
            });
        }
        menuCheck = !menuCheck;
    });

    $('.banner2-carousel-slide-img').each(function() {
        $(this).attr('data-num', countSlide);
        countSlide++;
    });

    $('.banner2-controls-button').each(function() {
        $(this).attr('data-num', countControls);
        countControls++;
        
        $(this).on('click', function() {
            let attr = $(this).attr('data-num');
            let slideW = parseInt($('.banner2-carousel-slide').css('width'));
            $('.banner2-controls-button').removeClass('banner2-controls-button-active');
            $(this).addClass('banner2-controls-button-active');
            $('.banner2-carousel-slide-img').first().stop().animate({
                marginLeft: -slideW * attr
            });           
        });
    });

    function getNormal() {
        let macWidth = parseInt($('.banner2-carousel-mac-img').css('width'));
        let macHeight = parseInt($('.banner2-carousel-mac-img').css('height'));
        let macHeightDelta = macHeight * 0.0523255814;

        $('.banner2-carousel-mac').css({
            top: -macHeight * 0.843023256
        });

        let macTop = parseInt($('.banner2-carousel-mac').css('top'));
        $('.banner2-carousel-slide').css({
            width: macWidth * 0.686728395,
            top: macTop + macHeightDelta
        });
        $('.banner-form-inner').css({
            paddingBottom: macHeight
        });
        $('.banner2-carousel').css({
            paddingBottom: macHeight * .156976744 + 20
        });

        let mapWidth = parseInt($('.map-image-bg').css('width'));
        if(mapWidth > 527) {
            $('.map-image-dot').css({
                width: mapWidth * 0.45862069
            });
        } else {
            $('.map-image-dot').css({
                width: '243px'
            });
        }

        if(parseInt($(window).outerWidth()) > 770) {
            $('.header-menu-links').css({
                display: 'flex'
            });
            menuCheck = true;
        } else {
            $('.header-menu-links').css({
                display: 'none'
            });
            menuCheck = false;
        }

        $('.banner2-controls-button').removeClass('banner2-controls-button-active').first().addClass('banner2-controls-button-active');
        $('.banner2-carousel-slide-img').first().animate({
            marginLeft: 0
        });
    }    
});

