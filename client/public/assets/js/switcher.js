	
//=== Switcher panal slide function	=====================//

	jQuery(window).load(function(){
		jQuery('.styleswitcher').animate({
					'left': '-170px'
				});
		jQuery('.switch-btn').addClass('closed');
	});
	
	jQuery(document).ready(function () {		
		jQuery('.switch-btn').on('click', function () {	
			if (jQuery(this).hasClass('open')) {
				jQuery(this).addClass('closed');
				jQuery(this).removeClass('open');
				jQuery('.styleswitcher').animate({
					'left': '-170px'
				});
			} else {
				if (jQuery(this).hasClass('closed')) {
				jQuery(this).addClass('open');
				jQuery(this).removeClass('closed');
				jQuery('.styleswitcher').animate({
					'left': '0'
				});
				}
			}	
		});
	});
	
//=== Switcher panal slide function END	=====================//


//=== Color css change function	=====================//

jQuery( document ).ready(function() {
	
    // Color changer
    jQuery(".skin-1").on('click', function(){
        jQuery(".skin").attr("href", "css/skin/skin-1.css");
		jQuery(".logo-header img").attr("src", "images/logo-1.png");
		jQuery(".footer-style3 .logo-footer img").attr("src", "images/logo-1-light.png");
		jQuery(".footer-style2 .logo-footer img").attr("src", "images/logo-1-light.png");
		jQuery(".footer-style1 .logo-footer img").attr("src", "images/logo-1-light.png");
		jQuery(".header-style-4 .logo-header img").attr("src", "images/logo-white.png");
        return false;
    });
    
    jQuery(".skin-2").on('click', function(){
        jQuery(".skin").attr("href", "css/skin/skin-2.css");
		jQuery(".logo-header img").attr("src", "images/logo-2.png");
		jQuery(".footer-style3 .logo-footer img").attr("src", "images/logo-2-light.png");
		jQuery(".footer-style2 .logo-footer img").attr("src", "images/logo-2-light.png");
		jQuery(".footer-style1 .logo-footer img").attr("src", "images/logo-2-light.png");
		jQuery(".header-style-4 .logo-header img").attr("src", "images/logo-white.png");
        return false;
    });
    
    jQuery(".skin-3").on('click', function(){
        jQuery(".skin").attr("href", "css/skin/skin-3.css");
		jQuery(".logo-header img").attr("src", "images/logo-3.png");
		jQuery(".footer-style3 .logo-footer img").attr("src", "images/logo-3-light.png");
		jQuery(".footer-style2 .logo-footer img").attr("src", "images/logo-3-light.png");
		jQuery(".footer-style1 .logo-footer img").attr("src", "images/logo-3-light.png");
		jQuery(".header-style-4 .logo-header img").attr("src", "images/logo-white.png");
        return false;
    });
	
    jQuery(".skin-4").on('click', function(){
        jQuery(".skin").attr("href", "css/skin/skin-4.css");
		jQuery(".logo-header img").attr("src", "images/logo-4.png");
		jQuery(".footer-style3 .logo-footer img").attr("src", "images/logo-4-light.png");
		jQuery(".footer-style2 .logo-footer img").attr("src", "images/logo-4-light.png");
		jQuery(".footer-style1 .logo-footer img").attr("src", "images/logo-4-light.png");
		jQuery(".header-style-4 .logo-header img").attr("src", "images/logo-white.png");
        return false;
    });
	
    jQuery(".skin-5").on('click', function(){
        jQuery(".skin").attr("href", "css/skin/skin-5.css");
		jQuery(".logo-header img").attr("src", "images/logo-5.png");
		jQuery(".footer-style3 .logo-footer img").attr("src", "images/logo-5-light.png");
		jQuery(".footer-style2 .logo-footer img").attr("src", "images/logo-5-light.png");
		jQuery(".footer-style1 .logo-footer img").attr("src", "images/logo-5-light.png");
		jQuery(".header-style-4 .logo-header img").attr("src", "images/logo-white.png");
        return false;
    });	
	
    jQuery(".skin-6").on('click', function(){
        jQuery(".skin").attr("href", "css/skin/skin-6.css");
		jQuery(".logo-header img").attr("src", "images/logo-6.png");
		jQuery(".footer-style3 .logo-footer img").attr("src", "images/logo-6-light.png");
		jQuery(".footer-style2 .logo-footer img").attr("src", "images/logo-6-light.png");
		jQuery(".footer-style1 .logo-footer img").attr("src", "images/logo-6-light.png");
		jQuery(".header-style-4 .logo-header img").attr("src", "images/logo-white.png");
        return false;
    });
	
	
    jQuery(".skin-7").on('click', function(){
        jQuery(".skin").attr("href", "css/skin/skin-7.css");
		jQuery(".logo-header img").attr("src", "images/logo-7.png");
		jQuery(".footer-style3 .logo-footer img").attr("src", "images/logo-7-light.png");
		jQuery(".footer-style2 .logo-footer img").attr("src", "images/logo-7-light.png");
		jQuery(".footer-style1 .logo-footer img").attr("src", "images/logo-7-light.png");
		jQuery(".header-style-4 .logo-header img").attr("src", "images/logo-white.png");
        return false;
    });
    
    jQuery(".skin-8").on('click', function(){
        jQuery(".skin").attr("href", "css/skin/skin-8.css");
		jQuery(".logo-header img").attr("src", "images/logo-8.png");
		jQuery(".footer-style3 .logo-footer img").attr("src", "images/logo-8-light.png");
		jQuery(".footer-style2 .logo-footer img").attr("src", "images/logo-8-light.png");
		jQuery(".footer-style1 .logo-footer img").attr("src", "images/logo-8-light.png");
		jQuery(".header-style-4 .logo-header img").attr("src", "images/logo-white.png");
        return false;
    });
    
    jQuery(".skin-9").on('click', function(){
        jQuery(".skin").attr("href", "css/skin/skin-9.css");
		jQuery(".logo-header img").attr("src", "images/logo-9.png");
		jQuery(".footer-style3 .logo-footer img").attr("src", "images/logo-9-light.png");
		jQuery(".footer-style2 .logo-footer img").attr("src", "images/logo-9-light.png");
		jQuery(".footer-style1 .logo-footer img").attr("src", "images/logo-9-light.png");
		jQuery(".header-style-4 .logo-header img").attr("src", "images/logo-white.png");
        return false;
    });
	
    jQuery(".skin-10").on('click', function(){
        jQuery(".skin").attr("href", "css/skin/skin-10.css");
		jQuery(".logo-header img").attr("src", "images/logo-10.png");
		jQuery(".footer-style3 .logo-footer img").attr("src", "images/logo-10-light.png");
		jQuery(".footer-style2 .logo-footer img").attr("src", "images/logo-10-light.png");
		jQuery(".footer-style1 .logo-footer img").attr("src", "images/logo-10-light.png");
		jQuery(".header-style-4 .logo-header img").attr("src", "images/logo-white.png");
        return false;
    });
	
    jQuery(".skin-11").on('click', function(){
        jQuery(".skin").attr("href", "css/skin/skin-11.css");
		jQuery(".logo-header img").attr("src", "images/logo-11.png");
		jQuery(".footer-style3 .logo-footer img").attr("src", "images/logo-11-light.png");
		jQuery(".footer-style2 .logo-footer img").attr("src", "images/logo-11-light.png");
		jQuery(".footer-style1 .logo-footer img").attr("src", "images/logo-11-light.png");
		jQuery(".header-style-4 .logo-header img").attr("src", "images/logo-white.png");
        return false;
    });	
	
    jQuery(".skin-12").on('click', function(){
        jQuery(".skin").attr("href", "css/skin/skin-12.css");
		jQuery(".logo-header img").attr("src", "images/logo-12.png");
		jQuery(".footer-style3 .logo-footer img").attr("src", "images/logo-12-light.png");
		jQuery(".footer-style2 .logo-footer img").attr("src", "images/logo-12-light.png");
		jQuery(".footer-style1 .logo-footer img").attr("src", "images/logo-12-light.png");
		jQuery(".header-style-4 .logo-header img").attr("src", "images/logo-white.png");
        return false;
    });				
		
		
});


