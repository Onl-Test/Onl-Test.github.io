var TimeEnd = 900000;
var TimeStart = 0;

var x = setInterval(function() {
	TimeStart += 1000;	
	var distance = TimeEnd - TimeStart;
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  	var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  	document.getElementById("clock").innerHTML = minutes + "p " + seconds + "'";

	if (distance < 0) {
	    clearInterval(x);
	    document.getElementById("countdown").innerHTML = "HẾT GIỜ";
	  }
}, 1000);

function OpenTestForm() {
	document.getElementById('test-form').style.display = 'inline-block';
	document.getElementById('countdown').style.display = 'inline-block';
}
