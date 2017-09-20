jQuery(document).ready(function(){
	carregando();
});

jQuery(window).load(function(){
	carregado();
	uBox();
  testeira();

});
jQuery(window).resize(function(){
  uBox();
  testeira();
});

// addclass
jQuery('.page-template-template-home').addClass('pagina-home');
jQuery('.page-template-template-cases').addClass('pagina-cases');
jQuery('.page-template-template-servicos').addClass('pagina-servicos');
jQuery('.single-case .full-banner .wp-post-image').addClass('img-bg');

// menu hamburger
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


    jQuery('.c-hamburger--htx').on('click', function(){
    	if( jQuery(this).hasClass('is-active')){
    		jQuery('header .menu-topo  .menu-box').slideDown(800);
    	}else{
    		jQuery('header .menu-topo  .menu-box').slideUp(200);
    	}
    });
  })();



  // carregando
  function carregando(){
  	jQuery('.loading-page').remove();
  	jQuery('.general').before('<div class="loading-page" />');
  	var altura = jQuery(window).height();
  	jQuery('.loading-page').height(altura);
  }

  // carregado
  function carregado(){
  	jQuery('.loading-page').remove();
  	jQuery('main').fadeIn(500);
  }

  // paralax
	jQuery(function(){
		jQuery('.parallax').each(function(){
			var $obj = jQuery(this);
			jQuery(window).scroll(function() {
				var yPos = -(jQuery(window).scrollTop() / $obj.data('speed'));			 
				var bgpos = '50% '+ yPos + 'px';			 
				$obj.css('background-position', bgpos );		 
			});
		});
	});

	// u-box
	function uBox(){
		jQuery('.u-boxes .u-box').each(function(){

     
        var altura = jQuery(this).height();
        var alturaMetade = altura / 2;
        var alturaT = jQuery(this).find('.title').height();
        var alturaTMetade = alturaT / 2;
        var img = jQuery(this).find('.wp-post-image').attr('src');
        jQuery(this).find('.title').css('margin-top', - alturaTMetade );
        jQuery(this).find('.masck').height(altura); 

       

      /* if( jQuery(window).width() > 361){

        if( jQuery(this).hasClass('metade')){
          jQuery(this).height(alturaMetade);
        }else{
          jQuery(this).height(altura);
        }

       }else{
         jQuery(this).attr('style', 'height: auto  !important');
         jQuery(this).find('.masck').attr('style', 'height: auto  !important');
       }*/

       if( $(window).width() < 481 ){
         jQuery(this).css('background-image', 'url(' + img + ')' ); 
       }
			
		});
	};
  
  // u-bg (section com background)
  jQuery('.u-bg').each(function(){
    var src = jQuery(this).find('.img-bg').attr('src');
    jQuery(this).css('background-image', 'url(' + src + ')');
  });

  // cores das mascares de cases
  //case
  jQuery('.pagina-cases .u-box:nth-child(7n+1) .masck').addClass('bg-vermelho');
  jQuery('.pagina-cases .u-box:nth-child(7n+2) .masck').addClass('bg-roxo');
  jQuery('.pagina-cases .u-box:nth-child(7n+3) .masck').addClass('bg-azul');
  jQuery('.pagina-cases .u-box:nth-child(7n+4) .masck').addClass('bg-cinza');
  jQuery('.pagina-cases .u-box:nth-child(7n+5) .masck').addClass('bg-rosa');
  jQuery('.pagina-cases .u-box:nth-child(7n+6) .masck').addClass('bg-azul-claro');
  jQuery('.pagina-cases .u-box:nth-child(7n+7) .masck').addClass('bg-verde');

  // serviços
  jQuery(' .pagina-servicos .u-box:nth-child(7n+1) .masck').addClass('bg-vermelho');
  jQuery(' .pagina-servicos .u-box:nth-child(7n+2) .masck').addClass('bg-roxo');
  jQuery(' .pagina-servicos .u-box:nth-child(7n+3) .masck').addClass('bg-preto');
  jQuery(' .pagina-servicos .u-box:nth-child(7n+4) .masck').addClass('bg-cinza');
  jQuery(' .pagina-servicos .u-box:nth-child(7n+5) .masck').addClass('bg-azul');
  jQuery(' .pagina-servicos .u-box:nth-child(7n+6) .masck').addClass('bg-azul-claro');
  jQuery(' .pagina-servicos .u-box:nth-child(7n+7) .masck').addClass('bg-verde');

  // define os tamanhos dos blocos
  //case
  jQuery('.pagina-cases .u-box:eq(0), .pagina-servicos .u-box:eq(0)').addClass('linha-1 grande');
  jQuery('.pagina-cases .u-box:eq(1), .pagina-servicos .u-box:eq(1)').addClass('linha-1 metade');
  jQuery('.pagina-cases .u-box:eq(2), .pagina-servicos .u-box:eq(2)').addClass('linha-1 metade');
  jQuery('.pagina-cases .u-box:eq(3), .pagina-servicos .u-box:eq(3)').addClass('linha-2 grande');
  jQuery('.pagina-cases .u-box:eq(4), .pagina-servicos .u-box:eq(4)').addClass('linha-2 grande');
  jQuery('.pagina-cases .u-box:eq(5), .pagina-servicos .u-box:eq(5)').addClass('linha-3 metade');
  jQuery('.pagina-cases .u-box:eq(6), .pagina-servicos .u-box:eq(6)').addClass('linha-3 metade');
  jQuery('.pagina-cases .u-box:eq(7), .pagina-servicos .u-box:eq(7)').addClass('linha-4 grande');
  jQuery('.pagina-cases .u-box:eq(8), .pagina-servicos .u-box:eq(8)').addClass('linha-4 metade');
  jQuery('.pagina-cases .u-box:eq(9), .pagina-servicos .u-box:eq(9)').addClass('linha-4 metade');
  jQuery('.pagina-cases .u-box:eq(10), .pagina-servicos .u-box:eq(10)').addClass('linha-5 grande');
  jQuery('.pagina-cases .u-box:eq(11), .pagina-servicos .u-box:eq(11)').addClass('linha-5 grande');
  jQuery('.pagina-cases .u-box:eq(12), .pagina-servicos .u-box:eq(12)').addClass('linha-5 metade');
  jQuery('.pagina-cases .u-box:eq(13), .pagina-servicos .u-box:eq(13)').addClass('linha-5 metade');

  // serviços
  jQuery('.pagina-cases .u-box:eq(0), .pagina-servicos .u-box:eq(0)').addClass('linha-1 grande');
  jQuery('.pagina-cases .u-box:eq(1), .pagina-servicos .u-box:eq(1)').addClass('linha-1 metade');
  jQuery('.pagina-cases .u-box:eq(2), .pagina-servicos .u-box:eq(2)').addClass('linha-1 metade');
  jQuery('.pagina-cases .u-box:eq(3), .pagina-servicos .u-box:eq(3)').addClass('linha-2 metade');
  jQuery('.pagina-cases .u-box:eq(4), .pagina-servicos .u-box:eq(4)').addClass('linha-2 metade');
  jQuery('.pagina-cases .u-box:eq(5), .pagina-servicos .u-box:eq(5)').addClass('linha-3 metade');
  jQuery('.pagina-cases .u-box:eq(6), .pagina-servicos .u-box:eq(6)').addClass('linha-3 metade');
  jQuery('.pagina-cases .u-box:eq(7), .pagina-servicos .u-box:eq(7)').addClass('linha-4 metade');
  jQuery('.pagina-cases .u-box:eq(8), .pagina-servicos .u-box:eq(8)').addClass('linha-4 metade');

  jQuery('.pagina-cases .u-box.linha-1, .pagina-servicos .u-box.linha-1').wrapAll("<div class='full' />");
  jQuery('.pagina-cases .u-box.linha-2, .pagina-servicos .u-box.linha-2').wrapAll("<div class='full' />");
  jQuery('.pagina-cases .u-box.linha-3, .pagina-servicos .u-box.linha-3').wrapAll("<div class='full' />");
  jQuery('.pagina-cases .u-box.linha-4, .pagina-servicos .u-box.linha-4').wrapAll("<div class='full' />");
  jQuery('.pagina-cases .u-box.linha-5, .pagina-servicos .u-box.linha-5').wrapAll("<div class='full' />");
  jQuery('.pagina-cases .u-box.linha-6, .pagina-servicos .u-box.linha-6').wrapAll("<div class='full' />");
  jQuery('.pagina-cases .u-box.linha-7, .pagina-servicos .u-box.linha-7').wrapAll("<div class='full' />");
  jQuery('.pagina-cases .u-box.linha-8, .pagina-servicos .u-box.linha-8').wrapAll("<div class='full' />");
  jQuery('.pagina-cases .u-box.linha-9, .pagina-servicos .u-box.linha-9').wrapAll("<div class='full' />");
  jQuery('.pagina-cases .u-box.linha-10, .pagina-servicos .u-box.linha-10').wrapAll("<div class='full' />");

  /*
  jQuery('.pagina-cases .u-box:nth-child(1n) .masck').addClass('bg-vermelho');
  jQuery('.pagina-cases .u-box:nth-child(2n) .masck').addClass('bg-roxo');
  jQuery('.pagina-cases .u-box:nth-child(3n) .masck').addClass('bg-azul');
  jQuery('.pagina-cases .u-box:nth-child(4n) .masck').addClass('bg-cinza');
  jQuery('.pagina-cases .u-box:nth-child(5n) .masck').addClass('bg-roza');
  jQuery('.pagina-cases .u-box:nth-child(6n) .masck').addClass('bg-azul-claro');*/

  // carrossel
  //mobile
   if( jQuery(window).width() < 361){
    jQuery(".carrossel .inner").slick({
      dots: true,
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 2,
       arrows: false
    });
  }else{
    // demais resoluções
    /*jQuery(".carrossel .inner").slick({
      dots: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 4,
       arrows: false
    });*/
  }
  

  // testeira
  function testeira(){
    jQuery('.testeira').each(function(){
      var altura = jQuery(this).height();
      var alturaMetade = altura / 2;
      var alturaT = jQuery(this).find('article').height();
      var alturaTMetade = alturaT / 2;
      var img = $(this).find('img').attr('src');

      jQuery(this).find('article').css('margin-top', - alturaTMetade );
      jQuery(this).find('.masck').remove();
      jQuery(this).append('<div class="masck" />');
      jQuery(this).find('.masck').height(altura);
  
      if( jQuery(window).width() < 768){
        jQuery(this).css('background-image', 'url(' + img + ')' ); 
      }else{
        jQuery(this).css('background-image', 'none' ); 
      }


    });
  }

  // url base img
  jQuery('.img-urlBase').each(function(){

     var urlVelhaImg = jQuery(this).attr('src');
     
     var urlNovaImg =  urlBase + '/' +  urlVelhaImg;    

     jQuery(this).attr('src', urlNovaImg);

    });


  

	


