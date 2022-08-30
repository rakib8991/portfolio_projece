// -------------------------------------------------------
//Typing Text Effect function
// -------------------------------------------------------

function typingText(){

    // GSAP Text Typing Effect 
    //Change  Array Value for Change Text of Typing 
    const words = [" Web Developer.", " Web Designer", " Content Writer", " Youtuber"];

    let textTl = gsap.timeline({repeat: -1});

    words.forEach(word => {
        let tl = gsap.timeline({repeat: 1, yoyo: true, repeatDelay:1})
        tl.to('.typing-text', {duration: 1, text: word})
        textTl.add(tl)
    })

}
typingText();

//----------------------------------------------------
// Page Preloder
//----------------------------------------------------
const preloder = document.querySelector('#preloder');
const body = document.querySelector('body');
window.addEventListener('load',preLoder);
function preLoder(){
    preloder.style.display = 'none';
    body.classList.remove('scrollbar');
    const tl=gsap.timeline();
    tl.to(".slider1",{x:"-100%",duration:1,});
    tl.to(".slider2",{x:"100%",duration:1},"-=1");
}

$(document).ready(function(){

    // ---------------------------------------------------------------
    // Mobile Mneu Toggle Function
    // -------------------------------------------------------

    function mobileMenuToggle(){

        var menuToggle = $('.menu-toggle');
        var removerMenu = $('.toggle-remove');
        
        menuToggle.click(function(){
            $('.menu-area').css("transform","translateX(0%)");
        });
        removerMenu.click(function(){
            $('.menu-area').css("transform","translateX(-150%)");
        });
        
        $(window).resize(function(){
            windowWidth = $(window).width();
            if(windowWidth > 912){
                $('.menu-area').removeAttr('style');
            }
        });

        
    }
    mobileMenuToggle();

    // -------------------------------------------------------
    // Progressbar Function
    // -------------------------------------------------------

    function progressBar(){

            $('.graphic').rProgressbar({
                percentage: 95,
            });

            $('.web').rProgressbar({
                percentage: 90,
            });

            $('.logo').rProgressbar({
                percentage: 80,
            });

            $('.html').rProgressbar({
                percentage: 95,
            })

            $('.javascript').rProgressbar({
                percentage: 70,
            });

            $('.php').rProgressbar({
                percentage: 70,
            });

    }
    progressBar();
 // --------------------------------------------------------
 // Owl Carousel
 //----------------------------------------------------------
    $('.owl-one').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots: false,
        responsive:{
            0:{
                items:1
            },
            800:{
                items:2
            },
            1000:{
                items:2
            }
        }
    })
    $('.owl-two').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots: false,
        responsive:{
            0:{
                items:2
            },
            800:{
                items:2
            },
            1000:{
                items:4
            }
        }
    })
    $( ".owl-prev").html('<i class="fa fa-chevron-left"></i>');
    $( ".owl-next").html('<i class="fa fa-chevron-right"></i>');

    //---------------------------------------------------
    // Mixit Up
    //---------------------------------------------------

    var elem = $("body").find(".container");
    if(elem.length){
        var mixer = mixitup('.container');
    }    
    //---------------------------------------------------
    // Portfolio
    //---------------------------------------------------
    var portfolioBtn = $('.portfolio-btn').click(function(){

        $(this).addClass('active').siblings().removeClass('active');

    });
    //----------------------------------------------------
    // Single Post Video Popups 
    //----------------------------------------------------
    function singlePostVideo(){
        $.fn.center = function (ami) {
            var w = $(window);
            this.css({
            'position':'absolute',
            'top':Math.abs(((w.height() - this.outerHeight()) / 2) + w.scrollTop()),
            'left':Math.abs(((w.width() - this.outerWidth())/ 2) + w.scrollLeft())
            });
            return this;
        }

        $('.project-video-wrapper').click(function(){
            $('.project-main-video').fadeIn();
            $(document).ready(function(ami){
                $('.project-main-video').center();
            });
            $('.video-background-shedow').fadeIn();
        });
        $('.remove-video').click(function(){
            $('.project-main-video').fadeOut('1000');
            $('.video-background-shedow').hide();
        });
        $('.video-background-shedow').click(function(){
            $('.project-main-video').fadeOut('1000');
            $('.video-background-shedow').hide();
        });
    }
    singlePostVideo();
    // Video Responsive
    if($(window).width() < 912){
        $('.project-main-video iframe').attr('width','320');
        $('.project-main-video iframe').attr('height','180');
    }

    //----------------------------------------------------
    // Cursor Sircle / cursor shedow
    //----------------------------------------------------
    // set the starting position of the cursor outside of the screen
    let clientX = 100;
    let clientY = 100;
    const innerCursor = document.querySelector(".cursor--small");
  // add listener to track the current mouse position
  document.addEventListener("mousemove", e => {
    clientX = e.clientX;
    clientY = e.clientY;
    innerCursor.style.transform = "translate("+e.clientX +"px,"+e.clientY+"px)";
  });
  // Cursor Hover Class add
  var cursorBtn = $('.cursor-btn');
  cursorBtn.mouseover(function(){
    $('.cursor--small').addClass('cursor-hover');
  });
  cursorBtn.mouseout(function(){
    $('.cursor--small').removeClass('cursor-hover');
  });

});





