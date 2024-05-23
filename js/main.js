$( document ).ready(function() {
 

	// INTRO

	var introsplitter = new SplitText("#intro", {type:"words", position:"relative"});
	

	function textIn(target, del){
		
		TweenMax.staggerFromTo(target, .5, {alpha:0, y:20}, {alpha:1, y:0, ease:Sine.easeOut, delay:del}, 0.05 );

		
	}

	TweenMax.staggerFromTo(introsplitter.words, .5, {alpha:0, y:20}, {alpha:1, y:0, ease:Sine.easeOut, delay:0}, 0.05 );

	var introline = $("#div1");
	var intrologo = $("#logo");
	var introitem0 = $("#intro");
	var introitem1 = $("#item0");
	var introitem3 = $("#item1");

	TweenMax.set($("#wrapper"), {alpha:1, delay:0.2});
	TweenMax.staggerFromTo( [intrologo, introitem1,  introline, introitem3], .5, {alpha:0, y:'+=24'}, {alpha:1, y:'-=24', ease:Sine.easeOut, delay:0.2}, 0.2 );




	// LOGO
	var domElement = document.getElementById("spritesheet");
	TweenMax.spriteSheet( domElement, { 
					width: 2050, 
					offsetX: 0,
					offsetY: 0,
					stepX: 72, 
					stepY: 72, 
					count: 840
	}, 35, { delay: .75, repeat: -1 });

	// SCROLL
	var item1 = $("#item2");
	var item2 = $("#item2");
	// var item3 = $("#item3");
	var item4 = $("#item4");
	var item5 = $("#item5");
	// var item6 = $("#item6");
	var item7 = $("#item7");
	var item8 = $("#item8");


	$("#item2").data('moved', false);
	// $("#item3").data('moved', false);
	$("#item4").data('moved', false);
	$("#item5").data('moved', false);
	// item6.data('moved', false);
	$("#item7").data('moved', false);
	$("#item8").data('moved', false);

	$("#p1").data('movedpar', false);
	$("#p2").data('movedpar', false);
	// $("#p3").data('movedpar', false);
	$("#p4").data('movedpar', false);
	$("#p5").data('movedpar', false);
	$("#p7").data('movedpar', false);
	$("#p8").data('movedpar', false);






	// REPLACES
	function replaceLine(){
		var rule = CSSRulePlugin.getRule("a:before");
		alert(rule)
		TweenLite.to(rule, 3, {cssRule:{backgroundColor:"#FF0000"}});

	}

	function replaceText(target, word, codestring){

          target.html(target.html().replace(word, codestring));
          //replaceLine();
    
    }





	scrollHandler();


});
