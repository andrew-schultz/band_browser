$(document).ready(function(){

SC.initialize({
	client_id: 'f8ff098ec3a21f42cdc36dd7dae4fc3e'
});

$('#search').keyup(function(){
	x = $('#search').val();
	if(x.length > 2){
		SC.get('/users', {
			q: x
		}).then(function(users) {
			console.log(users);
		});
	}
});


var search = function(q){
	
		


		// type: "GET",
		// url: 'http://api.soundcloud.com/users/',
		// data: {
		// 	q: query,
		// 	type: 'artist'
		// }, 
		// success: function(response){
		// 	console.log(response);
		// }
	
}

});