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
