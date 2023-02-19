var clientes = document.querySelectorAll(".clientes__");
var tabela = document.querySelector('.tabela');



    tabela.addEventListener("dblclick", function(event){
        var alvoDoevento = event.target;
        var paiDoAlvo = alvoDoevento.parentNode;
        paiDoAlvo.classList.add("remove-tr");
        setTimeout(function(){
            paiDoAlvo.remove();
        }, 500)
    })