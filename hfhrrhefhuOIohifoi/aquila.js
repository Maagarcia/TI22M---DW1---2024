function switche() {
    var icone = document.getElementById("icone");

    // Corrigido: classList e contains com a capitalização correta
    if (icone.classList.contains("bi-play-circle-fill")) {
        icone.classList.remove("bi-play-circle-fill");
        icone.classList.add("bi-pause-circle-fill");
    } else {
        icone.classList.remove("bi-pause-circle-fill");
        icone.classList.add("bi-play-circle-fill");
    }

}