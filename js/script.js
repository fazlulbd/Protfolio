$(function(){


    // preloader
      setTimeout(function() {
        $('#ctn-preloader').addClass('loaded');
        // Once the preloader has finished, the scroll appears
        $('body').removeClass('no-scroll-y');
    
        if ($('#ctn-preloader').hasClass('loaded')) {
          // It is so that once the preloader is gone, the entire preloader section is deleted
          $('#preloader').delay(1000).queue(function() {
            $(this).remove();
          });
        }
      }, 2000);
  
       
  
  
      
     // change color of navbar
     $(window).scroll(function(){
  
      var scrolling = $(this).scrollTop();
    
      if (scrolling > 30) {
        $('.nav_bg').addClass('nav-mamu')
    
      } else {
        $('.nav_bg').removeClass('nav-mamu')
      }
  
      });
  
      // back to top
      $('.bktp i').click(function(){
          $('html, body').animate({
          scrollTop:0
          }, 1000 );
      });
  
    // back to top show and hide
      $(window).scroll(function(){
          var btpShowHide = $(this).scrollTop();
      
          if (btpShowHide > 20) {
          $('.bktp i').fadeIn(500);
          } else {
          $('.bktp i').fadeOut(500);
          }
      });
  
    // scroll down indicator hide
      $(window).scroll(function(){
          var btpShowHide = $(this).scrollTop();
      
          if (btpShowHide > 20) {
      $('.scroll-down i').fadeOut(500);
          } else {
        $('.scroll-down i').fadeIn(500);
          }
      });
    
      
      // banner slider
      $('.banner_slider').slick({
          prevArrow: '.ban_prev',
          prevArrow: '.ban_prev',
          slidesToShow: 1,
          slidesToScroll: 1,
          responsive: [
          {
              breakpoint: 1024,
              settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
              }
          },
          {
              breakpoint: 600,
              settings: {
              slidesToShow: 1,
              slidesToScroll: 1
              }
          },
          {
              breakpoint: 480,
              settings: {
              slidesToShow: 1,
              slidesToScroll: 1
              }
          }
        
          ]
      });
  
  
      // type js
      $(".typed").typed({
          strings: ["Frontend Developer"],
          // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
          stringsElement: null,
          // typing speed
          typeSpeed: 40,
          // time before typing starts
          startDelay: 1200,
          // backspacing speed
          backSpeed: 50,
          // time before backspacing
          backDelay: 2000,
          // loop
          loop: true,
          // false = infinite
          loopCount: 5,
          // show cursor
          showCursor: true,
          // character for cursor
          cursorChar: "|",
          // attribute to type (null == text)
          attr: null,
          // either html or text
          contentType: 'html',
          // call when done callback function
          callback: function() {},
          // starting callback function before each string
          preStringTyped: function() {},
          //callback for every typed string
          onStringTyped: function() {},
          // callback for reset
          resetCallback: function() {}
      });
  
    // animate - wowjs
    new WOW().init();
  
   
    
   
  
  // r progress bar
    $('.skill_html').rProgressbar({
      
        percentage: 90,
        fillBackgroundColor: '#F9E57A',
        backgroundColor: '#d1d1d1',
        borderRadius: '10px',
        height: '4px',
        width: '100%'
      
      });
  
    $('.skill_css').rProgressbar({
      
        percentage: 76,
        fillBackgroundColor: '#F9E57A',
        backgroundColor: '#d1d1d1',
        borderRadius: '10px',
        height: '4px',
        width: '100%'
      
      });
  
    $('.skill_bootstrap').rProgressbar({
      
        percentage: 75,
        fillBackgroundColor: '#F9E57A',
        backgroundColor: '#d1d1d1',
        borderRadius: '10px',
        height: '4px',
        width: '100%'
      
      });
  
    $('.skill_Photoshop').rProgressbar({
      
        percentage: 60,
        fillBackgroundColor: '#F9E57A',
        backgroundColor: '#d1d1d1',
        borderRadius: '10px',
        height: '4px',
        width: '100%'
      
      });
  
    $('.skill_JavaScript').rProgressbar({
      
        percentage: 65,
        fillBackgroundColor: '#F9E57A',
        backgroundColor: '#d1d1d1',
        borderRadius: '10px',
        height: '4px',
        width: '100%'
      
      });
  
    $('.skill_jquery').rProgressbar({
      
        percentage: 60,
        fillBackgroundColor: '#F9E57A',
        backgroundColor: '#d1d1d1',
        borderRadius: '10px',
        height: '4px',
        width: '100%'
      
      });
    $('.skill_jquery_p').rProgressbar({
      
        percentage: 78,
        fillBackgroundColor: '#F9E57A',
        backgroundColor: '#d1d1d1',
        borderRadius: '10px',
        height: '4px',
        width: '100%'
      
      });
  
    $('.skill_github').rProgressbar({
      
        percentage: 57,
        fillBackgroundColor: '#F9E57A',
        backgroundColor: '#d1d1d1',
        borderRadius: '10px',
        height: '4px',
        width: '100%'
      
      });
  
      // team
      
  $('.team_main').slick({
    autoplay: true,
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 3,
    prevArrow: '.team_prev',
    nextArrow: '.team_next',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });
  
      // testimonial slider
      $('.testi_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '.testi_prev',
        nextArrow: '.testi_next',
        autoplay: true,
      });
  
    
      var containerEl = document.querySelector('.portfolio-mixit');
  
      var mixer = mixitup(containerEl);
        
  });