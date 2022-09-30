import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(oncurrentTime, 1000));

function oncurrentTime(data) {
    localStorage.setItem('videoplayer-current-time', data.seconds);
}

const lastTime = JSON.parse(localStorage.getItem('videoplayer-current-time'));

player
    .setCurrentTime(lastTime)
    .then(function (seconds) {
        // seconds = the actual time that the player seeked to
    })
    .catch(function (error) {
        switch (error.name) {
            case 'RangeError':
                // the time was less than 0 or greater than the video’s duration
                break;

            default:
                // some other error occurred
                break;
        }
    });
