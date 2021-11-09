var listaUsuarios = [];
var emails = [];
var idUsuarios = [];

function cadastrar() {
    var emailExiste = false;
    var idUsuarioExiste = false;

    var nome = document.getElementById("nome").value;
    var sobrenome = document.getElementById("sobrenome").value;
    var email = document.getElementById("email").value;
    var idUsuario = document.getElementById("idUsuario").value;
    var senha = document.getElementById("senha").value;
    var confirmarSenha = document.getElementById("confirmarSenha").value;

    if (localStorage.length > 0) {
        var myItem = JSON.parse(localStorage.getItem("usuario"));
        listaUsuarios = myItem;
        console.log(myItem);
        console.log(myItem.length);

        console.log(myItem[0][2]);

        for (var i=0; i<myItem.length; i++) {
            if(email==myItem[i][2]){
                emailExiste = true;
            }
            if(idUsuario==myItem[i][3]){
                idUsuarioExiste = true;
            }
        }

        /*
        for (var i=0; i<myItem.length; i++) {
            emails.push(myItem[i][2]);
            idUsuarios.push(myItem[i][3]);
        }
        
        for (var i=0; i<=emails.length; i++) {
            if(email==emails[i]){
                emailExiste = true;
            }
        }
        */
    }
    if (!emailExiste) {
        if (!idUsuarioExiste) {

            var usuario = [];

            if (nome != "" && sobrenome != "" && email != "" && idUsuario != "" && senha != "" && confirmarSenha != "") {
                if (confirmarSenha == senha) {
                    usuario.push(nome);
                    usuario.push(sobrenome);
                    usuario.push(email);
                    usuario.push(idUsuario);
                    usuario.push(senha);
                
                    listaUsuarios.push(usuario);

                    console.log("ListaUsuarios: "+listaUsuarios);
            
                    window.localStorage.setItem("usuario", JSON.stringify(listaUsuarios));
            
                    alert("Cadastro realizado com sucesso!");
                } else {
                    alert("Senhas diferentes!");
                }
            } else {
                alert("Todos os campos devem ser preenchidos!");
            }

        } else {
            alert("Usuario ja cadastrado!");
        }
    } else {
        alert("Email ja cadastrado!");
    }
}

function lerLocalStorage() {
    var myItem = JSON.parse(localStorage.getItem("usuario"));

    console.log(myItem);

    console.log(myItem.length);
/*
     //[quantidadeCadastro][itemDaLista]
    var somente = myItem[1][3];

    console.log("Somente: " + somente);
*/
}