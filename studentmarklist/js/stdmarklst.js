function total(arr) {
var sum=0;

for(var i=0;i<arr.length;i++)
{
	sum += parseInt(arr[i]);
}
return sum;
}

function avg(Sum) {
	return Sum/5;
}


$(document).ready(function() {
	$("#btn").click(function() {

var txtval=[];
$(".marks").each(function () {
txtval.push($(this).val());

if($(this).val()<35)
{
	alert("failed in" + " " + $(this).attr('id'));
}

var Sum = total(txtval);
$("#total").val(Sum);

var average = avg(Sum);
$("#average").val(average);



});
// });
});
