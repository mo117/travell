$(document).ready(function () {


	$("nav a").click(function () {
		console.log($(this).attr("href"))

		$("html , body").animate({

			scrollTop: $($(this).attr("href")).offset().top


		}, 2000)



	})


	$(window).scroll(function () {

		if ($(this).scrollTop() > 20) {


			$(".top").fadeIn();
			$("nav").addClass("small")


		} else {


			$(".top").fadeOut()
			$("nav").removeClass('small')
		}


	})

	$(".top").click(function () {


		$('html , body').animate({


			scrollTop: 0


		}, 2000)





	})

})