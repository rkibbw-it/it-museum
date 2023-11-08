var audio;
var state = 0; // 0 = spielt gerade nicht, 1 = spielt gerade

// um Audiodatei aus HTML-Datei festzulegen
function setAudioFile(file) {
	audio = new Audio(file);
}

// wenn Audio fertig abgespielt
audio.onended = function() {
    document.getElementById("button").src = "images/play.png";
	state = 0;
}; 

function play() 	 {
	audio.play();
	document.getElementById("button").src = "images/pause.png";
}

function stop() {
	audio.pause();
	document.getElementById("button").src = "images/play.png";
}

// umschalten: play/pause
function toggle() {
	if (state==0) {
		play();
		state=1;
	} else {
		stop();
		state=0;
	}
}