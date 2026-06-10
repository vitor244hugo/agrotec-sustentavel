function atualizarSensores() {

    let temperatura = (Math.random() * 15 + 20).toFixed(1);
    let umidade = Math.floor(Math.random() * 40 + 40);

    let qualidadeAr = [
        "Excelente ✅",
        "Boa 👍",
        "Moderada ⚠️",
        "Ruim ❌"
    ];

    let ar =
        qualidadeAr[Math.floor(Math.random() * qualidadeAr.length)];

    document.getElementById("temperatura").textContent =
        temperatura + " °C";

    document.getElementById("umidade").textContent =
        umidade + " %";

    document.getElementById("ar").textContent =
        ar;
}

// Atualização automática ao abrir a página
atualizarSensores();

// Atualiza a cada 5 segundos
setInterval(atualizarSensores, 5000);
