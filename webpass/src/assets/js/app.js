// --- 1. FUNÇÃO PARA SALVAR (Roda no anunciar.html) ---
function salvarDados() {
    // Criamos um objeto com os valores dos campos
    const novoShow = {
        nome: document.getElementById('nome-show').value,
        data: document.getElementById('data-show').value,
        hora: document.getElementById('hora-show').value,
        local: document.getElementById('local-show').value,
        idade: document.getElementById('idade-minima').value,
        preco: document.getElementById('preco-show').value
    };

    // Pegamos a lista que já existe ou criamos uma nova vazia
    let lista = JSON.parse(localStorage.getItem('listaShows')) || [];
    
    // Adicionamos o novo show na lista
    lista.push(novoShow);

    // Guardamos a lista de volta na memória
    localStorage.setItem('listaShows', JSON.stringify(lista));

    // Avisamos e voltamos para o início
    alert("Show cadastrado!");
    window.location.href = "../index.html";
}

// --- 2. MOSTRAR NA VITRINE (Roda no index.html) ---
const vitrine = document.getElementById('vitrineeven');

if (vitrine) {
    // Buscamos os shows na memória
    const dados = localStorage.getItem('listaShows');

    if (dados) {
        const lista = JSON.parse(dados);
        
        // Limpamos o texto de "vazio" e a div
        vitrine.innerHTML = '';

        // Para cada show na lista, criamos um card novo
        lista.forEach(show => {
            vitrine.innerHTML += `
                <div class="card-show">
                    <h3>${show.nome}</h3>
                    <p>Data: ${show.data} às ${show.hora}</p>
                    <p>Local: ${show.local}</p>
                    <p>Idade: ${show.idade} anos</p>
                    <p class="preco">R$ ${show.preco}</p>
                    <button class="btn-comprar">Comprar Agora</button>
                </div>
            `;
        });
    }
}


