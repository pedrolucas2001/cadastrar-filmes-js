const login = document.querySelector("#inputUsuario");
const senha = document.querySelector("#inputSenha");
const btnEntrar = document.querySelector("#btnEntrar");

btnEntrar.addEventListener("click",()=>{
    if(login.value === "" ){
        alert("Digite o nome de usuário:")
    } else if(senha.value === ""){
        alert("Digite uma senha")
    } else{
        window.location.href = 'filme.html'
    }
})


