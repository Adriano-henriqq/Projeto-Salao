//var  = document.querySelectorAll("#clientes--");
//console.log(cliente.textContent);

//adiciona os clientes na tabela
var botao = document.querySelector(".botao");
    
    console.log(form);

    botao.addEventListener("click", function(event){
        event.preventDefault();

        var form = document.querySelector("#form");
        var clientes = obtemClientes(form);          
        var tr = montaTr(clientes);
        var tabela = document.querySelector("#add-tabela");
        var erros = validaCliente(clientes);
        if(erros.length > 0){
            exibeMensagem(erros);
            return;
        }
        tabela.appendChild(tr);
        form.reset();
        
 
})
//obtem os clientes que serão escritos no formulario
function obtemClientes (form){
    var clientes = {
        nome : form.nome.value,
        data : form.data.value,
        semana : form.semana.value,
        horario : form.horario.value
    }
    return clientes;
}  
    //monta a tr e add as tds na nossa tr
    function montaTr (cliente){
       var clienteTr = document.createElement('tr');
       

       clienteTr.appendChild(montaTd(cliente.nome, "tabela__corpo-clientes-nome"));
       clienteTr.appendChild(montaTd(cliente.data, "tabela__corpo-clientes"));
       clienteTr.appendChild(montaTd(cliente.semana, "tabela__corpo-clientes"));
       clienteTr.appendChild(montaTd(cliente.horario, "tabela__corpo-clientes"));

       return clienteTr;

    }
    //monta as nossas tds
    function montaTd (dado, classe){
        var td = document.createElement('td');
        td.textContent = dado;
        td.classList.add(classe);
        return td
    }
    //verifica se os dados inputados são válidos
    function validaCliente(cliente){
        var erro = []
        if(cliente.nome.length == 0){
            erro.push("nome inválido");
        }
        if(cliente.data.length == 0){
            erro.push("data inválida");
        }
        if(cliente.semana.length == 0){
            erro.push("serviço inválido");
        }
        if(cliente.horario.length == 0){
            erro.push("horario inválido");
        }
        return erro;
    }
    //exibe a mensagem de erro, caso os dados inputados sejam inválidos
    function exibeMensagem (erros){
        var ul = document.querySelector("#mensagem-erro");
        ul.innerHTML = ""
        erros.forEach(function(erro){
            var li = document.createElement("li");
            li.textContent = erro;
            ul.appendChild(li);
        })

    }