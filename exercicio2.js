function verifyEnablement(){
   /*chamando a funçao*/
    let selectValue = document.querySelector("select").value

    if(selectValue == "disabled"){
     /*pegando o meu input (utilizando o metodo name e colocando disabled como true)*/
        document.querySelector("input[name='some-text']").disabled = true
       /*pegando o elemento #message que esta no HTML e manipulanod aqui no JS*/
        let pElement = document.querySelector("#message")
        /*pegando a minha variavel pElement e colocanod um texto*/
        pElement.innerText = "DESABILITADO"

        pElement.style.backgroundColor = "red"
        pElement.style.color = "white"

    } else{
        document.querySelector("input[name='some-text'").disabled = false
        let pElement = document.querySelector("#message")
        pElement.innerText = "HABILITADO"
        pElement.style.backgroundColor = "green"
    }


}