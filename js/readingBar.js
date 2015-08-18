/*
TODO LIST

- apply to article
- config position
- on resize
- marker localstorage
*/

(function($) {
	$.fn.extend({
		readingbar: function(options) {

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

			/* Options */

			if(options){

				if(options.percent == false) {
					$(".complete").html("<span class='percent'>" + " " + "</span>");
				} else {
					$(".complete").html("<span class='percent'>" + finalPercent + "</span>");
				}

				if(options.backgroundColor !== "") {
					$(".complete").css("background-color", options.backgroundColor);	
				}
			}


			$(window).scroll(function(){
				percent = ($(document).scrollTop() * 100) / totalScroll;
				finalPercent = Math.round(percent) + "%";

				$(".complete").css("width", finalPercent);

				/*options when scroll */

				if(options){

					if(options.percent == false) {
						$(".complete").html("<span class='percent'>" + " " + "</span>");
					} else {
						$(".complete").html("<span class='percent'>" + finalPercent + "</span>");
					}

				} else {
					$(".complete").html("<span class='percent'>" + finalPercent + "</span>");
				}

			});
		}
	})
})(jQuery)