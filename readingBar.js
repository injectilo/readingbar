/*
TODO LIST
make it plug-in
apply to article
config color
config position
marker localstorage
*/

(function(){
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

	var mycontent = $("#my-content").html();
	var splitwords = mycontent.split(/\b[\s,\.\-:;]*/);
	var total = splitwords.length;

	var estimateTime = (total * 60) / 180;
	var estimateTimeMinutes = Math.round(estimateTime / 60);
	$(".time").html("Read in " + estimateTimeMinutes + " min.");

	var totalScroll = $(document).height() - $(window).height();
	var offsetArt = $("#my-content").offset().top;
	var porcentajeOffset = Math.round((offsetArt * 100) / totalScroll); 

	var percent = ($(document).scrollTop() * 100) / totalScroll;
	var finalPercent = Math.round(percent) + "%";
	$(".complete").html("<span class='percent'>" + finalPercent + "</span>");
	$(".complete").css("width", finalPercent);

	$(".complete").css("background-color", "orange");

	$(window).scroll(function(){
		percent = ($(document).scrollTop() * 100) / totalScroll;
		finalPercent = Math.round(percent) + "%";
		$(".complete").css("width", finalPercent);
		$(".complete").html("<span class='percent'>" + finalPercent + "</span>");

	});
	
})();
