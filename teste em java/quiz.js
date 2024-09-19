function checkAnswers() {
    const riddleAnswer1 = "a letra n"; // Defina a resposta correta aqui
    const userAnswer1 = document.getElementById("riddle1").value.trim().toLowerCase();

    const resultElement = document.getElementById("resultado");

    // Adiciona um delay de 1 segundo (1000 milissegundos) antes de exibir a resposta
    setTimeout(function() {
        if (userAnswer1 === riddleAnswer1) {
            resultElement.textContent = "Correto! Você desvendou o enigma.";
            resultElement.style.color = "green";
        } else {
            resultElement.textContent = "Incorreto. Tente novamente.";
            resultElement.style.color = "red";
        }
    }, 1000);
}



