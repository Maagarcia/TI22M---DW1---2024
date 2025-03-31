// let timer; // Variável que vai armazenar o setInterval
// let isPlaying = false; // Variável para saber se o cronômetro está rodando
// let seconds = 0; // Contador de segundos


// function switche() {
//     var icone = document.getElementById("icone");

//     // Corrigido: classList e contains com a capitalização correta
//     if (icone.classList.contains("bi-play-circle-fill")) {
//         icone.classList.remove("bi-play-circle-fill");
//         icone.classList.add("bi-pause-circle-fill");
//         startTimer(); // Inicia o cronômetro
//         tocarAudio()
//     } else {
//         icone.classList.remove("bi-pause-circle-fill");
//         icone.classList.add("bi-play-circle-fill");
//         pauseTimer(); // Pausa o cronômetro
//         pausarAudio()
//     }

// }

// function startTimer(){
//     if(!isPlaying){
//         isPlaying = true
//         timer = setInterval(() =>{
//             seconds++;
//             document.getElementById("timer").textContent = formatTime(seconds);
//         }, 1000); // Atualiza a cada 1 segundo
//     }
// }

// function pauseTimer(){
//     isPlaying = false;
//     clearInterval(timer);
// }


// function formatTime(seconds) {
//     const hrs = Math.floor(seconds / 3600);
//     const mins = Math.floor((seconds % 3600) / 60);
//     const secs = seconds % 60;
//     return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
// }

// function tocarAudio(){
//     document.getElementById("musicateste").play();
// }

// function pausarAudio(){
//     document.getElementById("musicateste").pause();
// }

// function alterarVolume(valor) {
//     document.getElementById("musicateste").volume = valor;
// }

let audio = document.getElementById('meuAudio');
let isPlaying = false;
let intervalID;
let currentAudio = null

// Função para alternar o ícone e o estado do áudio/cronômetro
function switche() {
    var icone = document.getElementById("icone");
    
    // currentAudio = true
    if (currentAudio){

        if (isPlaying) { 
            // Se o áudio estiver tocando, pausa
            // currentAudio.currentTime = 0;
            icone.classList.remove("bi-pause-circle-fill");
            icone.classList.add("bi-play-circle-fill");
            pauseAudio();
        } else {
            // Se o áudio estiver pausado, toca
            // currentAudio.play(); 
            icone.classList.remove("bi-play-circle-fill");
            icone.classList.add("bi-pause-circle-fill");
            playAudio();
        }


    }
}

// Função para tocar o áudio e iniciar o cronômetro
function playAudio() {
    isPlaying = true;
    musicateste.play();  // Toca o áudio
    intervalID = setInterval(updateTimer, 10);  // Atualiza o cronômetro a cada segundo
}

// Função para pausar o áudio e o cronômetro
function pauseAudio() {
    isPlaying = false;
    musicateste.pause();  // Pausa o áudio
    clearInterval(intervalID);  // Para o cronômetro
}

// Função para atualizar o cronômetro com o tempo do áudio
function updateTimer() {

    if (currentAudio){

        let currentTime = musicateste.currentTime;  // Pega o tempo atual do áudio em segundos
        let duration = musicateste.duration;  // Pega a duração total do áudio em segundos
        document.getElementById("timer").textContent = `${formatTime(currentTime)} / ${formatTime(duration)}`;

    }
}

function alterarVolume(valor) {
         document.getElementById("musicateste").volume = valor;
}



// Função para formatar o tempo no formato HH:MM:SS
function formatTime(seconds) {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = Math.floor(seconds % 60);
    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

function setMusicPlayer(divElement){
    // currentAudio = true
    if (currentAudio) {
        currentAudio.removeAttribute('id');
        currentAudio.pause();
        
        }

    let audioElement = divElement.querySelector('audio');
    audioElement.id = 'musicateste';  // Atribui o ID "musicateste"
    currentAudio = audioElement;

    
    
    currentAudio.play();
    
    
    currentAudio.currentTime = 0;
    

    if (icone.classList.contains('bi-play-circle-fill')) {
        icone.classList.remove('bi-play-circle-fill');
        icone.classList.add('bi-pause-circle-fill');
    }


    if (icone.contains('bi-pause-circle-fill')) {
        icone.remove('bi-pause-circle-fill');
        icone.add('bi-play-circle-fill');
    }
}

