<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Coleta os dados do formulário
    $data = json_decode(file_get_contents("php://input"));

    // Verifica se todos os campos estão presentes
    if (empty($data->nome) || empty($data->email) || empty($data->projeto) || empty($data->mensagem)) {
        http_response_code(400); // Resposta de erro de validação
        echo "Por favor, preencha todos os campos.";
        exit;
    }

    // Valida o formato do e-mail
    if (!filter_var($data->email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400); // Resposta de erro de validação
        echo "Por favor, forneça um endereço de e-mail válido.";
        exit;
    }

    // Configurações de e-mail
    $to = "jairo.piekarski@outlook.com"; 
    $subject = "Mensagem de contato do site";
    $message = "Nome: $data->nome\nEmail: $data->email\nProjeto: $data->projeto\nMensagem:\n$data->mensagem";

    // Envie o e-mail
    if (mail($to, $subject, $message)) {
        http_response_code(200); // Resposta de sucesso
        echo "Mensagem enviada com sucesso!";
    } else {
        http_response_code(500); // Resposta de erro do servidor
        echo "Erro ao enviar a mensagem.";
    }
} else {
    http_response_code(403); // Acesso proibido
    echo "Acesso proibido.";
}
?>