$(document).ready(function(){
  $(".vacancy__header").on("click", function() {
		$(this).parent(".vacancy").toggleClass("vacancy--expanded");
  });
});

