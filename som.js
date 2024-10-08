// Ativar o som do vídeo
document.getElementById('unmute-btn').addEventListener('click', function() {
    let video = document.getElementById('chico-video');
    let currentSrc = video.src;

    // Remove o mute e recarrega o vídeo para ativar o som
    video.src = currentSrc.replace("mute=1", "mute=0");
});
