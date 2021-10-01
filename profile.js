const colorButton = document.getElementById("color")
   

function colorAlert(evt) {
	evt.preventDefault();
	

	alert('Green');
}
colorButton.addEventListener("click", colorAlert)


const placeButton = document.getElementById("place")

function placeAlert(evt) {
	evt.preventDefault();
	

	alert('The Beach');
}
placeButton.addEventListener("click", placeAlert)


const ritualButton = document.getElementById("ritual")

function ritualAlert(evt) {
	evt.preventDefault();
	

	alert('Morning Tea');
}
ritualButton.addEventListener("click", ritualAlert)