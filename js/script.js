let chatAberto = false;

document.addEventListener('DOMContentLoaded', function () {
    const ajudaBox = document.getElementById('ajudaBox');
    const chatBox = document.getElementById('chatBox');
    const astronautaMaior = document.querySelector('.ajuda-box img');

    ajudaBox.addEventListener('click', function (event) {
        event.stopPropagation(); // Evita que o evento de fechar o chat seja propagado para o ajudaBox
        toggleChat();
    });

    astronautaMaior.addEventListener('click', function (event) {
        event.stopPropagation(); // Evita que o evento de fechar o chat seja propagado para o astronautaMaior
        toggleChat(); // Chama a função para abrir ou fechar o chat ao clicar no astronauta maior
    });

    chatBox.addEventListener('click', function (event) {
        event.stopPropagation(); // Evita que o evento de fechar o chat seja propagado para o chatBox
    });

    document.addEventListener('click', function () {
        if (chatAberto) {
            chatBox.style.display = 'none';
            chatAberto = false;
            limparConversa(); // Limpa a conversa ao fechar o chat
        }
    });
});

function toggleChat() {
    const chatBox = document.getElementById('chatBox');

    if (!chatAberto) {
        chatBox.style.display = 'block';
        chatAberto = true;
        iniciarConversa(); // Inicia uma nova conversa ao abrir o chat
    } else {
        chatBox.style.display = 'none';
        chatAberto = false;
        limparConversa(); // Limpa a conversa ao fechar o chat
    }
}

function iniciarConversa() {
    limparConversa(); // Limpa a conversa ao iniciar uma nova conversa
    adicionarMensagemAstronauta('Olá! Prazer eu me chamo Astroled e estou aqui para te ajudar');
    setTimeout(function () {
        mostrarOpcoesRespostaInicial();
    }, 1500);
}

function mostrarOpcoesRespostaInicial() {
    adicionarMensagemAstronauta(`
        <button onclick="selecionarOpcao('cursos')">Acesso aos cursos</button>
        <button onclick="selecionarOpcao('eventos')">Eventos</button>
        <button onclick="selecionarOpcao('atendente')">Falar com atendente</button>
    `);
    ajustarScroll();
}

function ajustarScroll() {
    const conversa = document.getElementById('conversa');
    conversa.scrollTop = conversa.scrollHeight; // Mantém o scroll no final da conversa
}

function selecionarOpcao(opcao) {
    limparConversa(); // Limpa a conversa ao selecionar uma opção
    switch (opcao) {
        case 'cursos':
            adicionarMensagemAstronauta('Aqui está o link para o redirecionamento: <a href="https://www.exemplo.com/cursos" target="_blank">https://www.exemplo.com/cursos</a>');
            setTimeout(function () {
                mostrarOpcoesPosLink();
            }, 1500);
            break;
        case 'eventos':
            adicionarMensagemAstronauta('Aqui está o link para o redirecionamento: <a href="https://www.exemplo.com/eventos" target="_blank">https://www.exemplo.com/eventos</a>');
            setTimeout(function () {
                mostrarOpcoesPosLink();
            }, 1500);
            break;
        case 'atendente':
            adicionarMensagemAstronauta('Perfeito! Vou te direcionar para o atendente.');
            setTimeout(function () {
                mostrarOpcoesPosLink();
            }, 1500);
            break;
        default:
            break;
    }
}

function mostrarOpcoesPosLink() {
    adicionarMensagemAstronauta('Te ajudo em algo mais?');
    adicionarMensagemAstronauta(`
        <button onclick="responder('sim')">Sim</button>
        <button onclick="responder('nao')">Não</button>
    `);
    ajustarScroll();
}

function responder(resposta) {
    switch (resposta) {
        case 'sim':
            mostrarOpcoesRespostaInicial();
            break;
        case 'nao':
            adicionarMensagemAstronauta('Perfeito! Até a próxima.');
            break;
        default:
            break;
    }
}

function limparConversa() {
    const conversa = document.getElementById('conversa');
    conversa.innerHTML = ''; // Remove todas as mensagens da conversa
}

function adicionarMensagemAstronauta(texto) {
    const conversa = document.getElementById('conversa');
    const novaMensagem = criarMensagem('mensagem-astronauta', texto);
    conversa.appendChild(novaMensagem);
}

function criarMensagem(classe, conteudo) {
    const mensagem = document.createElement('div');
    mensagem.classList.add('mensagem', classe);
    mensagem.innerHTML = `<img src="../img/ajuda.png" alt="img-astronauta-mini"><p>${conteudo}</p>`;
    return mensagem;
}


  // script.js
  const prevButton = document.querySelector('.prev-button');
  const nextButton = document.querySelector('.next-button');
  const carousel = document.querySelector('.carousel');
  const cards = document.querySelectorAll('.card');
  
  let currentIndex = 0;
  
  function updateCarousel() {
    const cardWidth = cards[0].offsetWidth;
    const offset = -currentIndex * cardWidth;
    carousel.style.transform = `translateX(${offset}px)`;
  }
  
  function showNextCard() {
    if (currentIndex < cards.length - 4) {
      currentIndex++;
    } else {
      currentIndex = 0; // Reinicia ao chegar no final
    }
    updateCarousel();
  }
  
  function showPrevCard() {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = cards.length - 4; // Vai para o final ao chegar no início
    }
    updateCarousel();
  }
  
  prevButton.addEventListener('click', showPrevCard);
  nextButton.addEventListener('click', showNextCard);
  
  updateCarousel(); // Atualiza o carrossel na inicialização