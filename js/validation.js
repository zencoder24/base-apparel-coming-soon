
const emailSubmit = document.querySelector('#emailSubmit')
const textInfo = document.querySelector('.text-info')
const emailButton = document.querySelector('#emailButton')
const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/ ;
//Error Message
let errMessage = document.createElement('p');
errMessage.id = 'errorMessage'


//Error Icon
let errIcon = document.createElement('img');
errIcon.id = 'errorIcon'
errIcon.src = '/images/icon-error.svg';


emailSubmit.addEventListener('submit', function (e){
    e.preventDefault()
    const emailInput = document.querySelectorAll('input')[0];
    if(regex.test(emailInput.value)){
        errMessage.remove()
        errIcon.remove()
        emailSubmit.style.border = "2px solid  #ce9797";
    } else {
        errMessage.textContent = 'Please provide a valid email'
        textInfo.append(errMessage);
        emailSubmit.insertBefore(errIcon, emailButton )
        emailSubmit.style.border = "2px solid red";


    }
})




