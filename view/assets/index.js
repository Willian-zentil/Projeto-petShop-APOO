//cadastra agendamento
function cadAgendamento(){
    event.preventDefault();
        
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

    document.getElementById("idAgenda").value=''; 
    document.getElementById("dataAgenda").value=''; 
    document.getElementById("clienteName").value=''; 
    document.getElementById("tipoPagAgenda").value=''; 
    document.getElementById("typeAgenda").value=''; 
    document.getElementById("serviceAgenda").value=''; 
    document.getElementById("idClientAgenda").value=''; 
}

//cadastra cliente
function cadCliente(){
    event.preventDefault();

    //let clienteId = document.getElementById("clienteId").value
    let clienteName = document.getElementById("clienteName").value
    let clienteCpf = document.getElementById("clienteCpf").value 
    let clientePhone = document.getElementById("clientePhone").value 

    const options = {
        method: 'POST',
        body: JSON.stringify({
            name: clienteName,
            cpf: clienteCpf,
            phone: clientePhone
        }),
        headers: {'Content-Type': 'application/json'}
    }

    fetchApiPost(options, 'clientes')

    document.getElementById("clienteName").value=''; 
    document.getElementById("clienteCpf").value=''; 
    document.getElementById("clientePhone").value=''; 
}

//buscar pet
function buscaPet() {
    event.preventDefault();

    let id = document.getElementById("petId").value

    fetch('http://localhost:4000/pets/'+id)
    .then(resp => resp.json())
    .then(function(resp) {
        document.querySelector('.card-body.results.p-4').classList.remove('d-none')

        console.log(resp)
        document.querySelector('.card-body.results.p-4 #listaPetId').innerHTML = resp.id
        document.querySelector('.card-body.results.p-4 #listaPetName').innerHTML = resp.name
        document.querySelector('.card-body.results.p-4 #listaPetDonoID').innerHTML = resp.clienteId
    })
}

//lista cliente
function getClients(){
    //
}

//cadastra pet
function cadPet(){
    event.preventDefault();

    //let clienteId = document.getElementById("clienteId").value
    let clienteId = document.getElementById("clientPetId").value
    let namePet = document.getElementById("petName").value 

    const options = {
        method: 'POST',
        body: JSON.stringify({
            clienteId: clienteId,
            name: namePet
        }),
        headers: {'Content-Type': 'application/json'}
    }

    console.log(fetchApiPost(options, 'pets'))

    document.getElementById("clientPetId").value=''; 
    document.getElementById("petName").value='';
}

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

//fetch
function fetchApiPost(options, url) {
    fetch('http://localhost:4000/'+url, options)
        .then(resp => console.log(resp))
        .then(function(response) {
                if(response.ok){
                    alert("Ação realizada com sucesso")
                }else {
                    alert("Erro, tente novamente")
                }
            }
        )
}

function fetchApiGet(options) {
    fetch('http://localhost:4000/pets/'+options.id)
        .then(function(resp) {
            return resp
        })
}