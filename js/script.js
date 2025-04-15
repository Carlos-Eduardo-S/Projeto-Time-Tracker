//Varável Geral
let conteudo = document.querySelector('.conteudo');

//Variáveis Work
let workTitulo = document.querySelector('.work__texto');
let workHora = document.querySelector('.work__hora');
let workTempo = document.querySelector('.work__tempo');

//Variáveis Play
let playTitulo = document.querySelector('play__texto');
let playHora = document.querySelector('.play__hora');
let playTempo = document.querySelector('.play__tempo');

//Variáveis Study
let studyTitulo = document.querySelector('.study__texto');
let studyHora = document.querySelector('.study__hora');
let studyTempo = document.querySelector('.study__tempo');

//Variáveis Exercise
let exerciseTitulo = document.querySelector('.exercise__texto');
let exerciseHora = document.querySelector('.exercise__hora');
let exerciseTempo = document.querySelector('.exercise__tempo');

//Variáveis Social
let socialTitulo = document.querySelector('.social__texto');
let socialHora = document.querySelector('.social__hora');
let socialTempo = document.querySelector('.social__tempo');

//Variáveis Self Care
let selfCareTitulo = document.querySelector('.selfCare__texto');
let selfCareHora = document.querySelector('.selfCare__hora');
let selfCareTempo = document.querySelector('.selfCare__tempo');

//Interação com o JavaScript e JSON

fetch('/js/data.json').then(response => {
    response.json().then((conteudo) => {
        conteudo.map((cards) => {
            workTitulo.innerHTML = cards.title;
            workHora.innerHTML = `${cards.timeframes.daily.current}hrs`;
            workTempo.innerHTML = `Last Week - ${cards.timeframes.daily.previous}hrs`;

            playTitulo.innerHTML = cards.title;
            playHora.innerHTML = `${cards.timeframes.daily.current}hrs`;
            playTempo.innerHTML = `Last Week - ${cards.timeframes.daily.previous}hrs`;

            studyTitulo.innerHTML = cards.title;
            studyHora.innerHTML = `${cards.timeframes.daily.current}hrs`;
            studyTempo.innerHTML = `Last Week - ${cards.timeframes.daily.previous}hrs`;

            exerciseTitulo.innerHTML = cards.title;
            exerciseHora.innerHTML = `${cards.timeframes.daily.current}hrs`;
            exerciseTempo.innerHTML = `Last Week - ${cards.timeframes.daily.previous}hrs`;

            socialTitulo.innerHTML = cards.title;
            socialHora.innerHTML = `${cards.timeframes.daily.current}hrs`;
            socialTempo.innerHTML = `Last Week - ${cards.timeframes.daily.previous}hrs`;

            selfCareTitulo.innerHTML = cards.title;
            selfCareHora.innerHTML = `${cards.timeframes.daily.current}hrs`;
            selfCareTempo.innerHTML = `Last Week - ${cards.timeframes.daily.previous}hrs`;
        })
    })
})