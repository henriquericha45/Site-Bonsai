var listaProdutos = [[0, 'Bonsai 1', 'bonsai1.jpeg', false],
                     [1, 'Bonsai 2', 'bonsai2.jpeg', false],
                     [2, 'Bonsai 3', 'bonsai3.jpeg', false], 
                     [3, 'Bonsai 4', 'bonsai4.jpeg', false], 
                     [4, 'Bonsai 5', 'bonsai5.jpeg', false], 
                     [5, 'Bonsai 6', 'bonsai6.jpeg', false]];
                     
var carrinho = [];

window.onload = function(){
    montarCardProdutos();
}

function montarCardProdutos(){

    document.getElementById("divProdutos").innerHTML = "";


    for(var i = 0; i < listaProdutos.length; i++)
    {
        var conteudo = "";
        conteudo += '<div class="div-card" >';
        conteudo += '<div class="div-card-img">';
        conteudo += '<img src="imagens/' + listaProdutos[i][2] + '" />';
        conteudo += '</div>';
        conteudo += '<div class="div-card-descricao">';
        conteudo += listaProdutos[i][1];
        conteudo += '</div>';

        if(listaProdutos[i][3] == false)
        {
            conteudo += '<div class="div-card-comprar"  onclick="comprar(' + listaProdutos[i][0] + ')"  >';
            conteudo += 'Comprar';
            conteudo += '</div>';
        }
        else
        {
            conteudo += '<div class="div-card-comprar div-card-comprado"   >';
            conteudo += 'Comprado';
            conteudo += '</div>';
        }
        


        conteudo += '</div>';
        
        document.getElementById("divProdutos").innerHTML += conteudo;
    }
}

function comprar(id){

    listaProdutos[id][3] = true;
    
    carrinho.push(listaProdutos[id]);

    window.localStorage.setItem("carrinho", JSON.stringify(carrinho));

    montarCardProdutos();

}