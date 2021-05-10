if($(window).width() >= 901){

	var swiper = new Swiper('.swiper-container', {
		  direction: 'vertical',
		  mousewheel: {
			  forceToAxis:false,
		  },
		  freeMode: true,
	      scrollbar: {
	        el: '.swiper-scrollbar',
	        hide: true,
	      },
	      navigation: {
	        nextEl: '.swiper-button-next',
	        prevEl: '.swiper-button-prev',       
	      },
	      breakpoints: {
	            900: {
	                direction: 'horizontal',
	            }
	       },
	   	
	});
	
	$('#logo').on('click',function() {
		$('.swiper-button-prev').trigger('click').trigger('click')
	})
}
var swiper = new Swiper('.bottom-swipe-container1', {
	direction: 'horizontal',
	loop: true,
	slidesPerView: 1,
	navigation: {
      nextEl: '.swipe2-next',
      prevEl: '.swipe2-prev',
    },
});
var swiper = new Swiper('.bottom-swipe-container2', {
	direction: 'horizontal',
	loop: true,
	slidesPerView: 1,
	navigation: {
      nextEl: '.swipe3-next',
      prevEl: '.swipe3-prev',
    },
});



if ($('.main-wrapper.swiper-wrapper').length) {
	
	
	function isMobile() {
		return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
	}
	
	if (!isMobile()) {
		
		
		var observer = new MutationObserver(function(mutations) {
		    mutations.forEach(function(mutationRecord) {
		        console.log('style changed!');
		    });    
		});
	
		const test = document.querySelector('.swiper-wrapper');
		let counter = 0;
		
// 		const MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
		const transformObserver = new MutationObserver(function(mutations) {
		  const styleMutation = mutations[0];
		  const oldValue = styleMutation.oldValue.split(';').find(prop => prop.startsWith('transform') || prop.startsWith(' transform'));
		  const current = styleMutation.target.style.transform;
		  const old = ((oldValue && oldValue.split(':')[1]) || '').trim();
		

		
		  if (current == 'translate3d(0px, 0px, 0px)') {
			  $('.menu-col').removeClass('active');
		  } else {
			  $('.menu-col').addClass('active');
			  $('nav').css('left','-415px')
			}
		});
		
		transformObserver.observe(test, {
		  attributes: true, //configure it to listen to attribute changes
		  attributeFilter: ['style'], //configure it to limit the listening only to the style attribute
		  attributeOldValue: true // keep the old value so we can compare;
		});
	
	}
} else {
	if($(window).width() >= 1300){
/*
		$(function () {
		  $(document).scroll(function () {
		    var $nav = $(".menu-col");
		    var wrapper = $('.wrapper');
		    var pgCont = $('section#page-container');
		    $nav.toggleClass('scrolled', $(this).scrollTop() > 50);
		    wrapper.toggleClass('scrolled', $(document).scrollTop() > 50);
		    pgCont.toggleClass('scrolled', $(this).scrollTop() > 50)
		  });
		});
*/
	}
}

$(function () {
  count = 0;

  wordsArray1 = ["Pixels", "Qubit", "Firewall"];
  setInterval(function () {
    count++;
    $("#switch").fadeOut(400, function () {
      $(this).text(wordsArray1[count % wordsArray1.length]).fadeIn(400);
    });
  }, 2000);
});



$('body').bind('mousewheel', function(e) {
    if(e.originalEvent.wheelDelta / 120 > 0) {
        //mouse up
    } else {
        $('.swiper-slide-active #findfit').addClass('animate__slideInUp');
        $('.swiper-slide-active .deg-tiles div').addClass('animate__zoomIn');
        $('.swiper-slide-active #jumpgirl').addClass('animate__flipInY');
        $('.swiper-slide-active #laugh').addClass('animate__fadeInRight');
        $('.swiper-slide-active .form').addClass('animate__fadeInLeft');
        $('.swiper-slide-active .title4').addClass('animate__fadeInDown');
        $('.swiper-slide-active .post-tiles div').addClass('animate__zoomIn');
    }
});

$('.swiper-button-next').on('click',function() {
  $('.swiper-slide-active #findfit').addClass('animate__slideInUp');
   $('.swiper-slide-active .deg-tiles div').addClass('animate__zoomIn');    
   $('.swiper-slide-active #jumpgirl').addClass('animate__flipInY');
   $('.swiper-slide-active #laugh').addClass('animate__fadeInRight');
   $('.swiper-slide-active .form').addClass('animate__fadeInLeft');
   $('.swiper-slide-active .title4').addClass('animate__fadeInDown');
   $('.swiper-slide-active .post-tiles div').addClass('animate__zoomIn');
})

$(function () {
  count2 = 0;

  wordsArray = ["VFX Artist", "Security Analyst", "Software Engineer", "Roboticist"];
  setInterval(function () {
    count2++;
    $("#switch2").fadeOut(400, function () {
      $(this).text(wordsArray[count2 % wordsArray.length]).fadeIn(400);
    });
  }, 2000);
});


/*
$('.card').on('click',function(){
	$('.card').removeClass('animate__animated animate__slow animate__zoomIn');
	$('.card div').removeClass('animate__zoomIn');
	$(this).toggleClass('flipped');
})
*/
$('.card').on({
    mouseenter: function () {
	    
		$(this).addClass('flipped');
		
        
        $('.card').removeClass('animate__animated animate__slow animate__zoomIn');
		$('.card div').removeClass('animate__zoomIn');
    },
    mouseleave: function () {
        $(this).removeClass('flipped');
    }
});
	

$('.filters-wrap').hide()
$('.filter-btn').on('click',function() {
	$('.filters-wrap').slideToggle()
})



$('#navi').on('click',function() {
	console.log('click')
	$('nav').animate({
		left: '0'
	})

})
$('#close-nav').on('click',function(){
	$('nav').animate({
		left: '-465px'
	})
})

$('.cat-child').hide();
// $('.deg-accordion ul').hide();

$('.nav-cat span').on('click',function(){
	if($(this).parent().find('.cat-child').is(':visible')){ 
		$(this).parent().find('.cat-child').slideUp();
		$('.fa-plus').removeClass('rotate');
	}else{
		$('.cat-child').slideUp();
		$('.fa-plus').removeClass('rotate');
		$(this).parent().find('.cat-child').slideToggle();
		$(this).parent().find('.fa-plus').toggleClass('rotate');
	}
})
/*
$('.deg-accordion').on('click',function(){

	if($(this).find('ul.level3').is(':visible')){ 
		$(this).find('ul.level3').slideUp()
	} else {
		$('ul.level3').slideUp()
		$(this).find('ul.level3').slideToggle()
	}
})
*/
$('#degree-drop span').on('click',function() {
  $('.degree-ops').toggleClass('active')
  $('#degree-drop i').toggleClass('flipit')
})

if($(window).width() < 550){
/*
	$('#degree-drop').on('blur',function() {
			document.location = $(this).val();
	})
*/

	
	flipped = false;
	
	$('.card').on('click',function(){
		console.log('intial ' + flipped);
		if(flipped == false) {
			$('.back ul li a').on('click',function(e){
				e.preventDefault();
				
				setTimeout(function(){
					flipped = true;
					console.log('timeout ' + flipped)
				},2000)
			})
		} else{$(this).find('a').unbind();}
	})
	
	$('.flipped .back ul li a').on('click',function(){
		$(this).unbind();
	})
} else{
	$('#degree-drop').on('change',function() {
		window.open(this.value)
	})
}


// https://test.cors.workers.dev/?


	
Object.defineProperty(HTMLMediaElement.prototype, 'playing', {
	get: function () {
    return !!(this.currentTime > 0 && !this.paused && !this.ended && this.readyState > 2);
}});


if ($('#player').length) {
	$('body').on('click touchstart', function () {
	        const videoElement = document.getElementById('player');
	        if (videoElement.playing) {
	
	        }
	        else {
	            videoElement.play();
	        }
	});
}

$('.slide-btns div').on('click',function(){
	$('.slide-btns div').removeClass('active');
	$(this).addClass('active');
	var whatpanel = $(this).data('info')
	$('.info-panels div').removeClass('active');
	$('.info-panels div[data-info='+ whatpanel +']').addClass('active');
})
$('.auth-btns div').on('click',function(){
	$('.auth-btns div').removeClass('active');
	$(this).addClass('active');
	var whatpanel = $(this).data('info')
	$('.auth-panels div').removeClass('active');
	$('.auth-panels div[data-info='+ whatpanel +']').addClass('active');
})


///////////////////////////////////////////////////////////////////////////////////
//                      jquery countTo js plugin
///////////////////////////////////////////////////////////////////////////////////

jQuery(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        // CommonJS
        factory(require('jquery'));
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function ($) {
  var CountTo = function (element, options) {
    this.$element = $(element);
    this.options  = $.extend({}, CountTo.DEFAULTS, this.dataOptions(), options);
    this.init();
  };

  CountTo.DEFAULTS = {
    from: 0,               // the number the element should start at
    to: 0,                 // the number the element should end at
    speed: 1000,           // how long it should take to count between the target numbers
    refreshInterval: 100,  // how often the element should be updated
    decimals: 0,           // the number of decimal places to show
    formatter: formatter,  // handler for formatting the value before rendering
    onUpdate: null,        // callback method for every time the element is updated
    onComplete: null       // callback method for when the element finishes updating
  };

  CountTo.prototype.init = function () {
    this.value     = this.options.from;
    this.loops     = Math.ceil(this.options.speed / this.options.refreshInterval);
    this.loopCount = 0;
    this.increment = (this.options.to - this.options.from) / this.loops;
  };

  CountTo.prototype.dataOptions = function () {
    var options = {
      from:            this.$element.data('from'),
      to:              this.$element.data('to'),
      speed:           this.$element.data('speed'),
      refreshInterval: this.$element.data('refresh-interval'),
      decimals:        this.$element.data('decimals')
    };

    var keys = Object.keys(options);

    for (var i in keys) {
      var key = keys[i];

      if (typeof(options[key]) === 'undefined') {
        delete options[key];
      }
    }

    return options;
  };

  CountTo.prototype.update = function () {
    this.value += this.increment;
    this.loopCount++;

    this.render();

    if (typeof(this.options.onUpdate) == 'function') {
      this.options.onUpdate.call(this.$element, this.value);
    }

    if (this.loopCount >= this.loops) {
      clearInterval(this.interval);
      this.value = this.options.to;

      if (typeof(this.options.onComplete) == 'function') {
        this.options.onComplete.call(this.$element, this.value);
      }
    }
  };

  CountTo.prototype.render = function () {
    var formattedValue = this.options.formatter.call(this.$element, this.value, this.options);
    this.$element.text(formattedValue);
  };

  CountTo.prototype.restart = function () {
    this.stop();
    this.init();
    this.start();
  };

  CountTo.prototype.start = function () {
    this.stop();
    this.render();
    this.interval = setInterval(this.update.bind(this), this.options.refreshInterval);
  };

  CountTo.prototype.stop = function () {
    if (this.interval) {
      clearInterval(this.interval);
    }
  };

  CountTo.prototype.toggle = function () {
    if (this.interval) {
      this.stop();
    } else {
      this.start();
    }
  };

  function formatter(value, options) {
    return value.toFixed(options.decimals);
  }

  $.fn.countTo = function (option) {
    return this.each(function () {
      var $this   = $(this);
      var data    = $this.data('countTo');
      var init    = !data || typeof(option) === 'object';
      var options = typeof(option) === 'object' ? option : {};
      var method  = typeof(option) === 'string' ? option : 'start';

      if (init) {
        if (data) data.stop();
        $this.data('countTo', data = new CountTo(this, options));
      }

      data[method].call(data);
    });
  };
}));

///////////////////////////////////////////////////////////////////////////////////

if ($('.timer').length){

$.fn.isOnScreen = function(){

    var win = $(window);

    var viewport = {
        top : win.scrollTop(),
        left : win.scrollLeft()
    };
    viewport.right = viewport.left + win.width();
    viewport.bottom = viewport.top + win.height();

    var bounds = this.offset();
    bounds.right = bounds.left + this.outerWidth();
    bounds.bottom = bounds.top + this.outerHeight();

    return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));

};

	$(window).scroll(function(){
        if ($('.timer').isOnScreen()) {
			$('.timer').countTo();
			$(window).off('scroll');
        } 
	});
}

$('.calendar-pg .half b:contains("Jump Start:")').append('<i class="fas fa-question-circle"></i><div class="jump-start"><i class="fas fa-times-circle"></i><img src="/media/jump-start-uat.png" alt="jump start uat"><h3>What are jump starts?</h3><p>Why wait until next semester to start courses when you can jump start your education? Jump Starts are mid-semester entry points for undergrad students to begin courses. The same classes offered at the traditional start dates are available. By your second semester, you’ll be right with your cohort, or you can even graduate early!</p></div>');

$('.calendar-pg b .fa-question-circle').on('click',function(){
	$(this).parent().find('.jump-start').toggleClass('active');
})
$('.jump-start i.fa-times-circle').on('click',function(){
	$('.jump-start').removeClass('active');
})

$('.totop').on('click',function(){
	$("html, body").animate({ scrollTop: 0 }, "swing");
})
