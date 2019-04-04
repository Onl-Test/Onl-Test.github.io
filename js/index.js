function OpenTestForm() {
	document.getElementById('button-open-form').style.display = 'none';
	document.getElementById('test-form').style.display = 'inline-block';
	
	document.getElementById('countdown').style.display = 'inline-block';
	
	/* !!! SET UP TIMER HERE !!! */
	var TimeEnd = 60000;
	
	var TimeStart = 0;

	var x = setInterval(function() {
		TimeStart += 1000;	
		var distance = TimeEnd - TimeStart;
		var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	  	var seconds = Math.floor((distance % (1000 * 60)) / 1000);

	  	document.getElementById("clock").innerHTML = minutes + " phút " + seconds + " giây";

	  	if (distance < 30000 && distance > 28000) {
	  		document.getElementById('reminder-tab').style.display = 'inline-block';
	  	}

		if (distance < 0) {
		    clearInterval(x);
		    document.getElementById('cancel-tab').style.display = 'inline-block';
		    document.getElementById('countdown').style.display = 'none';
		    document.getElementById('test-form').style.display = 'none';
		  }
	}, 1000);
}
