const baseUrl = "http://localhost:3000/transfers/"

let submitTransfer = document.getElementById("submitTransfer").addEventListener('click', ()=> {
    let recipient = document.getElementById("recipient").value;
    let reason = document.getElementById("reason").value;
    let message = document.getElementById("message").value;
    let amount = document.getElementById("amount").value;

    console.log(recipient + reason + message + amount);
})