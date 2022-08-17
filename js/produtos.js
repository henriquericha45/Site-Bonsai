var maisVendidos = [[0, 'Jabuticaba Sabará', '20', 'bonsai1.jpeg', false],
                    [1, 'Pyracantha', '20', 'bonsai2.jpeg', false],
                    [2, 'Bougainville', '20', 'bonsai3.jpeg', false]];

var listaProdutos = [[0, 'Jabuticaba Sabará', '20', 'bonsai1.jpeg', false],
                     [1, 'Pyracantha', '20', 'bonsai2.jpeg', false],
                     [2, 'Bougainville', '20', 'bonsai3.jpeg', false], 
                     [3, 'Caliandra', '20', 'bonsai4.jpeg', false], 
                     [4, 'Jabuticaba Híbrida', '20', 'bonsai5.jpeg', false], 
                     [5, 'Ligustro', '20', 'bonsai6.jpeg', false]];
                     
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
        conteudo += '<img src="imagens/' + listaProdutos[i][3] + '" />';
        conteudo += '</div>';
        conteudo += '<div class="div-card-descricao">';
        conteudo += listaProdutos[i][1];
        conteudo += '</div>';
        conteudo += '<div class="div-card-preco">';
        conteudo += 'R$ ';
        conteudo += listaProdutos[i][2];
        conteudo += '</div>';

        if(listaProdutos[i][4] == false)
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

    listaProdutos[id][4] = true;
    
    carrinho.push(listaProdutos[id]);

    window.localStorage.setItem("carrinho", JSON.stringify(carrinho));

    montarCardProdutos();

}