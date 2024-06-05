function switchOff() {
	document.getElementById("bulb").src = "./bulb-go-off-img.png";
	document.getElementById("cat").src = "./cat-eyes-img.png";
	document.getElementById("status").textContent = "OFF";
}

function switchOn() {
	document.getElementById("bulb").src = "./bulb-go-on-img.png";
	document.getElementById("cat").src = "./normal-cat-img.png";
	document.getElementById("status").textContent = "ON";
}
