function OpenTestForm() {
	document.getElementById('button-open-form').style.display = 'none';
	document.getElementById('test-form').style.display = 'inline-block';
	
	document.getElementById('countdown').style.display = 'inline-block';
	var TimeEnd = 5000;
	var TimeStart = 0;

	var x = setInterval(function() {
		TimeStart += 1000;	
		var distance = TimeEnd - TimeStart;
		var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	  	var seconds = Math.floor((distance % (1000 * 60)) / 1000);

	  	document.getElementById("clock").innerHTML = minutes + " phút " + seconds + " giây";

		if (distance < 0) {
		    clearInterval(x);
		    alert("Bài làm của bạn đã bị hủy!");
		    document.getElementById('countdown').style.display = 'none';
		  }
	}, 1000);
}
