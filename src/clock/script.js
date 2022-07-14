let hours = document.querySelector('#hours');
let minutes = document.querySelector('#minutes');
let seconds = document.querySelector('#seconds');
let day = document.querySelector('#day');
let month = document.querySelector('#month');
let year = document.querySelector('#year');
let p = document.getElementsByTagName('p');

for (let i = 0; i < p.length; i++) {
    p[i].onclick = () => {
        window.location.href = 'https://pt.wikipedia.org/wiki/'+p[i].innerHTML;
    }
}


function setTime() {
    let time = new Date();
    hours.innerHTML = time.getHours().toLocaleString('pt-br', {
        minimumIntegerDigits: 2,
        useGrouping: false
    });
    minutes.innerHTML = time.getMinutes().toLocaleString('pt-br', {
        minimumIntegerDigits: 2,
        useGrouping: false
    });
    seconds.innerHTML = time.getSeconds().toLocaleString('pt-br', {
        minimumIntegerDigits: 2,
        useGrouping: false
    });
    day.innerHTML = time.getDate().toLocaleString('pt-br', {
        minimumIntegerDigits: 2,
        useGrouping: false
    });
    month.innerHTML = (time.getMonth()+1).toLocaleString('pt-br', {
        minimumIntegerDigits: 2,
        useGrouping: false
    });
    year.innerHTML = time.getFullYear().toLocaleString('pt-br', {
        minimumIntegerDigits: 4,
        useGrouping: false
    });
}


setInterval(setTime, 1000);
