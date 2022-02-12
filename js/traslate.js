$('#lang').click(function(){
	if($('html').attr('lang')=='fr'){
		$('.en').each(function(){
			$(this).attr('fr',$(this).text());
			$('.en').css('opacity','0');
			$("#lang").html("FR <div class='fas fa-globe-europe fa-1x text-punch' title=''></div>");
			$("#set").html("Start <div class='fas fa-chevron-down fa-1x text-punch' title=''></div>");
			$("#works-view").replaceWith("<p id='works-view' class='text-white en'>I help your Product team conceive web and mobile applications that your clients use with my <a href='#works'>development</a> and design skills.</p>");
			$("#web-view").replaceWith("<p id='web-view' class='text-white en'>I am currently studying a vocational degree in <a href='#web'>web and mobile application development</a> at the UIT of Littoral Côte d'Opale in Calais.</p>");
			$(".website").html("Website");
			setTimeout(frTextOutput,300,$(this));
		})
	}
	else{
		$('.en').each(function(){
		$('.en').css('opacity','0');
		$("#lang").html("EN <div class='fas fa-globe-americas fa-1x text-punch' title=''></div>");
		$("#set").html("Début <div class='fas fa-chevron-down fa-1x text-punch' title=''></div>");
		$("#works-view").replaceWith("<p id='works-view' class='text-white en'>J'aide votre équipe Produit à concevoir des applications web et mobiles que vos clients utilisent grâce à mes compétences en <a href='#works'>développement</a> et design.</p>");
		$("#web-view").replaceWith("<p id='web-view' class='text-white en'>Je suis actuellement en licence professionnelle <a href='#web'>Développement Internet et Mobile</a> à l'IUT du Littoral Côte d'Opale à Calais.</p>");
		$(".website").html("Site web");
		setTimeout(enTextOutput,300,$(this));
		})
	}
});

function textInput(){
	$('.en').css('opacity','1');
}

function frTextOutput(e){
	e.text(e.attr('data-en'));
	$('html').attr('lang','en');
	setTimeout(textInput,300);
}

function enTextOutput(e){
	e.text(e.attr('fr'));
	$('html').attr('lang','fr');
	setTimeout(textInput,300);
}