$(function(){
    $('.menucontainer').load('menu.html', function(){
      try{
          $('.menucontainer li:nth-child(' + $('#linum').text() + ') a').addClass('active');
      }
      catch(err){
        
      }
      });
    $('.footercontainer').load('footer.html', function(){
          if($(window).width()>820){			
          }
      });
  
      function pauseSlider(event) {
          var current = (event.item.index + 1) - event.relatedTarget._clones.length / 2;
            var allItems = event.item.count;
            if (current > allItems || current <= 0) {
              current = allItems - (current % allItems);
            }
  
            if(current==1){
                homebanner.trigger('stop.owl.autoplay')
              setTimeout(function() {homebanner.trigger('play.owl.autoplay')}, 25000)   
            }
      }
  
      function pauseSlidermob(event) {
          var current = (event.item.index + 1) - event.relatedTarget._clones.length / 2;
            var allItems = event.item.count;
            if (current > allItems || current <= 0) {
              current = allItems - (current % allItems);
            }
  
            if(current==1){
                homebannermobile.trigger('stop.owl.autoplay')
                  setTimeout(function() {homebannermobile.trigger('play.owl.autoplay')}, 25000)   
            }
      }
  
      
  
  
      var homecontentslider = $('#slidershowcase .homeslideritem02');
      //var homecontentslider = $('.homecontentslider');
      homecontentslider.owlCarousel({
        items:2,
        merge:true,
        loop:true,
        margin:30,
        video:true,
        lazyLoad:true,
        center:false,
        autoplay:false,      
        animateOut: 'fadeOut',
        // autoplayTimeout: 3500,
        //autoplaySpeed: 3000,
        smartSpeed: 1000,
        slideTransition: 'ease-in-out',
        autoplayHoverPause: true,
        nav: true,
        navText: ["<img src='images/slideArrowLeft.svg' class='slidearrow slideleft'>","<img src='images/slideArrowRight.svg' class='slidearrow slideright'>"],
        responsive:{
          0:{
            items:1,
            smartSpeed: 500,
            stagePadding: 25,
            nav: false,
            dots:true,
            loop:false
          },
          850:{
            items:1,
            stagePadding: 25
          },
          1024:{
            items:2,
            nav: true,
            dots:false
          }
        }
    });
  
    $('#showcase .slidenav').click(function(e){
      e.preventDefault();
      homecontentslider.trigger('next.owl.carousel');
    });
  
    // var homecontentsliderexperience = $('#experience .homecontentslider');
    // homecontentsliderexperience.owlCarousel({
    //     items:1,
    //     merge:true,
    //     loop:true,
    //     margin:10,
    //     video:true,
    //     lazyLoad:true,
    //     center:true,
    //     autoplay:false,      
    //     animateOut: 'fadeOut',
    //     autoplayTimeout: 3000,
    //     //autoplaySpeed: 3000,
    //     smartSpeed: 3000,
    //     slideTransition: 'ease-in-out',
    //     //autoplayHoverPause: true,
    // });
  
    // $('#experience .slidenav').click(function(e){
    //   e.preventDefault();
    //   homecontentsliderexperience.trigger('next.owl.carousel');
    // });
  
    var homeslideritem02experience = $('#sliderexperience .homeslideritem02');
    homeslideritem02experience.owlCarousel({
        items:2,
        merge:true,
        loop:true,
        margin:30,
        video:true,
        lazyLoad:true,
        center:false,
        autoplay:false,      
        animateOut: 'fadeOut',
        //autoplayTimeout: 3500,
        //autoplaySpeed: 3000,
        smartSpeed: 1000,
        slideTransition: 'ease-in-out',
        nav: true,
        navText: ["<img src='images/slideArrowLeft.svg' class='slidearrow slideleft'>","<img src='images/slideArrowRight.svg' class='slidearrow slideright'>"],
        autoplayHoverPause: true,
        responsive:{
          0:{
            items:1,
            smartSpeed: 500,
            stagePadding: 25,
            nav: false,
            dots:true,
            loop:false
          },
          850:{
            items:1,
            stagePadding: 25
          },
          1024:{
            items:2,
            nav: true,
            dots:false
          }
        }
    });
    
    var homeslideritem02conversation = $('#sliderconversation .homeslideritem02');
    homeslideritem02conversation.owlCarousel({
        items:2,
        merge:true,
        loop:true,
        margin:30,
        video:true,
        lazyLoad:true,
        center:false,
        autoplay:false,      
        animateOut: 'fadeOut',
        //autoplayTimeout: 3500,
        //autoplaySpeed: 3000,
        smartSpeed: 1000,
        slideTransition: 'ease-in-out',
        nav: true,
        navText: ["<img src='images/slideArrowLeft.svg' class='slidearrow slideleft'>","<img src='images/slideArrowRight.svg' class='slidearrow slideright'>"],
        autoplayHoverPause: true,
        responsive:{
          0:{
            items:1,
            smartSpeed: 500,
            stagePadding: 25,
            nav: false,
            dots:true,
            loop:false
          },
          850:{
            items:1,
            stagePadding: 25
          },
          1024:{
            items:2,
            nav: true,
            dots:false
          }
        }
    });
  
    $('#conversations .slidenav').click(function(e){
      e.preventDefault();
      homeslideritem02conversation.trigger('next.owl.carousel');
    });
  
    var homeslideritem02workshop = $('#sliderworkshop .homeslideritem02');
    homeslideritem02workshop.owlCarousel({
        items:3,
        merge:true,
        loop:true,
        margin:30,
        video:true,
        lazyLoad:true,
        // center:true,
        autoplay:false,       
        animateOut: 'fadeOut',
        //autoplayTimeout: 3500,
        //autoplaySpeed: 3000,
        smartSpeed: 1000,
        slideTransition: 'ease-in-out',
        autoplayHoverPause: true,
        nav: true,
        navText: ["<img src='images/slideArrowLeft.svg' class='slidearrow slideleft'>","<img src='images/slideArrowRight.svg' class='slidearrow slideright'>"],
        responsive:{
          0:{
            items:1,
            smartSpeed: 500,
            stagePadding: 25,
            nav: false,
            dots:true,
            loop:false
          },
          850:{
            items:1,
            stagePadding: 25
          },
          1024:{
            items:3,
            nav: true,
            dots:false
          }
        }
    });
  
    $('#workshops .slidenav').click(function(e){
      e.preventDefault();
      homeslideritem02workshop.trigger('next.owl.carousel');
    });
  
    homeslideritem02workshop.on('initialize.owl.carousel', function(event) {
      random(homeslideritem02workshop);
    });
  
  
    var homeslideritem04 = $('.homeslideritem04');
    homeslideritem04.owlCarousel({
        items:6,
        merge:true,
        loop:true,
        margin:30,
        video:true,
        lazyLoad:true,
        // center:true,
         autoplay:false,
         animateOut: 'fadeOut',
         //autoplayTimeout: 3500,
         // autoplaySpeed: 3000,
         smartSpeed: 1000,
         slideTransition: 'ease-in-out',
         dots:false,
         nav: true,
         navText: ["<img src='images/slideArrowLeft.svg' class='slidearrow slideleft'>","<img src='images/slideArrowRight.svg' class='slidearrow slideright'>"],
         autoplayHoverPause: true,
         responsive:{
           0:{
             items:3,
             nav: false,
             dots:true,
             margin:10
           },
           850:{
             items:3,
             stagePadding: 25,
             nav: false,
             dots:true,
             margin:15
           },
           1024:{
             items:6,
             nav: true,
             dots:false
           }
         }
    });
  
  
    var homeslideritem06 = $('.homeslideritem06');
    homeslideritem06.owlCarousel({
        items:6,
        merge:true,
        loop:false,
        margin:30,
        video:true,
        lazyLoad:true,
        // center:true,
         autoplay:false,
         animateOut: 'fadeOut',
         //autoplayTimeout: 3500,
         // autoplaySpeed: 3000,
         smartSpeed: 1000,
         slideTransition: 'ease-in-out',
         dots:false,
         nav: true,
         navText: ["<img src='images/slideArrowLeft.svg' class='slidearrow slideleft'>","<img src='images/slideArrowRight.svg' class='slidearrow slideright'>"],
         autoplayHoverPause: true,
         responsive:{
           0:{
             items:3,
             nav: false,
             dots:true,
             margin:10
           },
           850:{
             items:3,
             stagePadding: 25,
             nav: false,
             dots:true,
             margin:15
           },
           1024:{
             items:6,
             nav: true,
             dots:false
           }
         }
    });
  
    var homeslideritem07 = $('.homeslideritem07');
    homeslideritem07.owlCarousel({
        items:6,
        merge:true,
        loop:false,
        margin:30,
        video:true,
        lazyLoad:true,
        // center:true,
         autoplay:false,
         animateOut: 'fadeOut',
         //autoplayTimeout: 3500,
         // autoplaySpeed: 3000,
         smartSpeed: 1000,
         slideTransition: 'ease-in-out',
         dots:false,
         nav: true,
         navText: ["<img src='images/slideArrowLeft.svg' class='slidearrow slideleft'>","<img src='images/slideArrowRight.svg' class='slidearrow slideright'>"],
         autoplayHoverPause: true,
         responsive:{
           0:{
             items:3,
             nav: false,
             dots:true,
             margin:10
           },
           850:{
             items:3,
             stagePadding: 25,
             nav: false,
             dots:true,
             margin:15
           },
           1024:{
             items:6,
             nav: true,
             dots:false
           }
         }
    });
  
    var homeslideritem05= $('.homeslideritem05');
    homeslideritem05.owlCarousel({
        items:6,
        merge:true,
        loop:true,
        margin:30,
        video:true,
        lazyLoad:true,
        // center:true,
         autoplay:false,
         animateOut: 'fadeOut',
         //autoplayTimeout: 3500,
         // autoplaySpeed: 3000,
         smartSpeed: 1000,
         slideTransition: 'ease-in-out',
         dots:false,
         nav: true,
         navText: ["<img src='images/slideArrowLeft.svg' class='slidearrow slideleft'>","<img src='images/slideArrowRight.svg' class='slidearrow slideright'>"],
         autoplayHoverPause: true,
         responsive:{
           0:{
             items:3,
             nav: false,
             dots:true,
             margin:10
           },
           850:{
             items:3,
             stagePadding: 25,
             nav: false,
             dots:true,
             margin:15
           },
           1024:{
             items:6,
             nav: true,
             dots:false
           }
         }
    });
  
      window.addEventListener("scroll", runanim);
  
      // To check the scroll position on page load
      runanim();
     
  
      // setTimeout(function(){
      //   var modal1 = new bootstrap.Modal(document.getElementById('myModal')); 
      //   modal1.toggle(); 
      // }, 15000);
  
      // setTimeout(function(){
      //   var modal2 = new bootstrap.Modal(document.getElementById('modalRegister')); 
      //   modal2.toggle(); 
      // }, 15000);
  });
  
  
  function runanim() {
      var reveals = document.querySelectorAll(".runanim");
      for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active");
        } else {
          reveals[i].classList.remove("active");
        }
      }            
    }
  
    //Sort random function
    function random(owlSelector){
      debugger;
      owlSelector.children().sort(function(){
          return Math.round(Math.random()) - 0.5;
      }).each(function(){
        $(this).appendTo(owlSelector);
      });
    }
  
  
    $(document).on('click', '.menu-button', function () {
  
      console.log("ckuc");
      $(".navClose").addClass('closeOpen');
      $(".cbp-spmenu").addClass("cbp-spmenu-open");
  
  });
  
  $(document).on('click', '.navClose', function () {
  
      $(".cbp-spmenu").removeClass("cbp-spmenu-open");
  
      $(this).removeClass('closeOpen');
  
      $(".menu-button").removeClass("active");
  
  });