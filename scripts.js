/*Função de ativação modo escuro*/
document.querySelector('#mode').addEventListener("click", (e) => {
    document.querySelector('body').classList.toggle('dark')
})


/*Função de confirmação de contato*/
function validarContato(){
    var nome = document.forms["formContato"]["name"].value

    if (nome == ""){
        alert("Digite seu nome!")
        return false
    }else{
        alert("Mensagem enviada com sucesso. Retornarei assim que possível! Obrigada, " + nome + ".")
    }

}
