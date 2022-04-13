(function ($) {
    "use strict"; //use of strict

    // use default language
    refreshLanguage('en');

    /*==== Preloader =====*/
    $(window).on('load', function(){
        $('.loader-container').delay('500').fadeOut(2000);

        var $preloader = $('#page-preloader'),
            $spinner   = $preloader.find('.spinner-loader');
        $spinner.fadeOut();
        $preloader.delay(500).fadeOut('slow');
    });

    $(document).on('ready', function () {

        /*==== Search box Trigger =====*/
        $(document).on('click', '.main-menu-content ul li .search-button', function () {
            $('.search-option').toggleClass('active');
        });

        /*====  side-widget-menu  =====*/
        $(document).on('click','.side-menu-wrap .side-menu-ul .sidenav__item .menu-plus-icon', function () {
            $(this).closest('.sidenav__item').siblings().removeClass('active').find('.side-sub-menu').slideUp(200);
            $(this).closest('.sidenav__item').toggleClass('active').find('.side-sub-menu').slideToggle(200);
            return false;
        });

        /*=========== Mobile Menu Open Control ============*/
        $(document).on('click','.logo-right-button .side-menu-open', function () {
            $('.side-nav-container').addClass('active');
        });

        /*=========== Mobile Menu Close Control ============*/
        $(document).on('click','.humburger-menu .side-menu-close', function () {
            $(".side-nav-container").removeClass('active');
        });

        /*===== Back to Top Button and Navbar Scrolling Effects ======*/
        $(window).on('scroll', function() {
            //header fixed animation and control
            if($(window).scrollTop() > 100) {
                $('.header-menu-wrapper').addClass('header-fixed');
            }else{
                $('.header-menu-wrapper').removeClass('header-fixed');
            }

            //back to top button control
            if ($(window).scrollTop() > 300) {
                $('#back-to-top').addClass('show-back-to-top');
            } else {
                $('#back-to-top').removeClass('show-back-to-top');
            }
        });

       /*===== back to top button click control ======*/
        $(document).on("click", '#back-to-top', function() {
            $('html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });

        /*==== Counter up =====*/
        $('.counter').counterUp({
            delay: 20,
            time: 2000
        });

        /*==== magnificpopup =====*/
        $('.video-play-btn').magnificPopup({
            type: 'video'
        });

        /*====  FAQ  =====*/
        $(document).on('click', '.faq-heading', function () {
            $(this).closest('.faq-panel').siblings().removeClass('active').find('.faq-content').slideUp(200);
            $(this).closest('.faq-panel').toggleClass('active').find('.faq-content').slideToggle(200);
            return false;
        });

        /*==== Nice select =====*/
        $('select').niceSelect();

        /*==== bootstrap tooltip =====*/
        $('[data-toggle="tooltip"]').tooltip();
    });
})(jQuery);

