$(function(){

	// declare variables
	const ratingCard = document.querySelector(".ratingContainer");
	const resultCard = document.querySelector(".resultContainer");
	const ratingNum = document.querySelector(".ratingNum");

	// get rating value function
	function doRating(element){
		ratingNum.innerHTML = element.innerHTML;
	};

	// onclick function
	$(".ratingBtn").on("click", function() {

		//reset ratingBtn properties
		$('.ratingBtn').removeClass("rated");

		if ($('.ratingBtn').hasClass("rated")) {
			// remove class rated if ratingBtn is toggled
			$(this).removeClass("rated");
		} else {
			// add class rated to clicked ratingBtn
			$(this).addClass("rated");
			// fetch and display the ratings
			doRating(this);
		}
	});

	// submit btn function
	$(".submitBtn").on("click", function() {
		//Check if ratingBtn has class rated
		if (!$('.ratingBtn').hasClass("rated")) {
			// display alert prompt for you to leave a rating
			alert("Please leave your rating!");
		} else {
			// switching of card contents
			resultCard.classList.remove("hide");
			ratingCard.classList.add("hide");
		}
	});
});
