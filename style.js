function draktheme(){
	document.body.classList.toggle("red");
}

function mobileMenue(){
let nav= document.getElementById("mobile-menue");

if(nav.style.display=="flex"){
	nav.style.display = "none"
}else{
	nav.style.display= "flex"
}

}

let menuBtn= document.getElementById("menu-btn");

menuBtn.addEventListener("click",mobileMenue);