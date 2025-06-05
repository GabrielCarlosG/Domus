document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('formCadastro');
  const mensagem = document.getElementById('mensagem');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;

    mensagem.innerHTML = `<p class="text-success">Usuário <strong>${nome}</strong> cadastrado com sucesso!</p>`;
    mensagem.classList.add('fade-in');

    // Reset do formulário
    form.reset();
  });
});
