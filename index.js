
let turn ="x";
function game(id){
let box = document.getElementById(id);
	var header = document.querySelector(".header");
	if(turn==="x" && box.innerHTML ==""){
		box.innerHTML="x";
		turn = "o";
		header.innerHTML = "O";
	}
	else if(turn==="o" && box.innerHTML ==""){
		box.innerHTML="o";
		turn = "x";
		header.innerHTML = "X";
	}
}