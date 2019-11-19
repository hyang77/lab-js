  
function init(){
	var button = document.getElementById("entrybutton");
	button.addEventListener('click', myFunction);
}
function myFunction() {
	var tbx = document.getElementById("entryinput");
	document.getElementById('textoutput').innerHTML = tbx.value;
	alert("Haoli Yang: " + tbx.value);
}	

window.addEventListener('load', init);