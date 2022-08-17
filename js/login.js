var idUsuarioExiste = false;
var senhaCerta = false;

function lerLocalStorage() {
    var myItem = JSON.parse(localStorage.getItem("usuario"));

    console.log(myItem);
}

function logar() {
    var usuarioLogado = [];

    var logado = [];

    var localIDNumber;

    var myItem = JSON.parse(localStorage.getItem("usuario"));

    var idUsuario = document.getElementById("idUsuario").value;
    var senha = document.getElementById("senha").value;

    for (var i=0; i<myItem.length; i++) {
        if(idUsuario==myItem[i][3]){
            idUsuarioExiste = true;
            localIDNumber = i;
        }
    }

    if (idUsuarioExiste) {
        if(senha==myItem[localIDNumber][4]){
            logado.push(idUsuario);
            logado.push(true);

            usuarioLogado.push(logado);

            window.localStorage.setItem("logadoAtual", JSON.stringify(usuarioLogado));
        }
    }







}