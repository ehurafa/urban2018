jQuery(document).ready(function(){
	carregando();
});

jQuery(window).load(function(){
	carregado();

	menuMobile();
	

});

jQuery(window).scroll(function(){
	if( $(window).width() > 767 ){
		$('header.header .menu > ul .drop').removeClass('active');
	}
	
});

jQuery(window).resize(function(){
	menuMobile();
});

  // carregando
  function carregando(){
  	jQuery('.loading-page').remove();
  	jQuery('.general').before('<div class="loading-page" />');
  	
  }

  // carregado
  function carregado(){
    jQuery('.loading-page').fadeOut(750);
    jQuery('.loading-page').remove();
  	jQuery('main').fadeIn(1250);
  }

$('header.header .menu > ul .drop > a').on('click', function(){
//$('header.header .menu > ul .drop > a').mouseenter(function(){
	 var el = $(this);

	/*if(  ! $('body').hasClass('active') ){

		if( ! $(el).parent().hasClass('active' )){
		//	$(el).parent().addClass('active');
		//	$('body').addClass('active');

		console.log('abre');
		//abreSubMenu( el )
		}
		else{
			//$('header.header .menu > ul .drop').removeClass('active');
			//$('body').removeClass('active');
			console.log('fecha');
			
		}

	}else{
		
	}*/

	$('header.header .menu > ul .drop ').removeClass('active');
	$(this).parent().addClass('active');



});

$('header.header .menu > ul .drop > a').mouseenter(function(){
	console.log('fecha');
});


$('header.header .menu > ul li.drop  .sub').mouseleave(function(){
	console.log('fecha---');
});

function abreSubMenu( el ){
	$(el).parent().addClass('active');
	$('body').addClass('active');
}


function fechaSubMenu( el ){
	$('header.header .menu > ul .drop').removeClass('active');
    $('body').removeClass('active');
}

$('#full-slider').slick({
	dots: true,
	autoplay: true,
	autoplaySpeed: 3000
});


// menu mobile
 function menuMobile(){
 	if( $(window).width() < 768 ){
		$('.c-hamburger--htx').on('click', function(){

			

			if( $(this).hasClass( 'is-active') ){
				 abreMenuMobile();
			}else{
				fechaMenuMobile();
			}
			
			//$(this).parent().addClass('active');
		});
		/*$('header.header .menu-mobile div .close').on('click', function(){
			 fechaMenuMobile();
			 $(this).parent().removeClass('active');
		}); */
 	}
 }

  function abreMenuMobile(){
 	$('header.header .right').addClass('active');
 	$('header.header .right .menu').addClass('active');
 	$('header').addClass('fixed');
 	//$('main, footer').addClass('hide');
 }

  function fechaMenuMobile(){	
 	$('header.header .right').removeClass('active');
 	$('header.header .right .menu').removeClass('active');
 	$('header').removeClass('fixed');
 }


// hamburger
(function() {

  "use strict";

  var toggles = document.querySelectorAll(".c-hamburger");
  for (var i = toggles.length - 1; i >= 0; i--) {
    var toggle = toggles[i];
    toggleHandler(toggle);
  };

  function toggleHandler(toggle) {
    toggle.addEventListener( "click", function(e) {
      e.preventDefault();
      (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
    });
  }

})();



// menu styck

$(window).scroll(function (event) {
	var scroll = $(window).scrollTop();
	if( $(window).width() > 767 ){
		if(scroll > 330){
			$('body').addClass('fixed-header');
		}else{
			$('body').removeClass('fixed-header');
		}
	}
});
$(document).ready(function() {
	var scroll = $(window).scrollTop();

	if( $(window).width() > 767 ){
		if(scroll > 330){
			$('body').addClass('fixed-header');
		}else{
			$('body').removeClass('fixed-header');
		}
	}
	
});
function menuToggleDesk(){

}


if( $(window).width() > 767 ){
	$( function() {
    $( "#datepicker" ).datepicker();
  } );

    $( function() {
    $( "#datepicker-2" ).datepicker();
  } );

}

  


    //crianças / adultos

    $('#busca .box .box-persons .person').each(function(){
    	
    	$(this).find('.plus').on('click', function(){
    		var valor = $(this).parent().find('strong em').text();
    		$(this).parent().find('strong em').text(Number(valor) + 1);
    	});

    	$(this).find('.reduce').on('click', function(){

    		var valor = $(this).parent().find('strong em').text();

    		if( valor > 0){
    			$(this).parent().find('strong em').text(Number(valor) - 1);
    		}
    		
    	});
    });
 
 //icones busca
$('#busca .box-icons').find('.icons').eq(0).addClass('active');
 $('.box-icons img').each(function(){

 	$(this).on('click', function(){
 		$('.box-icons .icons').removeClass('active');
 		//$('.box-icons .off').show();
 		
 		$(this).parent().addClass('active');
 		//$(this).parent().find('.on').show();
 	});

 });


 // busca mobile

 if( $(window).width() < 768 ){ console.log('teste');

 $('.card-1').on('click', function(){ 	
 	if( ! $('#busca').hasClass('passo-1') ){
 		passoUm();
 	} 	
 });

 $('.card-2 .icons').on('click', function(){ 	
 		passoDois();
 });

 $('.card-4 .input-box').each(function(){
 	$(this).find('.input-1').on('click', function(){
 		$(this).addClass('active');
 	});
 	$(this).find('.input-2').on('click', function(){
 		if( $('.input-1').hasClass('active') ){
 			$(this).addClass('active');
 			 passoTres();
 		}
 	});
 });

 $('.card-6 .calendar').on('click', function(){
 	passoQuatro();
 });
}
// passo 1
function passoUm(){
	$('#busca').addClass('passo-1');
	$('.card-1').hide();
	$('.card-2').fadeIn(200);
	$('.busca-shadow').remove();
	$('body').append('<div class="busca-shadow" />')
}

// passo 2
function passoDois(){	
	$('.card-1').fadeIn(200);
	$('.card-2').hide();
	$('.card-4').fadeIn(200);

}

// passo 3
function passoTres(){	
	$('.card-3').fadeIn(200);
	$('.card-4').hide();
	$('.card-6').fadeIn(200);
	$('.card-4 .input-box input').val('');
}

// passo 4
function passoQuatro(){	
	$('.card-5').fadeIn(200);
	$('.card-6').hide();
	$('.card-8').fadeIn(200);
	$('.card-9').fadeIn(200);
	
}


