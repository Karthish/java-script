$(document).ready(function() {
$("#btn").click(function() {
var number = $("#txt").val();
if(validate(number)==true)
{
	oddeven(number);
}
else
{
	alert("enter numbers only");
}
});
});

function oddeven(num) {
	if(num%2=='0')
	{
		alert("even number");
	}

	else {
		alert("odd number");
	}
	return oddeven;

}

function validate(number) {

    var reg = /^[0-9]+$/;
    if (reg.test(number)) {
        return true;
    }
    else {

        return false;
    }
}
