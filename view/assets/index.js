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

    fazpost(body)
}

//cadastra cliente
function cadCliente(){
    event.preventDefault();
    const form = document.getElementById('cadCliente')

    let clienteId = document.getElementById("clienteId").value
    let clienteName = document.getElementById("clienteName").value
    let clienteCpf = document.getElementById("clienteCpf").value 
    let clientePhone = document.getElementById("clientePhone").value 

    body = {
        "clienteId": clienteId,
        "clienteName": clienteName,
        "clienteCpf": clienteCpf,
        "clientePhone": clientePhone,
    }

    console.table(body)

    fazpost(body)
}

//post
function fazpost (body){
    const options = {
        method: 'POST',
        body: Object.keys(body)
    }

    fetch('http://localhost:4000/agendamentos', options)
        .then(T => T.json())
        .then(console.log)
        .catch(err => console.log(err.message))
}
