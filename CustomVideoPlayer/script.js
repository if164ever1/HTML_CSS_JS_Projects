const video = document.getElementById('video');
const play = document.getElementById('play');
const start = document.getElementById('start');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');


function toggleVideoStatus(){
    return true;
}

function updatePlayIcon(){}

function updateProgress(){}

function stopVideo(){}

function setVideoProgress(){}

//Event listener
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('click', updateProgress);

play.addEventListener('click', toggleVideoStatus);
stop.addEventListener('click', stopVideo);
progress.addEventListener('click', setVideoProgress);
