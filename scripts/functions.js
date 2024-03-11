function imprimirMsg(texto){
    alert('Você clickou no botão ' + texto);
}

function login(){

    const emailCorreto = "aninha@gmail.com"
    const senhaCorreta = "senha"

    if(email == emailCorreto){

        if(senha == senhaCorreta){
            alert("E-mail e senha corretos")
        } else {
            alert('Senha incorrreta')
        }

    } else {
        alert('E-mail incorreto')
    }

/*  
    if(email == emailCorreto && senha == senhaCorreta){
        alert('E-mail ou senha corretos')
    } else{
        alert('E-mail ou senha incorretos')
    }

    var email = document.getElementById('email').value;
    var senha = document.getElementById('pwd').value;
   
  
    alert("E-mail digitado" + email);
    alert("Senha digitado" + senha);
*/
}
