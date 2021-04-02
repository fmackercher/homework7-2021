var video;

window.addEventListener("load", function () {
	video = document.querySelector("#player1");
	volume = document.querySelector("#volume");
});

// Play the video //
document.querySelector("#play").addEventListener("click", function () {
	console.log("Play Video");
	video.play()
	// Update the volume info //
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
});

// Pause the video //
document.querySelector('#pause').addEventListener("click", function () {
	console.log("Pause Video");
	video.pause()
});

// Slow down //

document.querySelector("#slower").addEventListener("click",
	function () {
		console.log("Slow Down Video")
		video.playbackRate *= 0.95;
		console.log("New speed is " + video.playbackRate);
	});

// Speed up //
document.querySelector("#faster").addEventListener("click",
	function () {
		console.log("Speed Up Video")
		video.playbackRate /= 0.95;
		console.log("New speed is " + video.playbackRate);
	});

// Skip ahead //
document.querySelector("#skip").addEventListener("click", function () {
	console.log("Skip Ahead")
	video.currentTime += 15;
	console.log("New location is " + video.currentTime);
	video.addEventListener("ended", function () {
		video.currentTime = 0;
		video.play();
	})
	console.log("New location is " + video.currentTime);
});

// Mute //
document.querySelector("#mute").addEventListener("click", function () {
	if (video.muted === false) {
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute";
	}
	else {
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute";
	}
});

// Volume slider //
document.querySelector("#slider").addEventListener("click", function () {
	console.log("Changing Volume")
	console.log(this.value)
	video.volume = this.value / 100;
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
});

// Styled //
document.querySelector("#vintage").addEventListener
	("click", function () {
		console.log("Changing CSS")
		video.classList.add("oldSchool");
	});

// Original //
document.querySelector("#orig").addEventListener
	("click", function () {
		console.log("Removing CSS")
		video.classList.remove("oldSchool");
	});

