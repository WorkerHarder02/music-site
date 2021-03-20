let btn = document.querySelector('.button');
let counter = document.querySelector('.counter');
let current = document.querySelector('.current');
let span = document.querySelector('.span')
let now = document.querySelector('.now');
let circle = document.querySelector('.circle');
circle.style.display = "none";
let audArr = [];
let images = [];
let currentImage = 0;

images.push('empty');
images.push(' gattsu.jpg');
images.push('hello kids.jpg')
images.push(' nightmare.jpg')
images.push(' nightmare.jpg')
images.push(' roki vulovic.jpg')
images.push(' asap ferg.jpg')
images.push(' крузак 200.jpg')
images.push(' earth.jpg')
images.push(' salvadorek.jpg')
images.push(' salvadorek.jpg')
images.push(' nasheed.jpg')
images.push(' bleach.jpg')
images.push(' bleach.jpg')
images.push(' bleach.jpg')

audArr.push('test.mp3');
audArr.push(' Gattsu');
audArr.push('hello kids');
audArr.push(' Nightmare');
audArr.push(' Nostalgia');
audArr.push('Zbog tebe')
audArr.push('A$AP Ferg feat. Tyga - Dennis Rodman')
audArr.push('BODIEV - Крузак 200')
audArr.push('Hirasawa Susumu - Earth (OST Berserk)')
audArr.push('Salvador - Kuflowe Mocne')
audArr.push('Salvador, młodyzane - W Plecaku Mam Bombe')
audArr.push('Xadidja Magomedova - Ramadan Nasheed')
audArr.push('Блич - 9 опенинг')
audArr.push('Блич - Блич 5 опенинг (фулл) (оригинал)')
audArr.push('Блич опенинг 14 - ●•BLUE•●')










span.textContent = audArr.length;
let array = document.querySelector('.array');


array.textContent = "Все треки в вашей библиотеке: " + audArr;
let currentTrack = 0;






let aud = new Audio('test.mp3');









let leftArrow = document.querySelector('.left_arrow');
let rightArrow = document.querySelector(".right_arrow");

leftArrow.addEventListener('click', function (event) {
    circle.style.display = "block";
    currentTrack--;
    currentImage--;
    aud.src = audArr[currentTrack] + '.mp3';
    if (currentImage < 0) {
        currentImage = 0;
    }
    now.innerHTML = "Сейчас вы слушаете: " + `<span>${currentTrack}</span>` + ' трек-' + (audArr[currentTrack]);
    if (currentTrack <= 0) {
        currentTrack = 0;
        aud.src = audArr[currentTrack] + '  ';
    }
    circle.style.backgroundImage = `url('${images[currentImage]}')`;
})
let big = audArr.length;
rightArrow.addEventListener('click', function (event) {

    circle.style.display = "block";
    currentTrack++;
    currentImage++;
    if (currentImage < 0) {
        currentImage = 0;
    }
    circle.style.backgroundImage = `url('${images[currentImage]}')`;
    aud.src = audArr[currentTrack] + '.mp3';
    now.innerHTML = "Сейчас вы слушаете: " + `<span>${currentTrack}</span>` + ' трек-' + (audArr[currentTrack]);
    if (currentTrack > big - 1) {

        currentTrack = 0
        currentImage = 0;
    }

    if (currentTrack <= 0) {
        currentTrack = 0;
        aud.src = audArr[currentTrack] + '  ';
    }


})







let range = document.querySelector('.range');
let minutes = document.querySelector('.min');
let seconds = document.querySelector('.sec')







aud.addEventListener('loadedmetadata', function () {
    let hour = Math.floor(aud.duration / 60 / 60);
    let min = Math.floor(aud.duration / 60) - (hour * 60);
    let sec = aud.duration % 60;

    minutes.textContent = "0" + min + ":";
    seconds.textContent = sec.toFixed(0) + ";";
    if (sec < 9) {
        seconds.textContent = "0" + sec.toFixed(0) + ";"
    }


})
let current_time = document.querySelector('.current_time');
let min_time = document.querySelector('.min_time');
let sec_time = document.querySelector('.sec_time');



aud.ontimeupdate = function () {
    let hour = Math.floor(aud.currentTime / 60 / 60);
    let min = Math.floor(aud.currentTime / 60) - (hour * 60);
    let sec = (aud.currentTime % 60).toFixed();


    if (currentImage < 0) {
        currentImage = 0;
    }
    min_time.textContent = "0" + min + ":";

    if (aud.ended == true) {
        currentTrack++;
        currentImage++;
        circle.style.backgroundImage = `url('${images[currentImage]}')`;
        aud.src = audArr[currentTrack] + '.mp3';

        aud.play();


    } if (currentTrack == audArr.length) {
        currentTrack = 0;
        currentImage = 0;
    }

    if (sec > 59) {
        sec = 0;
        min++;

    } if (sec < 10) {
        sec_time.textContent = "0" + sec + ";"
    } else if (sec >= 10) {
        sec_time.textContent = sec + ";"
    }


}

let minuse = document.getElementById('minuse');
let plus = document.getElementById('plus');
let pause = document.getElementById('pause');
let av = document.querySelector('.audio_volume')
let avc = aud.volume;
aud.volume = 0.1;



btn.addEventListener('click', function (event) {



    aud.play();
    circle.style.display = "block";
    circle.classList.add('circle')
    circle.style.backgroundImage = `url('${images[currentImage]}')`;
    now.innerHTML = "Сейчас вы слушаете: " + `<span>${currentTrack}</span>` + ' трек-' + (audArr[currentTrack]);
})


minuse.addEventListener('click', function (event) {
    aud.volume -= 0.1
    av.innerHTML = "Громкость " + aud.volume.toFixed(1) * 100 + "%";
})
plus.addEventListener('click', function (event) {
    aud.volume += 0.1;
    av.innerHTML = "Громкость: " + aud.volume.toFixed(1) * 100 + "%";

})

pause.addEventListener('click', function (event) {
    aud.pause();
    circle.classList.remove('circle');
})


let loop = document.querySelector('.loop');
loop.addEventListener('click', function () {
    loop.classList.toggle('loop_next')
    aud.loop = !aud.loop;
})
