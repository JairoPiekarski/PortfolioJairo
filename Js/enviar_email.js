document.getElementById("form-send").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita o envio padrão do formulário.

    // Coleta os dados do formulário
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var projeto = document.getElementById("projeto").value;
    var mensagem = document.getElementById("mensagem").value;

    // Função para validar o formato do e-mail usando uma expressão regular
    function validarEmail(email) {
        var regex = /\S+@\S+\.\S+/;
        return regex.test(email);
    }

    // Valide os campos
    if (!nome || !email || !projeto || !mensagem) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // Valide o formato do e-mail
    if (!validarEmail(email)) {
        alert("Por favor, forneça um endereço de e-mail válido.");
        return;
    }

    // Dados a serem enviados ao servidor
    var dados = {
        nome: nome,
        email: email,
        projeto: projeto,
        mensagem: mensagem,
    };

    // Envie os dados ao servidor usando AJAX (por exemplo, usando a biblioteca fetch)
    fetch("processar_formulario.php", {
        method: "POST",
        body: JSON.stringify(dados),
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then(function (response) {
            if (response.ok) {
                // Redirecione o usuário de volta ao seu site ou exiba uma mensagem de confirmação
                alert("Obrigado por entrar em contato!");
            } else {
                // Lide com erros, se necessário
                console.error("Erro ao enviar o formulário.");
            }
        })
        .catch(function (error) {
            console.error("Erro ao enviar o formulário: " + error);
        });
});
