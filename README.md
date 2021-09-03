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


![Desktop](./screenshot-desktop.png)



### Links

- Live Site URL: [Vercel](https://base-apparel-coming-soon-two-vert.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- Sass
- Javascript
- Flexbox
- Mobile-first workflow




### What I learned

How to put a button inside an input field by making the encompassing form element part of the input field. This coupled with flexbox made it easy to construct the email field

```html
<form action="" id="emailSubmit" novalidate>
  <input type="email" id="email" placeholder="Email Address">
  <button id="emailButton"><img src="images/icon-arrow.svg" alt="arrow"></button>
</form>
```
```scss
form{
  display: flex;
  flex-direction: row;
  border: 1px solid $primaryColor;
  border-radius: 34px;

  & input[type="email"]{
    flex-grow: 2;
    border-radius: 34px;
    border: none;
    &:focus{
      outline: none;
    }
    &::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
      color: $primaryColor;
      font-family: $primaryFont;
      opacity: 1; /* Firefox */
    }
    &:-ms-input-placeholder { /* Internet Explorer 10-11 */
      color: $primaryColor;
    }
    ::-ms-input-placeholder { /* Microsoft Edge */
      color: $primaryColor;
    }
  }
  button{
    border-radius: 34px;
    border: none ;
    box-shadow: 0 0 5px #ce9797;
    background-image: $gradientTwo;
    &:hover{
      background-image: linear-gradient(135deg, rgb(248, 191, 191), rgb(248, 191, 191));
    }

  }
}

```

### Continued development
Regex was used minimally in the JavaScript validation script but I would love to expand my knowledge on the subject.

I want to continue to learn and better implement SASS in my projects


### Useful resources

- [How to Add Button Inside Input](https://stackoverflow.com/questions/15314407/how-to-add-button-inside-input) - This post showed me how to use Flexbox to create this effect. It involved putting a border on the actual form. I will definitely use this going forward
- [Flexbox and Absolute Positioning](https://chenhuijing.com/blog/flexbox-and-absolute-positioning/) - I found a workaround for the dilemma I was in regarding how I positioned item on my page for mobile display vs how I needed it for desktop display. I ended using absolute positioning for the logo element to position it correctly. 
## Author

- Frontend Mentor - [@zencoder24](https://www.frontendmentor.io/profile/zencoder24)


