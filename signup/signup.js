document.getElementById("alert").addEventListener("click", checkF);

function checkF(){
var myinput = document.getElementById("pwd");
if (myinput.value.length >= 8){
	myinput.style.backgroundColor = "white";
	myinput.style.color= "black";
} else {
	myinput.style.backgroundColor = "red";
	myinput.style.color= "yellow";
}
}







