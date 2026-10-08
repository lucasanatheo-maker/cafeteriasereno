

function aumentarQuantidade(index) {

    let carrinho =
        JSON.parse(localStorage.getItem("carrinho")) || [];

    carrinho[index].quantidade++;

    localStorage.setItem(
        "carrinho",
        JSON.stringify(carrinho)
    );

    exibirCarrinho();
    atualizarContador();
}




function diminuirQuantidade(index) {

    let carrinho =
        JSON.parse(localStorage.getItem("carrinho")) || [];


    if (carrinho[index].quantidade > 1) {

        carrinho[index].quantidade--;

    } else {

        carrinho.splice(index, 1);

    }


    localStorage.setItem(
        "carrinho",
        JSON.stringify(carrinho)
    );

    exibirCarrinho();
    atualizarContador();
}




function atualizarTotal() {

    const totalPedido =
        document.getElementById("totalPedido");

    if (!totalPedido) {
        return;
    }


    const carrinho =
        JSON.parse(localStorage.getItem("carrinho")) || [];


    const total =
        carrinho.reduce(

            (soma, produto) =>
                soma +
                (produto.preco * produto.quantidade),

            0

        );


    totalPedido.textContent =
        "R$ " + total.toFixed(2);
}




function atualizarContador() {

    const contador =
        document.getElementById("contadorCarrinho");

    if (!contador) {
        return;
    }


    const carrinho =
        JSON.parse(localStorage.getItem("carrinho")) || [];


    const quantidade =
        carrinho.reduce(

            (soma, produto) =>
                soma + produto.quantidade,

            0

        );


    contador.textContent = quantidade;
}


function removerProduto(index) {

    let carrinho =
        JSON.parse(localStorage.getItem("carrinho")) || [];


    const nomeProduto =
        carrinho[index].nome;


    carrinho.splice(index, 1);


    localStorage.setItem(
        "carrinho",
        JSON.stringify(carrinho)
    );


    exibirCarrinho();
    atualizarContador();


    alert(
        "✓ " + nomeProduto +
        " foi removido do carrinho!"
    );
}


function limparCarrinho() {

    const confirmar =
        confirm(
            "Tem certeza que deseja limpar o carrinho?"
        );


    if (!confirmar) {
        return;
    }


    localStorage.removeItem("carrinho");


    exibirCarrinho();
    atualizarContador();


    alert("✓ Carrinho limpo!");
}




function finalizarPedido() {

    const carrinho =
        JSON.parse(localStorage.getItem("carrinho")) || [];


    if (carrinho.length === 0) {

        alert(
            "❌ Seu carrinho está vazio!"
        );

        return;
    }


    const total =
        carrinho.reduce(

            (soma, produto) =>
                soma +
                (produto.preco * produto.quantidade),

            0

        );


    alert(
        "✅ Pedido realizado com sucesso!\n\n" +
        "Total: R$ " +
        total.toFixed(2) +
        "\n\nObrigado por escolher o Café Sereno! ☕"
    );


    localStorage.removeItem("carrinho");


    exibirCarrinho();
    atualizarContador();


   

    setTimeout(function () {

        window.location.href =
            "../inicio/inicio.html";

    }, 1500);
}



document.addEventListener(
    "DOMContentLoaded",
    function () {

        atualizarContador();

        exibirCarrinho();

    }
);

