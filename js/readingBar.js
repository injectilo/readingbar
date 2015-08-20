/*
TODO LIST

- apply only to article.
- config position.
- font relative - height.
- marker localstorage.
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

			var saveScroll = document.createElement("div");
			saveScroll.className = "saveScroll";
			document.body.appendChild(saveScroll);

			var mycontent = $("#my-content").html();
			var splitwords = mycontent.split(/\b[\s,\.\-:;]*/);
			var total = splitwords.length;

			/* estimate time */
			var estimateTime = (total * 60) / 180;
			var estimateTimeMinutes = Math.round(estimateTime / 60);
			$(".time").html("Read in " + estimateTimeMinutes + " min.");

			$(".saveScroll").html("<a href='#'>you was here</a>");

			var totalScroll = $(document).height() - $("#my-content").height();
			var offsetArt = $("#my-content").offset().top;
			var offsetPercent = Math.round((offsetArt * 100) / totalScroll); 

			var percent = ($(document).scrollTop() * 100) / totalScroll;
			var finalPercent = Math.round(percent) + "%";
			$(".complete").html("<span class='percent'>" + finalPercent + "</span>");
			$(".complete").css("width", finalPercent);

			settings();
			//saveScroll();


			$(window).scroll(function(){
				//var totalScroll = $(document).height() - $(window).height();
				var totalScroll = $(document).height() - ($("#my-content").position().top + $(window).height());
				percent = ($(document).scrollTop() * 100) / totalScroll;
				finalPercent = Math.round(percent) + "%";
				$(".complete").css("width", finalPercent);
				settings();
			});

			function settings(){

				if(options){
					if(options.percent == false) {
						$(".complete").html("<span class='percent'>" + " " + "</span>");
					} else {
						$(".complete").html("<span class='percent'>" + finalPercent + "</span>");
					}

					if(options.backgroundColor !== "") {
						$(".complete").css("background-color", options.backgroundColor);	
					}
					if(options.height != "") {
						$(".bar").css("height", options.height + "px");	
					}
				}
			}

			function saveScroll() {
				var scrollpos = localStorage.getItem('scrollpos');
				window.scrollTo(0, scrollpos);

				window.onscroll = function(evt) {
					scrollpos = evt.pageY;
					localStorage.setItem('scrollpos', scrollpos);
				}
			}

		}
	})
})(jQuery)