//your JS code here. If required.
const Div = document.querySelector(".search");
const Btn = document.querySelector(".btn");
const Input = document.querySelector(".input");

Btn.addEventListener("click",() =>{
	Div.classList.add("active");
	Input.focus();
});
