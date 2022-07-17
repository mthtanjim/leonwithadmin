/* =====================================
All JavaScript fuctions Start
======================================*/
(function ($) {
	
    'use strict';
/*--------------------------------------------------------------------------------------------
	document.ready ALL FUNCTION START
---------------------------------------------------------------------------------------------*/	

	  jQuery('.selectpicker').selectpicker();
	  
	  jQuery('.swiper-filter').on( 'click', 'a', function() {
		var filter = jQuery(this).attr('data-filter');
		
		jQuery('.swiper-product .swiper-slide').css('display', 'none')
		jQuery('.swiper-product .swiper-slide' + filter).css('display', '')
		jQuery( '.swiper-filter a' ).removeClass( 'swiper-active' );
		jQuery( this ).addClass( 'swiper-active' );
		
		productSwiper.updateSize();
		productSwiper.updateSlides();
		productSwiper.updateProgress();
		productSwiper.updateSlidesClasses();
		productSwiper.slideTo(0);
		productSwiper.scrollbar.updateSize();
		
		return false;
	  });

	  var filterSwiper = new Swiper ('.swiper-filter', {
		  slidesPerView: 4,
		  spaceBetween: 30,
		})
	  
	  var productSwiper = new Swiper ('.swiper-product', {
		  /*grabCursor: true,*/
		  observer: true,
		  slidesPerView: 4,
		  runCallbacksOnInit: true,
		  observer: true,
		  breakpoints: {
			0:{
				slidesPerView: 1,
			},
			480:{
				slidesPerView: 1,
			},
			580:{
				slidesPerView: 2,
			},						
			767:{
				slidesPerView: 2,
			},
			991:{
				slidesPerView: 3,
			},			
			1152:{
				slidesPerView: 4,
			}
		  },
		  spaceBetween: 30,
		  navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		  },
		  // If we need pagination
		  pagination: {
			el: '.swiper-pagination',
			clickable : true,
		  },
		  // And if we need scrollbar
		  scrollbar: {
			el: '.swiper-scrollbar',
			draggable : true,
			snapOnRelease : true,
		  },
		  scrollbarHide:false,
		  updateOnImagesReady: true
		})

// > home_projects_filter Full Screen with no margin function by = owl.carousel.js ========================== //
	function home_projects_filter(){
		
		var owl = jQuery('.owl-carousel-filter').owlCarousel({
		loop:false,
		autoplay:true,
		margin:20,
		nav:true,
		dots: false,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		responsive:{
			0:{
				items:1
			},
			480:{
				items:1
			},
			580:{
				items:2
			},						
			767:{
				items:2
			},
			991:{
				items:3
			},			
			1152:{
				items:4
			},
			1360:{
				items:4
			},
			1366:{
				items:5
			}	
		    }
		})
		
		/* Filter Nav */

		jQuery('.btn-filter-wrap').on('click', '.btn-filter', function(e) {
			var filter_data = jQuery(this).data('filter');

			/* return if current */
			if(jQuery(this).hasClass('btn-active')) return;

			/* active current */
			jQuery(this).addClass('btn-active').siblings().removeClass('btn-active');

			/* Filter */
			owl.owlFilter(filter_data);
		})
	
	
	
	}

// > Video responsive function by = custom.js ========================= //	
	function video_responsive(){	
		jQuery('iframe[src*="youtube.com"]').wrap('<div class="embed-responsive embed-responsive-16by9"></div>');
		jQuery('iframe[src*="vimeo.com"]').wrap('<div class="embed-responsive embed-responsive-16by9"></div>');	
	}
	
// > magnificPopup function	by = magnific-popup.js =========================== //
	function magnific_popup(){
        jQuery('.mfp-gallery').magnificPopup({
          delegate: '.mfp-link',
          type: 'image',
          tLoading: 'Loading image #%curr%...',
          mainClass: 'mfp-img-mobile',
          gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0,1] // Will preload 0 - before current, and 1 after the current image
          },
          image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
          }
       });
	}

// > magnificPopup for video function	by = magnific-popup.js ===================== //	
	function magnific_video(){	
		jQuery('.mfp-video').magnificPopup({
			type: 'iframe',
		});
	}

// Vertically center Bootstrap modal popup function by = custom.js ==============//
	function popup_vertical_center(){	
		jQuery(function() {
			function reposition() {
				var modal = jQuery(this),
				dialog = modal.find('.modal-dialog');
				modal.css('display', 'block');
				
				// Dividing by two centers the modal exactly, but dividing by three 
				// or four works better for larger screens.
				dialog.css("margin-top", Math.max(0, (jQuery(window).height() - dialog.height()) / 2));
			}
			// Reposition when a modal is shown
			jQuery('.modal').on('show.bs.modal', reposition);
			// Reposition when the window is resized
			jQuery(window).on('resize', function() {
				jQuery('.modal:visible').each(reposition);
			});
		});
	}

// > Main menu sticky on top  when scroll down function by = custom.js ========== //		
	function sticky_header(){
		if(jQuery('.sticky-header').length){
			var sticky = new Waypoint.Sticky({
			  element: jQuery('.sticky-header')
			});
		}
	}
	

	// > Sidebar sticky  when scroll down function by = custom.js ========== //		
	function sticky_sidebar(){		
		jQuery('.rightSidebar')
			.theiaStickySidebar({
				additionalMarginTop: 100
			});		
	}	


// > page scroll top on button click function by = custom.js ===================== //	
	function scroll_top(){
		jQuery("button.scroltop").on('click', function() {
			jQuery("html, body").animate({
				scrollTop: 0
			}, 1000);
			return false;
		});

		jQuery(window).on("scroll", function() {
			var scroll = jQuery(window).scrollTop();
			if (scroll > 900) {
				jQuery("button.scroltop").fadeIn(1000);
			} else {
				jQuery("button.scroltop").fadeOut(1000);
			}
		});
	}
	
// > input type file function by = custom.js ========================== //	 	 
	function input_type_file_form(){
		jQuery(document).on('change', '.btn-file :file', function() {
			var input = jQuery(this),
				numFiles = input.get(0).files ? input.get(0).files.length : 1,
				label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
			input.trigger('fileselect', [numFiles, label]);
		});

		jQuery('.btn-file :file').on('fileselect', function(event, numFiles, label) {
			var input = jQuery(this).parents('.input-group').find(':text'),
				log = numFiles > 10 ? numFiles + ' files selected' : label;
			if (input.length) {
				input.val(log);
			} else {
				if (log) alert(log);
			}
		});	
	}

// > input Placeholder in IE9 function by = custom.js ======================== //	
	function placeholderSupport(){
	/* input placeholder for ie9 & ie8 & ie7 */
		jQuery.support.placeholder = ('placeholder' in document.createElement('input'));
		/* input placeholder for ie9 & ie8 & ie7 end*/
		/*fix for IE7 and IE8  */
		if (!jQuery.support.placeholder) {
			jQuery("[placeholder]").on('focus', function () {
				if (jQuery(this).val() === jQuery(this).attr("placeholder")) jQuery(this).val("");
			}).blur(function () {
				if (jQuery(this).val() === "") jQuery(this).val(jQuery(this).attr("placeholder"));
			}).blur();

			jQuery("[placeholder]").parents("form").on('submit', function () {
				jQuery(this).find('[placeholder]').each(function() {
					if (jQuery(this).val() === jQuery(this).attr("placeholder")) {
						 jQuery(this).val("");
					}
				});
			});
		}
		/*fix for IE7 and IE8 end */
	}	


// > footer fixed on bottom function by = custom.js ======================== //	
	function footer_fixed() {
	  jQuery('.site-footer').css('display', 'block');
	  jQuery('.site-footer').css('height', 'auto');
	  var footerHeight = jQuery('.site-footer').outerHeight();
	  jQuery('.footer-fixed > .page-wraper').css('padding-bottom', footerHeight);
	  jQuery('.site-footer').css('height', footerHeight);
	}
	
	
// > accordion active calss function by = custom.js ========================= //	
	function accordion_active() {
		$('.acod-head a').on('click', function() {
			$('.acod-head').removeClass('acc-actives');
			$(this).parents('.acod-head').addClass('acc-actives');
			$('.acod-title').removeClass('acc-actives'); //just to make a visual sense
			$(this).parent().addClass('acc-actives'); //just to make a visual sense
			($(this).parents('.acod-head').attr('class'));
		 });
	}	

	// > My Account Nav submenu show hide on mobile by = custom.js
	function Submenu_toogle_adminnav() {			
		jQuery(".sub-menu").parent('li').addClass('has-child');
		jQuery(".mega-menu").parent('li').addClass('has-child');
		jQuery("<div class='fa fa-angle-right open-close-admin-btn'></div>").insertAfter(".admin-nav .has-child > a");
		jQuery('.has-child a+.open-close-admin-btn').on('click', function(ev) {
			jQuery(this).next(jQuery('.sub-menu')).slideToggle('fast', function(){
				jQuery(this).parent().toggleClass('nav-active');
			});
			ev.stopPropagation();
		});
	}

// > Nav submenu show hide on mobile by = custom.js
	//  function mobile_nav(){
	// 	jQuery(".sub-menu").parent('li').addClass('has-child');
	// 	jQuery(".mega-menu").parent('li').addClass('has-child');
	// 	jQuery("<div class='fa fa-angle-right submenu-toogle'></div>").insertAfter(".has-child > a");
	// 	jQuery('.has-child a+.submenu-toogle').on('click',function(ev) {
	// 		jQuery(this).next(jQuery('.sub-menu')).slideToggle('fast', function(){
	// 			jQuery(this).parent().toggleClass('nav-active');
	// 		});
	// 		ev.stopPropagation();
	// 	});
	//  }

// > TouchSpin box function by  = jquery.bootstrap-touchspin.js =============== // 

	function input_number_vertical_form() {	
		jQuery("input[name='demo_vertical2']").TouchSpin({
		  verticalbuttons: true,
		  verticalupclass: 'fa fa-plus',
		  verticaldownclass: 'fa fa-minus'
		});	
	}

	//  Client logo Carousel function by = owl.carousel.js ========================== //
	function home_client_carousel_11(){
		jQuery('.home-client-carousel11').owlCarousel({
			loop:true,
			nav:false,
			dots: false,				
			margin:5,
			autoplay:true,
			navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
			responsive:{
				0:{
					items:2,
				},
				480:{
					items:3,
				},			
				767:{
					items:4,
				},
				1000:{
					items:5
				}
			}
		});
	}

		
	
	
/** * =============================jquery.owl-filter.js START * Create: 07-09-2016 * Author: Bearsthemes * Version: 1.0.0 */

"use strict";

$.fn.owlRemoveItem = function(num) {
	var owl_data = $(this).data('owl.carousel');
	
	owl_data._items = $.map(owl_data._items, function(data, index) {
		if(index != num) return data;
	})

	jQuery(this).find('.owl-item').eq(num).remove();
}

$.fn.owlFilter = function(data, callback) {
	var owl = this,
		owl_data = $(owl).data('owl.carousel'),
		$elemCopy = $('<div>').css('display', 'none');
	
	/* check attr owl-clone exist */
	if(typeof($(owl).data('owl-clone')) == 'undefined') {
		$(owl).find('.owl-item:not(.cloned)').clone().appendTo($elemCopy);
		$(owl).data('owl-clone', $elemCopy);
	}else {
		$elemCopy = $(owl).data('owl-clone');
	}
	
	/* clear content */
	owl.trigger('replace.owl.carousel', ['<div/>']);
	
	switch(data){
		case '*': 
			$elemCopy.children().each(function() {
				owl.trigger('add.owl.carousel', [$(this).clone()]);
			})
			break;
		default: 
			$elemCopy.find(data).each(function() {
				owl.trigger('add.owl.carousel', [$(this).parent().clone()]);
			})
			break;
	}

	/* remove item empty when clear */
	owl.owlRemoveItem(0);
	owl.trigger('refresh.owl.carousel').trigger('to.owl.carousel', [0]);

	// callback
	if(callback) callback.call(this, owl);
}		
/** ====================================================================END */	
	
	//  MAKE AN APPOINTMENT Section function by = counterup.min.js
	function contact_slide(){
		jQuery('.contact-slide-show').on('click', function () {	
			jQuery('.contact-slide-hide').animate({'right': '0%'});
		});
		jQuery('.contact_close').on('click', function () {	
			jQuery('.contact-slide-hide').animate({'right': '-100%'});
		});		
	}			

 	//menu navigation 
	function menu_navigation(){
		jQuery(".menu-btn").on('click', function () {
			jQuery(".full-menu").fadeIn(500);
		});
		jQuery('.full-menu-close').on('click', function () {
			jQuery(".full-menu").fadeToggle(500);
		});
	}

		
	jQuery('.nav-tabs a').on('click', function() {
		e.preventDefault();
		jQuery(this).tab('show');
	});
	
	jQuery('.wt-accordion a').on('click', function() {
		e.preventDefault();
		jQuery(this).tab('show');
	});	



    function color_fill_header() {
        var scroll = $(window).scrollTop();
        if(scroll >= 100) {
            $(".is-fixed").addClass("color-fill");
        } else {
            $(".is-fixed").removeClass("color-fill");
        }
    }
	
		

/*--------------------------------------------------------------------------------------------
	document.ready ALL FUNCTION START
---------------------------------------------------------------------------------------------*/
	jQuery(document).ready(function() {
		// > masonry function function by = isotope.pkgd.min.js		
		masonryBox(),
		//menu navigation
		menu_navigation(),
		// > Video responsive function by = custom.js 
		video_responsive(),
		// > magnificPopup function	by = magnific-popup.js
		magnific_popup(),
		// > magnificPopup for video function	by = magnific-popup.js
		magnific_video(),
		// > Vertically center Bootstrap modal popup function by = custom.js
		popup_vertical_center();
		// > Main menu sticky on top  when scroll down function by = custom.js		
		sticky_header(),
	    // > Sidebar sticky  when scroll down function by = custom.js ========== //		
	    sticky_sidebar(),		
		// > page scroll top on button click function by = custom.js	
		scroll_top(),
		// > input type file function by = custom.js	 	
		input_type_file_form(),
		// > input Placeholder in IE9 function by = custom.js		
		placeholderSupport(),
		// > footer fixed on bottom function by = custom.js	
		footer_fixed(),
		// > accordion active calss function by = custom.js ========================= //			
		accordion_active(),
	    // > My Account Nav submenu show hide on mobile by = custom.js
	    Submenu_toogle_adminnav(),				
		// > Nav submenu on off function by = custome.js ===================//
		// mobile_nav(),
		
		
		// > home_projects_filter Full Screen with no margin function by = owl.carousel.js ========================== //
	    home_projects_filter(),
			
		// > TouchSpin box function by  = jquery.bootstrap-touchspin.js =============== // 
		input_number_vertical_form(),		

		//  Client logo Carousel function by = owl.carousel.js ========================== //
		home_client_carousel_11(),
		//  MAKE AN APPOINTMENT Section function by = counterup.min.js
		contact_slide()	;
				
	}); 	



 /*===========================
	Window Scroll ALL FUNCTION START
===========================*/

	jQuery(window).on('scroll', function () {
	// > Window on scroll header color fill 
		color_fill_header();
	});
	
/*===========================
	Window Resize ALL FUNCTION START
===========================*/

	jQuery(window).on('resize', function () {
	// > footer fixed on bottom function by = custom.js		 
	 	footer_fixed();
	});
		

/*===========================
	Document on  Submit FUNCTION END
===========================*/	


	
	
	
})(window.jQuery);

/*--------------------------------------------------------------------------------------------
	Window Load START
---------------------------------------------------------------------------------------------*/
jQuery(window).on('load', function () {
	// Bootstrap Select box function by  = bootstrap-select.min.js
	 Bootstrap_Select(),		
	// > masonry function function by = isotope.pkgd.min.js		
	masonryBox(),
	// > background image parallax function by = stellar.js	
	bg_image_stellar(),
	
	// > LIGHTBOX Gallery Popup function	by = lc_lightbox.lite.js =========================== //      
	lightbox_popup(),
	
	// > Nav submenu show hide on mobile by = custom.js
	mobile_nav_2(),	
	// Mobile side drawer function by = custom.js
	mobile_side_drawer(),
	
	page_loader();
});

/*--------------------------------------------------------------------------------------------
	Window on load ALL FUNCTION START
---------------------------------------------------------------------------------------------*/
	 // > LIGHTBOX Gallery Popup function	by = lc_lightbox.lite.js =========================== //      
	 function lightbox_popup(){
		lc_lightbox('.elem', {
			wrap_class: 'lcl_fade_oc',
			gallery : true,	
			thumb_attr: 'data-lcl-thumb', 
			skin: 'minimal',
			radius: 0,
			padding	: 0,
			border_w: 0,
		});
	 }

	// > masonry function function by = isotope.pkgd.min.js ========================= //	
	function masonryBox() {
		if ( jQuery().isotope ) {      
			var $container = jQuery('.masonry-wrap');
			$container.isotope({
			itemSelector: '.masonry-item',
			transitionDuration: '1s',
			originLeft: true,
			stamp: '.stamp'
		});

		$container.imagesLoaded().progress( function() {
			$container.isotope('layout');
		});

            jQuery('.masonry-filter li').on('click',function() {                           
                var selector = jQuery(this).find("a").attr('data-filter');
                jQuery('.masonry-filter li').removeClass('active');
                jQuery(this).addClass('active');
                $container.isotope({ filter: selector });
                return false;
            });
    	}
	}		
	

// > background image parallax function by = stellar.js ==================== //	
	function bg_image_stellar(){
		jQuery(function(){
				jQuery.stellar({
					horizontalScrolling: false,
					verticalOffset:100
				});
			});			
	}	

// > page loader function by = custom.js ========================= //		
	function page_loader() {
		jQuery('.loading-area').fadeOut(1000);
	}
	
	// > Nav submenu show hide on mobile by = custom.js
	function mobile_nav_2(){
		
		jQuery('body').on('click','.has-child a+.submenu-toogle',function(ev) {

			jQuery(this).parent().siblings(".has-child ").children(".sub-menu").slideUp(500, function(){
				jQuery(this).parent().removeClass('nav-active');
			});

			jQuery(this).next(jQuery('.sub-menu')).slideToggle(500, function(){
				jQuery(this).parent().toggleClass('nav-active');
			});

			ev.stopPropagation();
		});
	
	}	 
	 
	// Mobile side drawer function by = custom.js
	function mobile_side_drawer(){
		jQuery('body').on('click','#mobile-side-drawer', function () { 
			jQuery(".sub-menu").parent('li').addClass('has-child');
			jQuery("<div class='fa fa-angle-right submenu-toogle'></div>").insertAfter(".has-child > a");															   
			jQuery('.mobile-sider-drawer-menu').toggleClass('active');
		});
	}	

// Bootstrap Select box function by  = bootstrap-select.min.js
function Bootstrap_Select(){	
	jQuery('.selectpicker').selectpicker();
}	


/*--------------------------------------------------------------------------------------------
    Window on scroll ALL FUNCTION START
---------------------------------------------------------------------------------------------*/