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

//busca cliente
function buscaClient() {
    event.preventDefault();

    fetch('http://localhost:4000/clientes/')
    .then(resp => resp.json())
    .then(function(resp) {
        let list = document.querySelector('.card-body.results.p-4 tbody')

        while (list.hasChildNodes()) {
            list.removeChild(list.firstChild);
          }

        document.querySelector('.card-body.results.p-4').classList.remove('d-none')

        resp.forEach(resp => {
            const html = htmlToElement(`
            <tr>
                <th scope="row" id="listaClientId">${resp.id}</th>
                <td id="listaClientName">${resp.name}</td>
                <td id="listaClientCpf">${resp.cpf}</td>
                <td id="listaClientPhone">${resp.phone}</td>
                <td>
                    <button id="listaPetRemove" onclick="deletClient(this)" type="submit" class="btn btn-danger" data-id-type="${resp.id}">Delete</button>
                </td>
            </tr>`)
            document.querySelector('.card-body.results.p-4 tbody').append(html)
        });
    })
}

//deletar cliente
function deletClient(id){
    event.preventDefault();
    let clientId = id.getAttribute("data-id-type");

    const options = {
        method: 'DELETE',
        body: JSON.stringify({
            id: clientId
        }),
        headers: {'Content-Type': 'application/json'}
    }

    fetchApiDelete(options, clientId, 'clientes')
}

//buscar pet
function buscaPet() {
    event.preventDefault();

        fetch('http://localhost:4000/pets/')
        .then(resp => resp.json())
        .then(function(resp) {
            let list = document.querySelector('.card-body.results.p-4 tbody')

            while (list.hasChildNodes()) {
                list.removeChild(list.firstChild);
              }

            document.querySelector('.card-body.results.p-4').classList.remove('d-none')
    
            resp.forEach(resp => {
                const html = htmlToElement(`
                <tr>
                    <th scope="row" id="listaPetId">${resp.id}</th>
                    <td id="listaPetName">${resp.name}</td>
                    <td id="listaPetDonoID">${resp.clienteId}</td>
                    <td>
                        <button id="listaPetRemove" onclick="deletPet(this)" type="submit" class="btn btn-danger" data-id-type="${resp.id}">Delete</button>
                    </td>
                </tr>`)
                document.querySelector('.card-body.results.p-4 tbody').append(html)
            });
        })

}

function htmlToElement(html) {
    var template = document.createElement('template');
    html = html.trim(); // Never return a text node of whitespace as the result
    template.innerHTML = html;
    return template.content.firstChild;
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

//deletar pet
function deletPet(id){
    event.preventDefault();
    let petId = id.getAttribute("data-id-type");

    const options = {
        method: 'DELETE',
        body: JSON.stringify({
            id: petId
        }),
        headers: {'Content-Type': 'application/json'}
    }

    fetchApiDelete(options, petId, 'pets')
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
        .then(response => response)
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

function fetchApiDelete(options,id, url) {
    console.log('http://localhost:4000/'+url+'/'+id, options)
    fetch('http://localhost:4000/'+url+'/'+id, options)
        .then(response => response)
        .then(()=> {
            document.querySelector('.card-body.results.p-4').classList.add('d-none')
        })
        .catch(console.error);
}