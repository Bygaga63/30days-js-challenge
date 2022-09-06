const video = document.querySelector('video')

const playButton = document.querySelector('.player__button.toggle')
const rewindButtons = document.querySelectorAll('.player__button[data-skip]')
const playbackRateSlider = document.querySelector('.player__slider[name=playbackRate]')
const volumeSlider = document.querySelector('.player__slider[name=volume]')
const progressBar = document.querySelector('.progress__filled');
const progress = document.querySelector('.progress');

const isVideoPlaying = video => !!(video.currentTime > 0 && !video.paused && !video.ended && video.readyState > 2);


const toggleVideo = () => {
    if (isVideoPlaying(video)) {
        video.pause()
    } else {
        video.play()
    }
}

function updateButton() {
    const icon = this.paused ? '►' : '❚ ❚';
    console.log(icon);
    playButton.textContent = icon;
}


const playbackRateVideo =  (e) => {
    video.playbackRate = parseInt(e.target.value)
}

function changeProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
}

const changeVolume =  (e) => {
    video.volume = parseInt(e.target.value)
}

function skipVideo() {
    const skip = parseInt(this.dataset.skip)
    video.currentTime+= skip
}

function scrub(e) {
    video.currentTime = (e.offsetX / progress.offsetWidth) * video.duration;
}

playButton.addEventListener('click', toggleVideo)
playbackRateSlider.addEventListener('change', playbackRateVideo)
volumeSlider.addEventListener('change', changeVolume)
rewindButtons.forEach(button => button.addEventListener('click', skipVideo))


video.addEventListener('timeupdate', changeProgress);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);

let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);
