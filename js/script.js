  
function init(){
	var button = document.getElementById("entyrbutton");
	
	function myFunction() {
		var tbx = document.getElementById("entryinput");
		document.getElementById('textoutput').innerHTML = tbx.value;
		alert("Haoli Yang: " + tbx.value);
		
	button.addEventListener('click', myFunction);
	
	}

window.addEventListener('load', init);