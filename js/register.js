let submitRegister = document.getElementById("submitRegister").addEventListener('click', e => {
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    // let repeatPassword = document.getElementById("repeatPassword").value;

    fetch('http://localhost:3000/users/register', {
        method: "post",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify ({
            "username": username,
            "email": email,
            "password": password
        })
    }) .then(result => {
        return result.json();
    }) .then(json => {
        console.log(json);
    }) . catch(err => {
        console.log(err);
    })

    e.preventDefault();
})