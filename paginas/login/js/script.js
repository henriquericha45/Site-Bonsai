var listaUsuarios = [];

function cadastrar() {
    var nome = document.getElementById("nome").value;
    var sobrenome = document.getElementById("sobrenome").value;
    var email = document.getElementById("email").value;
    var matricula = document.getElementById("matricula").value;
    var usuario = document.getElementById("usuario").value;
    var senha = document.getElementById("senha").value;
    var confirmarSenha = document.getElementById("confirmarSenha").value;

    var usuario = [];

    if (nome != "" && sobrenome != "" && email != ""  && matricula != "" && usuario != "" && senha != "" && confirmarSenha == senha) {
        usuario.push(nome);
        usuario.push(sobrenome);
        usuario.push(email);
        usuario.push(matricula);
        usuario.push(usuario);
        usuario.push(senha);
    
        listaUsuarios.push(usuario);
    }

    window.localStorage.setItem("usuario", JSON.stringify(listaUsuarios));

}