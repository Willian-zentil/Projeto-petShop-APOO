window.onload = function () {

    function verificaLogin() {
        //senha

        document.querySelector(".form-control.input_pass").addEventListener('keypress', (e)=>{
            const useremail = document.querySelector('.form-control.input_user');
            const userpass = document.querySelector('.form-control.input_pass');
            const btnlogin =  document.querySelector('.btn.login_btn')
            
            if(useremail.value.length > 5 && userpass.value.length > 5) {
                btnlogin.classList.remove('disabled')
            }
        })

    }

    //chamadas
    verificaLogin()



}

//cadastra agendamento
function cadAgendamento(){
    event.preventDefault();
    const form = document.getElementById('cadAgendamento')


        
    let idAgenda = document.getElementById("idAgenda").value
    let dataAgenda = document.getElementById("dataAgenda").value
    let tipoPagAgenda = document.getElementById("tipoPagAgenda").value 
    let typeAgenda = document.getElementById("typeAgenda").value 
    let serviceAgenda = document.getElementById("serviceAgenda").value 
    let idClientAgenda = document.getElementById("idClientAgenda").value 

    body = {
        "agendamentoId": idAgenda,
        "agendamentoDate": dataAgenda,
        "agendamentoTypePayment": tipoPagAgenda,
        "agendamentoTypeService": typeAgenda,
        "agendamentoValueService": serviceAgenda,
        "clienteId": idClientAgenda
    }

    const url = "http://localhost:4000/agendamentos"

    fazpost(url, body)
}

function fazpost (url, body){
    console.log("Body=", body)
    let request = new XMLHttpRequest()
    request.open("POST", url, true)
    request.setRequestHeader("Content-type", "application/json")
    request.send(JSON.stringify(body))

    request.onload = function() {
        console.log(this.responseText)
    }

    return request.responseText
}