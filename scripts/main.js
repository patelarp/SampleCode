$(document).ready(function(){
	$("#btn").on("click",function(){

		// Using the core $.ajax() method
		$.ajax({                            
			type:"GET",                     	// The HTTP request method.
			url:"movies.json?search="+$("#search").val(), // The URL of the data(JSON) to fetch. Server can process search parameter and return valid results
			dataType:"json",					// the type of data we expect back
			cache:false,  						// Force browser to get fresh data with every request. though its not requried if data is not updating frequnatly.
			// code to run if the request succeeds;
			success: function(data){
				if(data.movies && data.movies.length){
					$("#container").show(); // Show container
					var str = "";
					//loop through the results with the following function
					$.each(data.movies,function(i,item){
						str += "<li><a href='movie/"+item.name+"'><img src="+item.img+"></a></li>";
					});
					$("#container").html(str);
				} else {
					$("#container").html("<p>No Results found</p>");
				}
			},
			// code to run if the request fails
			error: function(){
				$("#container").html("<p>There is some problems while loading results</p>");
			}
	 	});
	});
});