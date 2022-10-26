async function logoutHandler(){
    const response = await fetch( '/api/user/logout', {method: 'post', headers:{'Content-Type': 'application/json'}});
        if (response.ok){document.location.replace('/');}else{alert(response.statusText);}}


document.querySelector('#logout-link').addEventListener('click', logoutHandler);