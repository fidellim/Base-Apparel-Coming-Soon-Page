const formSubmit = document.querySelector(".formSubmit");
const inputText = document.querySelector(".inputText");
const errorText = document.querySelector(".errorText");
const warningIcon = document.querySelector(".fa-exclamation-circle");
const regex = /^[A-Za-z]+@(gmail|outlook|yahoo).com$/;

formSubmit.addEventListener("submit", (event) => {
	//prevent from reloading
	event.preventDefault();

	if (!regex.test(inputText.value)) {
		console.log("wrong answer");
		errorText.style.display = "block";
		warningIcon.style.display = "block";
		inputText.style.borderColor = "hsl(0, 93%, 68%)";
		inputText.style.borderWidth = "2px";
	} else {
		errorText.style.display = "none";
		warningIcon.style.display = "none";
		inputText.style.borderColor = "hsl(0, 36%, 70%)";
		inputText.style.borderWidth = "1px";
	}
});
