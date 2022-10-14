console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
		alert ("Your form has been submitted successfully");
}

function alertcat(evt) {
	evt.preventDefault();
		alert("You have amazing Coding skills!")
}

let form = document.querySelector('#contact');
let cat = document.getElementById("cat")

form.addEventListener('submit', handleSubmit);
cat.addEventListener("mouseover", alertcat);