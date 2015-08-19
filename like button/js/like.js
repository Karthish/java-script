$(document).ready(function() {
$("#bt1").click(function() {
var ab = $("#txt").val(); 
$("#div").append("<div class='comment'>"+ ab+"<button onClick='get(this)' >Like</button> <span>0</span> </div>" )
$("#txt").val("");
});
});


function get(that) {
	var a = $(that).closest(".comment").find("span").html();
	a = parseInt(a);

	$(that).closest(".comment").find("span").html(a+1);


}

