
//Finding authorized store
export function findAuthorizedStores(e) {
    return function(dispatch) {
        if(e.key === 'Enter' && e.target.value === '' || e.target.id === 'search-authorized-stores' && document.querySelector('#searchStoreInput').value === '') {
            return (
                fetch('https://hamiltonbeach.herokuapp.com/api/authorized-sellers')
                    .then(response => response.json())
                    .then(myJson => dispatch({type: 'RECIVE_AUTHORIZED_SELLERS', payload: myJson.map(value => value)}))
                    .catch(err => dispatch({type: 'ERROR', payload: err}))
            )
        }
        if(e.key === 'Enter') {
            const storeName = e.target.value;
            return (
                fetch('https://hamiltonbeach.herokuapp.com/api/authorized-sellers')
                        .then(response => response.json())
                        .then(myJson => dispatch({type: 'RECIVE_AUTHORIZED_SELLERS', payload: myJson.filter(store => store.name.indexOf(storeName) !== -1)}))
                        .catch(err => dispatch({type: 'ERROR', payload: err}))
            )
        }
        if(e.target.id === 'search-authorized-stores') {
            const storeName = document.querySelector('#searchStoreInput').value;
            return (
                fetch('https://hamiltonbeach.herokuapp.com/api/authorized-sellers')
                        .then(response => response.json())
                        .then(myJson => dispatch({type: 'RECIVE_AUTHORIZED_SELLERS', payload: myJson.filter(store => store.name.indexOf(storeName) !== -1)}))
                        .catch(err => dispatch({type: 'ERROR', payload: err}))
            )
        }
        else {
            dispatch({type: 'RECIVE_AUTHORIZED_SELLERS', payload: []})
        }
    }
}
















//Submit the contact form
export async function handleSubmit(e){
    e.preventDefault();
    await axios.post('https://hamiltonbeach.herokuapp.com/api/form', {
        name: e.target.name.value,
        email: e.target.email.value,
        phonenumber: e.target.phonenumber.value,
        message: e.target.message.value
    })
    .then(response => {
        if(response.status === 200) {
            document.querySelector('.contact-message').style.display = "block";
            document.querySelector('.contact-submitButton').style.backgroundColor = "#3fc567";
            document.querySelector('.contact-topFields-email-input').value = "";
            document.querySelector('.contact-topFields-name-input').value = "";
            document.querySelector('.contact-bottomFields-phone-input').value = "";
            document.querySelector('.contact-text-textarea').value = "";
            setTimeout(function(){ 
                document.querySelector('.contact-message').style.display = "none"; 
                document.querySelector('.contact-submitButton').style.backgroundColor = "#c82027";
            }, 4000);
        }
        if(response.status !== 200) {
            document.querySelector('.contact-message2').style.display = "block"
            document.querySelector('.contact-topFields-email-input').value = "";
            document.querySelector('.contact-topFields-name-input').value = "";
            document.querySelector('.contact-bottomFields-phone-input').value = "";
            document.querySelector('.contact-text-textarea').value = "";
            setTimeout(function(){
                window.location.reload() 
            }, 4000);
        }
    })
    .catch(err => console.log(err))
}