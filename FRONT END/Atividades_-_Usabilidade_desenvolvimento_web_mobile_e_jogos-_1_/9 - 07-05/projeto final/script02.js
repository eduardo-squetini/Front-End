function VerificarHorario() {
    var hora = parseInt(document.getElementById('horario').value); // Convertendo para número
    var saudacao = document.getElementById('saudacao');
    var imgLampada = document.getElementById('img_lampada');

    if (hora >= 6 && hora < 12) {
        // É dia
        imgLampada.src = 'apagada.jpg'; // Acende a luz
        saudacao.textContent = 'Bom dia!'; // Envia saudação de bom dia
    } else if (hora >= 12 && hora < 18) {
        // É tarde
        imgLampada.src = 'apagada.jpg'; // Apaga a luz
        saudacao.textContent = 'Boa tarde!'; // Envia saudação de boa tarde
    } else {
        // É noite
        imgLampada.src = 'acesa.jpg'; // Acende a luz
        saudacao.textContent = 'Boa noite!'; // Envia saudação de boa noite
    }
}