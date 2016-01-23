function portfolioImageSwap(){
	$(".thumbnail-image img").click(function(){
		var selectedImage = this.src;
		$(".main-image img")[0].src = selectedImage;
		$(".main-image")[0].scrollTop = 0;
	});
}

function portfolioAjaxCall(){
	var portfolioDir = "";
	$("#portfolio .portfolio-item a").click(function(){
		portfolioDir = $(this).data("portfoliocall");
		
		$.ajax({
			url:"img/portfolio/" + portfolioDir + "/data.html",
			method:"GET",
			dataType:"html",
			success:function(data){
				$(".portfolio-modal .modal-content").html(data);
			},
			error:function(e){
				console.error("Portfolio AJAX Error", e);
			}
		});
	});
	
	
}

$(document).ready(function () {
	portfolioAjaxCall();
	
	var dateYear = new Date().getFullYear();
	$(".currentDate").html(dateYear);
});