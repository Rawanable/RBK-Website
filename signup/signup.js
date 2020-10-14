document.getElementById("alert").addEventListener("click", checkF);

var doErrMsg=false;

function checkF(){
var myinput = document.getElementById("pwd");
if (myinput.value.length >= 8){
	myinput.style.backgroundColor = "white";
	myinput.style.color= "black";
	document.getElementById("signup").onclick = function () {
        location.href = "C:/Users/DELL/Desktop/RBK-Website/login/login.html";}
} else {
	myinput.style.backgroundColor = "red";
	myinput.style.color= "yellow";
	if(doErrMsg==false)
	{
		var x = myinput.insertAdjacentText("afterend", "invalid password");
		doErrMsg=true;
	}
}
}





