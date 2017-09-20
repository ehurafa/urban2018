$(function () { // wait for document ready
	// init controller
	var controller = new ScrollMagic.Controller();

	// show pin state
	function updateBox (e) {
		if (e.type == "enter") {
			$("#pin p").text("Pinned.");
			
			console.log('teste 1 ');
			$('.ani-item').hide();
			$('.ani-item-1').fadeIn(200);

			$('.controles a').removeClass('active');
			$('.controles a').eq(0).addClass('active');
			
			
		} else {
			$("#pin p").text("Unpinned.");
			console.log('teste 2 ');
		}
		
		
	}
	
	function updateBox2 (e) {
		if (e.type == "enter") {								
			
			console.log('updateBox2 teste 1 ');
			
			$('.ani-item').hide();
			$('.ani-item-2').fadeIn(200);
			
			animacaoIcone();
			animacaoTextao();
			animacaoTexto();

			$('.controles a').removeClass('active');
			$('.controles a').eq(1).addClass('active');
		
		} else {									
			console.log('updateBox2 teste 2 ');
		}
		
	}
	
	function updateBox3 (e) {
		if (e.type == "enter") {								
			
			console.log('updateBox3 teste 1 ');
			$('.ani-item').hide();
			$('.ani-item-3').fadeIn(200);
			
			animacaoIcone();
			animacaoTextao();
			animacaoTexto();

			$('.controles a').removeClass('active');
			$('.controles a').eq(2).addClass('active');
			
		} else {									
			console.log('updateBox3 teste 2 ');
		}
	}
	function updateBox4(e) {
		if (e.type == "enter") {								
			
			console.log('updateBox4 teste 1 ');
			$('.ani-item').hide();
			$('.ani-item-4').fadeIn(200);
			
			animacaoIcone();
			animacaoTextao();
			animacaoTexto();

			$('.controles a').removeClass('active');
			$('.controles a').eq(3).addClass('active');
		
		} else {									
			console.log('updateBox4 teste 2 ');
		}
	}
	function updateBox5(e) {
		if (e.type == "enter") {								
			
			console.log('updateBox5 teste 1 ');
			$('.ani-item').hide();
			$('.ani-item-5').fadeIn(200);
			
			animacaoIcone();
			animacaoTextao();
			animacaoTexto();

			$('.controles a').removeClass('active');
			$('.controles a').eq(4).addClass('active');
		
		} else {									
			console.log('updateBox5 teste 2 ');
		}
	}

	// build scenes
	new ScrollMagic.Scene({triggerElement: "#trigger", duration:50, offset: -350})  //150
		.setPin("#pin")
		.setClassToggle("#pin", "")
		.on("enter leave", updateBox)
		.addIndicators() // add indicators (requires plugin)
		.addTo(controller);

	new ScrollMagic.Scene({triggerElement: "#trigger", duration: 300, offset: 300})  // 150 300
		.setPin("#pin")
		.setClassToggle("#pin", "")
		.on("enter leave", updateBox2)
		.addIndicators() // add indicators (requires plugin)
		.addTo(controller);

	new ScrollMagic.Scene({triggerElement: "#trigger", duration: 300, offset: 600})  // 150 600
		.setPin("#pin")
		.setClassToggle("#pin", "")
		.on("enter leave", updateBox3)
		.addIndicators() // add indicators (requires plugin)
		.addTo(controller);
		
	new ScrollMagic.Scene({triggerElement: "#trigger", duration: 300, offset: 900})  // 150 900
		.setPin("#pin")
		.setClassToggle("#pin", "")
		.on("enter leave", updateBox4)
		.addIndicators() // add indicators (requires plugin)
		.addTo(controller);
		
	new ScrollMagic.Scene({triggerElement: "#trigger", duration: 300, offset: 1200})  
		.setPin("#pin")
		.setClassToggle("#pin", "")
		.on("enter leave", updateBox5)
		.addIndicators() // add indicators (requires plugin)
		.addTo(controller);
});


function animacaoIcone(){
	$('.ani-item').find('.icone').addClass('animado');
}

function animacaoTextao(){
	$('.ani-item').find('.textao').addClass('animado');
}

function animacaoTexto(){
	$('.ani-item').find('.texto').addClass('animado');
}


// controles
$('.controles a').on('click', function(){
	var idx = $(this).attr('data-idx');
	console.log(idx);
	nav(idx);

	$('.controles a').removeClass('active');
	$(this).addClass('active');
});

function nav(idx) {
		//$('.ani-blocos .ani-item-1 .icone').css('left', -120 );
	$('.ani-item').hide();
	$('.ani-item').eq(idx).fadeIn(200);
	
	animacaoIcone();
	animacaoTextao();
	animacaoTexto();	
}

$('.controles a').eq(0).addClass('active');