var listaUsuarios = [];

function cadastrar() {
    var nome = document.getElementById("nome").value;
    var sobrenome = document.getElementById("sobrenome").value;
    var email = document.getElementById("email").value;
    var idUsuario = document.getElementById("idUsuario").value;
    var senha = document.getElementById("senha").value;
    var confirmarSenha = document.getElementById("confirmarSenha").value;

    var usuario = [];
    
    if (nome != "" && sobrenome != "" && email != "" && idUsuario != "" && senha != "" && confirmarSenha != "") {
        if (confirmarSenha == senha) {
            usuario.push(nome);
            usuario.push(sobrenome);
            usuario.push(email);
            usuario.push(idUsuario);
            usuario.push(senha);
        
            listaUsuarios.push(usuario);
    
            window.localStorage.setItem("usuario", JSON.stringify(listaUsuarios));
    
            alert("Cadastro realizado com sucesso!");
        } else {
            alert("Senhas diferentes!");
        }
    } else {
        alert("Todos os campos devem ser preenchidos!");
            console.log("Algum campo está vazio!");
    }
    

}