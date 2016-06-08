


	$.ajax({
		type: 'GET',
		url: "https://itunes.apple.com/search?term="+x+"",
		success: function(response){
			console.log(response)
		}
	});