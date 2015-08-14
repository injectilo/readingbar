(function(){
	var articulo = $("#articulo").html();
	var splitpalabras = articulo.split(/\b[\s,\.\-:;]*/);
	var total = splitpalabras.length;

	var estimateTime = (total * 60) / 180;
	var estimateTimeMinutes = Math.round(estimateTime / 60);
	$(".time").html("Read in " + estimateTimeMinutes + " min.");

	var totalScroll = $(document).height() - $(window).height();
	var offsetArt = $("#articulo").offset().top;
	var porcentajeOffset = Math.round((offsetArt * 100) / totalScroll); 

	var porcentaje = ($(document).scrollTop() * 100) / totalScroll;
	var porcentajeFinal = Math.round(porcentaje) + "%";
	$(".complete").html("<span class='porcentaje'>" + porcentajeFinal + "</span>");
	$(".complete").css("width", porcentajeFinal);

	/* printing readingBar */
	var bar = document.createElement("div");
	bar.className = "bar";
	document.body.appendChild(bar);
	var complete = document.createElement("div");
	complete.className = "complete";
	bar.appendChild(complete);
	var time = document.createElement("div");
	time.className = "time";
	bar.appendChild(time);


	$(window).scroll(function(){
		porcentaje = ($(document).scrollTop() * 100) / totalScroll;
		porcentajeFinal = Math.round(porcentaje) + "%";
		$(".complete").css("width", porcentajeFinal);
		$(".complete").html("<span class='porcentaje'>" + porcentajeFinal + "</span>");

	});
	
})();
