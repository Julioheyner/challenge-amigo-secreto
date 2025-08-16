//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// Variável para armazenar os nomes dos amigos
let amigos = [];

// Elementos do DOM
const amigoInput = document.getElementById('amigo');
const listaAmigos = document.getElementById('listaAmigos');
const resultado = document.getElementById('resultado');

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    const nome = amigoInput.value.trim();
    
    // Validar entrada
    if (nome === '') {
        alert('Por favor, insira um nome.');
        return;
    }
    
    // Verificar se o nome já existe (case insensitive)
    const nomeJaExiste = amigos.some(
        amigo => amigo.toLowerCase() === nome.toLowerCase()
    );
    
    if (nomeJaExiste) {
        alert('Este nome já foi adicionado. Por favor, insira um nome diferente.');
        return;
    }
    
    // Adicionar ao array
    amigos.push(nome);
    
    // Limpar campo de entrada
    amigoInput.value = '';
    
    // Atualizar lista visual
    atualizarListaAmigos();
}

// Função para atualizar a lista visual de amigos
function atualizarListaAmigos() {
    // Limpar lista existente
    listaAmigos.innerHTML = '';
    
    // Adicionar cada amigo como um item de lista
    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// Função para sortear um amigo
function sortearAmigo() {
    // Verificar se há amigos para sortear
    if (amigos.length === 0) {
        alert('Adicione pelo menos um amigo antes de sortear.');
        return;
    }
    
    // Limpar resultado anterior
    resultado.innerHTML = '';
    
    // Gerar índice aleatório
    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    
    // Obter nome sorteado
    const sorteado = amigos[indiceSorteado];
    
    // Exibir resultado
    const li = document.createElement('li');
    li.innerHTML = `O amigo secreto sorteado é: <strong>${sorteado}</strong>`;
    resultado.appendChild(li);
}

// Adicionar evento de tecla Enter no input
amigoInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        adicionarAmigo();
    }
});