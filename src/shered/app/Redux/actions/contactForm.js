const axios = require('axios');

//Submit the contact form
export async function handleSubmit(e){
    e.preventDefault();
    console.log(e.target.firstName.value)
    // await axios.post('https://localhost:5000/api/form', {
        // firstName: e.target.firstName.value,
        // lastName: e.target.lastName.value,
        // email: e.target.email.value,
        // phonenumber: e.target.phonenumber.value,
        // message: e.target.message.value
    // })

    fetch('http://localhost:5000/api/form', {
        method: 'POST', // or 'PUT'
        body: JSON.stringify({
            firstName: e.target.firstName.value,
            lastName: e.target.lastName.value,
            email: e.target.email.value,
            phonenumber: e.target.phonenumber.value,
            message: e.target.message.value
        }),
        headers:{
          'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if(response.status === 200) {
            console.log('in')
            // document.querySelector('.contact-message').style.display = "block";
            // document.querySelector('.contact-submitButton').style.backgroundColor = "#3fc567";
            // document.querySelector('.contact-firstName-input').value = "";
            // document.querySelector('.contact-familyName-input').value = "";
            // document.querySelector('.contact-email-input').value = "";
            // document.querySelector('.contact-phone-input').value = "";
            // document.querySelector('."contact-textarea').value = "";
            // setTimeout(function(){ 
            //     document.querySelector('.contact-message').style.display = "none"; 
            //     document.querySelector('.contact-submitButton').style.backgroundColor = "#c82027";
            // }, 4000);
            return 'done';
        }
        if(response.status !== 200) {
            console.log('out')
            // document.querySelector('.contact-message2').style.display = "block"
            // document.querySelector('.contact-firstName-input').value = "";
            // document.querySelector('.contact-familyName-input').value = "";
            // document.querySelector('.contact-email-input').value = "";
            // document.querySelector('.contact-phone-input').value = "";
            // document.querySelector('."contact-textarea').value = "";
            // setTimeout(function(){
            //     window.location.reload() 
            // }, 4000);
            return 'dead';
        }
    })
    .catch(err => console.log(err))
}