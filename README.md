# Frontend Mentor - Base Apparel coming soon page solution

This is a solution to the [Base Apparel coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/base-apparel-coming-soon-page-5d46b47f8db8a7063f9331a0). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty
  - The email address is not formatted correctly

### Screenshot

![Solution PC](./images/Solution%20PC.jpg)
![Solution PC Error](./images/Solution%20PC%20Error.jpg)
![Solution Mobile](./images/Solution%20Mobile.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- SASS
- Flexbox
- Mobile-first workflow
- Vanilla JS

### What I learned

I was able to review regular expressions which is used in submitting the form.

```js
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
```

### Continued development

To be able to practice more vanilla JS.

### Useful resources

- [Submit Event in Vanilla JS](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/submit_event) - An example of a submit event in vanilla JS.
- [RegEx Test Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test) - An example of using test function for regex.
- [RegEx CheatSheet](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Cheatsheet) - A cheatsheet for regex.
- [Prevent Reload of Page when Submitting Form](https://stackoverflow.com/questions/9612569/prevent-browser-jump-to-top-page-when-submit-the-form) - Use preventDefault function to prevent page from reloading.

## Author

- Website - [Fidel Lim](https://fidellim-portfolio.netlify.app/)
- Frontend Mentor - [@fidellim](https://www.frontendmentor.io/profile/fidellim)
- Github - [@fidellim](https://github.com/fidellim)
