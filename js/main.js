$(function(){
	/* slide menu start */
	$('body').attr('rel',$(window).width());
	set_mobile_menu();
	
	$('.mobile-menu-btn').click(function(){	
		if ($('.slide-menu').hasClass('active')){
			clear_slide_submenu();
			clear_slide_arrow();
			$(this).removeClass('active');
			$('.slide-menu').stop(true,false).slideUp(300).removeClass('active');
			$('body').css('position','');
			$('#wrap').css('margin-top', '');
			$(window).scrollTop($('#wrap').attr('rel'));
			$('#mobile-plane').stop(true,false).fadeOut(200);
		} else {
			clear_slide_submenu();
			clear_slide_arrow();
			$(this).addClass('active');
			$('.slide-menu').stop(true,false).slideDown(300).addClass('active');
			$('#wrap').attr('rel', $(window).scrollTop());
			$('#wrap').css('margin-top', -$(window).scrollTop());
			$('body').css('position','fixed');
			$('#mobile-plane').stop(true,false).fadeIn(200);
		}
	});
	
	$('.slide-menu>li>span').click(function(){
		if($(this).next('ul').hasClass('active')){
			clear_slide_submenu();
			clear_slide_arrow();
			$(this).removeClass('active').next('ul').stop(true,false).slideUp(200).removeClass('active');
		} else {
			clear_slide_submenu();
			clear_slide_arrow();
			$(this).addClass('active').next('ul').stop(true,false).slideDown(300).addClass('active');
		}
	});	
	
	$('#mobile-plane').click(function(){
		reset_mobile_menu();
	});
	/* slide menu end */
	
	/* home slideshow */
	$('.homeSlideShow').cycle();
	set_banner();
	/*
	$(".fancybox").fancybox();
	*/
	setTimeout(function(){
		$('body').animate({'opacity':1},500);
	},500);
	
	$('#menu>ul>li>a').click(function(e){
		e.preventDefault();
		var id = $(this).attr('rel');
		$('#menu>ul>li>a').removeClass('active');
		$(this).addClass('active');
		if (id!=='nil'){
			goToByScroll(id);
		} else {
			//window.open('http://google.com.hk');	
		}
	});
	
	$('.slide-menu>li>a').click(function(e){
		e.preventDefault();
		reset_mobile_menu();
		var id = $(this).attr('rel');
		if (id!=='nil'){
			goToByScroll(id);
		} else {
			//window.open('http://google.com.hk');	
		}
	});
	
	$('.homeSlideShow a').click(function(e){
		e.preventDefault();
		var id = $(this).attr('rel');
		if (id!=='nil'){
			goToByScroll(id);
		} else {
			//window.open('http://google.com.hk');	
		}
	});
});

$(window).load(function(){
	set_parallax();
	var where = window.location.hash.substring(1);
	goToByScroll(where);
});

$(window).resize(function(){
	set_mobile_menu();
	if ($(window).width() != $('body').attr('rel')){
		reset_mobile_menu();
		$('body').attr('rel',$(window).width());
	}
	set_parallax();
});

$(window).scroll( function(){
	//header();
});

/* slide menu */
function set_mobile_menu(){
	$('.wrapper-slide-menu').css('max-height', $(window).height() - 52);
}

function reset_mobile_menu(){
	if ($('.slide-menu').hasClass('active')){
		$('.mobile-menu-btn').trigger('click');
	}
}

function clear_slide_submenu(){
	$(this).removeClass('active').next('ul').stop(true,false).slideUp(300).removeClass('active');
}

function clear_slide_arrow(){
	$('.slide-menu>li>span').each(function(){
		$(this).next('ul').stop(true,false).slideUp(300).removeClass('active');
	});			
}

function set_banner(){	
	$('.homeSlidePagerWrapper').css('margin-left', -$('.homeSlidePagerWrapper').width()/2);
	$('#prev, #next').css('top', '');
}

function set_parallax(){
	$('.background-1').each(function(){
		$(this).css('height', $(this).parent().parent().height());
	});
	
	$('.background-2').each(function(){
		$(this).css('height', $(this).parent().parent().height());
	});
	
	if($(window).width()>980){
		$('.about-us .background-1').parallax("50%", 0.5);
		$('.about-us .background-2').parallax("50%", 0.6);
		
		$('.product-1').parallax("50%", 0.1);
		$('.product-2').parallax("50%", 0.1);
		$('.product-3').parallax("50%", 0.1);
		
		//$('#wrapper-contact-us').parallax("50%", 0.6);
		$('.contact-us .background-1').parallax("50%", 0.5);
		$('.contact-us .background-2').parallax("50%", 0.6);
		
		//$('#wrapper-contact-form').parallax("50%", 0.6);
		$('.contact-form .background-1').parallax("50%", 0.5);
		$('.contact-form .background-2').parallax("50%", 0.6);
	}
}

function goToByScroll(id){
	if($(window).width() > 980){
		$('html,body').stop(true, false).animate({scrollTop: $('.'+id).offset().top - 80},400);
	} else {
		$('html,body').stop(true, false).animate({scrollTop: $('.'+id).offset().top - 50},400);
	}
	
	if (window.history.pushState){
		window.history.pushState("string", "Title", "#"+id);
	}
}

function openTab(tabName) {
    var i;
    var x = document.getElementsByClassName("tabdiv");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    document.getElementById(tabName).style.display = "block";  
	
	var y = document.getElementsByClassName("tablink");
    for (i = 0; i < y.length; i++) {
       y[i].classList.remove("tabactive"); 	
       y[i].classList.add("tabinactive");  
    }
	var z = document.getElementsByClassName(tabName);
    z[0].classList.remove("tabinactive");
	z[0].classList.add("tabactive");  	
	
}