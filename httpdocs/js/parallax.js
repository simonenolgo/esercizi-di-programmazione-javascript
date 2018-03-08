
jQuery(document).ready(function ($) {

    var windowWidth = $(window).width();
    var windowHeight = $(window).height();

    var typeDevice = Detectizr.device.type;

    // console.log('window width:' + windowWidth);
    // console.log('window height:' + windowHeight);


    $('.parallax').each(function (index, element) {

        var sect = $(this);
        var bg = sect.attr('data-bg');
        var dataParallax = sect.attr('data-parallax');

        sect.prepend('<div class="bg" style="background-image: url('+ bg +') "></div>');

        var positionSectTop = sect.offset().top;
        var positionSectBottom = positionSectTop + sect.outerHeight();
        // console.log('offset top:' + positionSectTop);
        // console.log('offset bottom:' + positionSectBottom);
        var scrollTop;
        var limiteTop = scrollTop - windowHeight;

        var setActiveSection = function () {
            scrollTop = $(this).scrollTop();
            limiteTop = scrollTop + windowHeight;

            if (limiteTop >= positionSectTop && scrollTop <= positionSectBottom){
                sect.addClass('visible');

                var parallaxValue = Math.floor((scrollTop * dataParallax) / 2);

                // console.log('parallaxValue: ' + parallaxValue);
                sect.find('.bg').css('transform', 'translateY('+ parallaxValue +'px)');


                $('.element-parallax').each(function () {
                    var element = $(this);
                    var dataParallaxElement = element.attr('data-parallax');

                    dataParallaxElementValue = Math.floor((scrollTop * dataParallaxElement) / 2);

                    element.css('transform', 'translateY('+ dataParallaxElementValue +'px)')
                });
            }

            else {
                sect.removeClass('visible');
            }



        }

        setActiveSection();


        if (typeDevice == 'desktop') {
            $(window).scroll(setActiveSection);
        }
        else {
            jQuery(window).on("touchmove", setActiveSection);
        }





    }) //parallax


})