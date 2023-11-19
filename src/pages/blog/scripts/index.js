function favorito() {
  var botoes = document.querySelectorAll("#botao");
  
  botoes.forEach(function(botao) {
    var favoritado = false;

    botao.addEventListener("click", function () {
      if (favoritado) {
        botao.textContent = 'Favoritar';
        botao.classList.remove('favoritado');
        favoritado = false;
      } else {
        botao.textContent = 'Favoritado';
        botao.classList.add('favoritado');
        favoritado = true;
      }
    });
  });
}

favorito();


function changeHome() {
  window.location.href = "/index.html";
}

function changeDicas() {
  window.location.href = "/src/pages/dicas/structures/dicas.html";
}

function changeBlog() {
  window.location.href = window.location.href;
}