import { store } from '../store'
//Submit the contact form
export async function handleSubmit(e){
    e.preventDefault();
    // return function(dispatch) {
        fetch('http://localhost:5000/api/form', {
            method: 'POST',
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
                global.document.querySelector('.contact-firstName-input').value = "";
                global.document.querySelector('.contact-familyName-input').value = "";
                global.document.querySelector('.contact-email-input').value = "";
                global.document.querySelector('.contact-phone-input').value = "";
                global.document.querySelector('.contact-textarea').value = "";
                store.dispatch({type: 'SUCCESS'})
                setTimeout(function(){ store.dispatch({type: 'CLOSE'}) }, 4000);
            }
            if(response.status !== 200) {
                global.document.querySelector('.contact-firstName-input').value = "";
                global.document.querySelector('.contact-familyName-input').value = "";
                global.document.querySelector('.contact-email-input').value = "";
                global.document.querySelector('.contact-phone-input').value = "";
                global.document.querySelector('.contact-textarea').value = "";
                store.dispatch({type: 'FAIL'})
                setTimeout(function(){ global.location.reload() }, 4000);
            }
        })
        .catch(err => console.log(err))
    // }
}