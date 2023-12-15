/*
Autor: Mário de Araújo Carvalho
Descrição: Sistema de catálogo de produtos
Data: 12/13/2023
E-mail: mario.carvalho@ufms.br
*/


function carregar_detalhes() {
    // Pegar o id do produto que está na URL id

    let url = window.location.href;
    let parametrosDaUrl = new URL(url);

    let id = parametrosDaUrl.searchParams.get("id");
    console.log("Buscando o produto com id: " + id);

    fetch(`https://dummyjson.com/product/${id}`)
        .then((resposta) => {
            // 1 - then: tenta fazer a requisição
            let dadosJSON = resposta.json();
            return dadosJSON;
        })
        .then((dadosJSON) => {
            // 2 - then: retorna a resposta
            let produto = dadosJSON;

            console.log(produto);

            let id = document.getElementById("id");
            id.innerHTML = `ID: ${produto.id}`;

            let title = document.getElementById("title");
            title.innerHTML = `Título: ${produto.title}`;

            let description = document.getElementById("description");
            description.innerHTML = `Descrição: ${produto.description}`;

            let price = document.getElementById("price");
            price.innerHTML = `Preço: ${produto.price}`;

            let discountPercentage = document.getElementById("discountPercentage");
            discountPercentage.innerHTML = `Desconto: ${produto.discountPercentage}`;

            let rating = document.getElementById("rating");
            rating.innerHTML = `Avaliação: ${produto.rating}`;

            let stock = document.getElementById("stock");
            stock.innerHTML = `Estoque: ${produto.stock}`;

            let brand = document.getElementById("brand");
            brand.innerHTML = `Marca: ${produto.brand}`;

            let category = document.getElementById("category");
            category.innerHTML = `Categoria: ${produto.category}`;

            let thumbnail = document.getElementById("thumbnail");
            thumbnail.src = produto.thumbnail;

            let images = produto.images;

            for (let i = 0; i < images.length; i++) {
                let image = document.createElement("img");
                image.src = images[i];

                // Adicinar no body
                document.body.appendChild(image);
            }

    
        });
}

function carregar_produtos() {
  fetch("https://dummyjson.com/products")
    .then((resposta) => {
      // 1 - then: tenta fazer a requisição
      let dadosJSON = resposta.json();
      return dadosJSON;
    })
    .then((dadosJSON) => {
      // 2 - then: retorna a resposta
      // console.log(dadosJSON);
      let produtos = dadosJSON.products;

      // Criar uma tabela com os dados dos produtos
      let tabela = document.createElement("table");

      let cabecalho = ["Nome", "Preço", "Descrição", "Imagem", "Ações"];

      // Criar o cabeçalho da tabela
      let trCabecalho = document.createElement("tr");
      for (let i = 0; i < cabecalho.length; i++) {
        let th = document.createElement("th");
        th.innerHTML = cabecalho[i];
        trCabecalho.appendChild(th);
      }
      tabela.appendChild(trCabecalho);

      // Criar o corpo da tabela
      for (let i = 0; i < produtos.length; i++) {
        let tr = document.createElement("tr");

        let tdNome = document.createElement("td");
        tdNome.innerHTML = produtos[i].title;

        let tdPreco = document.createElement("td");
        tdPreco.innerHTML = produtos[i].price;

        let tdDescricao = document.createElement("td");
        tdDescricao.innerHTML = produtos[i].description;

        let tdImagem = document.createElement("td");
        let img = document.createElement("img");
        img.src = produtos[i].thumbnail;
        // Alterar o tamanho da imagem
        img.style.width = "100px";
        img.style.height = "100px";
        tdImagem.appendChild(img);

        tr.appendChild(tdNome);
        tr.appendChild(tdPreco);
        tr.appendChild(tdDescricao);
        tr.appendChild(tdImagem);

        let id = produtos[i].id;
        let tag_a = document.createElement("a");
        tag_a.href = `detalhes.html?id=${id}`;
        tag_a.innerHTML = "Ver mais";
        tr.appendChild(tag_a);

        tabela.appendChild(tr);
      }

      document.body.appendChild(tabela);
    });
}
