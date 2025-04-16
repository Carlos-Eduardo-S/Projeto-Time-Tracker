//Variáveis Botão Daily, Weekly e Monthly
let dailyBtn = document.querySelector('.jeremy__btn-daily');
let weeklyBtn = document.querySelector('.jeremy__btn-weekly');
let monthlyBtn = document.querySelector('.jeremy__btn-monthly');

//Variáveis Work
let work = document.querySelector('.conteudo__work');
let workTitulo = document.querySelector('.work__texto');
let workHora = document.querySelector('.work__hora');
let workTempo = document.querySelector('.work__tempo');
let workBtn = document.querySelector('.work__btn');

//Variáveis Play
let playTitulo = document.querySelector('.play__texto');
let playHora = document.querySelector('.play__hora');
let playTempo = document.querySelector('.play__tempo');
let platBtn = document.querySelector('.play__btn');

//Variáveis Study
let studyTitulo = document.querySelector('.study__texto');
let studyHora = document.querySelector('.study__hora');
let studyTempo = document.querySelector('.study__tempo');
let studyBtn = document.querySelector('.study__btn');

//Variáveis Exercise
let exerciseTitulo = document.querySelector('.exercise__texto');
let exerciseHora = document.querySelector('.exercise__hora');
let exerciseTempo = document.querySelector('.exercise__tempo');
let exerciseBtn = document.querySelector('.exercise__btn');

//Variáveis Social
let socialTitulo = document.querySelector('.social__texto');
let socialHora = document.querySelector('.social__hora');
let socialTempo = document.querySelector('.social__tempo');
let socialBtn = document.querySelector('.social__btn');

//Variáveis Self Care
let selfCareTitulo = document.querySelector('.self__texto');
let selfCareHora = document.querySelector('.self__hora');
let selfCareTempo = document.querySelector('.self__tempo');
let selfBtn = document.querySelector('.self__btn');

//Interação com o JavaScript e JSON
// Página Padrão
fetch("./js/data.json").then((response) => {
    response.json().then((data) => {
        workTitulo.innerHTML = data[0].title;
        workHora.innerHTML = `${data[0].timeframes.daily.current}hrs`;
        workTempo.innerHTML = `Last Week - ${data[0].timeframes.daily.previous}hrs`;

        playTitulo.innerHTML = data[1].title;
        playHora.innerHTML = `${data[1].timeframes.daily.current}hrs`;
        playTempo.innerHTML = `Last Week - ${data[1].timeframes.daily.previous}hrs`;

        studyTitulo.innerHTML = data[2].title;
        studyHora.innerHTML = `${data[2].timeframes.daily.current}hrs`;
        studyTempo.innerHTML = `Last Week - ${data[2].timeframes.daily.previous}hrs`;

        exerciseTitulo.innerHTML = data[3].title;
        exerciseHora.innerHTML = `${data[3].timeframes.daily.current}hrs`;
        exerciseTempo.innerHTML = `Last Week - ${data[3].timeframes.daily.previous}hrs`;

        socialTitulo.innerHTML = data[4].title;
        socialHora.innerHTML = `${data[4].timeframes.daily.current}hrs`;
        socialTempo.innerHTML = `Last Week - ${data[4].timeframes.daily.previous}hrs`;

        selfCareTitulo.innerHTML = data[5].title;
        selfCareHora.innerHTML = `${data[5].timeframes.daily.current}hrs`;
        selfCareTempo.innerHTML = `Last Week - ${data[5].timeframes.daily.previous}hrs`;
    })
})

//Função Daily
dailyBtn.addEventListener('click', () => {
    dailyBtn.style.color = '#fff';
    weeklyBtn.style.color = '#7078C9';
    monthlyBtn.style.color = '#7078C9';
    fetch("./js/data.json").then((response) => {
        response.json().then((data) => {
            workTitulo.innerHTML = data[0].title;
            workHora.innerHTML = `${data[0].timeframes.daily.current}hrs`;
            workTempo.innerHTML = `Last Week - ${data[0].timeframes.daily.previous}hrs`;
    
            playTitulo.innerHTML = data[1].title;
            playHora.innerHTML = `${data[1].timeframes.daily.current}hrs`;
            playTempo.innerHTML = `Last Week - ${data[1].timeframes.daily.previous}hrs`;
    
            studyTitulo.innerHTML = data[2].title;
            studyHora.innerHTML = `${data[2].timeframes.daily.current}hrs`;
            studyTempo.innerHTML = `Last Week - ${data[2].timeframes.daily.previous}hrs`;
    
            exerciseTitulo.innerHTML = data[3].title;
            exerciseHora.innerHTML = `${data[3].timeframes.daily.current}hrs`;
            exerciseTempo.innerHTML = `Last Week - ${data[3].timeframes.daily.previous}hrs`;
    
            socialTitulo.innerHTML = data[4].title;
            socialHora.innerHTML = `${data[4].timeframes.daily.current}hrs`;
            socialTempo.innerHTML = `Last Week - ${data[4].timeframes.daily.previous}hrs`;
    
            selfCareTitulo.innerHTML = data[5].title;
            selfCareHora.innerHTML = `${data[5].timeframes.daily.current}hrs`;
            selfCareTempo.innerHTML = `Last Week - ${data[5].timeframes.daily.previous}hrs`;
        })
    })
})

//Função Weekly
weeklyBtn.addEventListener('click', () => {
    dailyBtn.style.color = '#7078C9';
    weeklyBtn.style.color = '#fff';
    monthlyBtn.style.color = '#7078C9';
    fetch("./js/data.json").then((response) => {
        response.json().then((data) => {
            workTitulo.innerHTML = data[0].title;
            workHora.innerHTML = `${data[0].timeframes.weekly.current}hrs`;
            workTempo.innerHTML = `Last Week - ${data[0].timeframes.weekly.previous}hrs`;
    
            playTitulo.innerHTML = data[1].title;
            playHora.innerHTML = `${data[1].timeframes.weekly.current}hrs`;
            playTempo.innerHTML = `Last Week - ${data[1].timeframes.weekly.previous}hrs`;
    
            studyTitulo.innerHTML = data[2].title;
            studyHora.innerHTML = `${data[2].timeframes.weekly.current}hrs`;
            studyTempo.innerHTML = `Last Week - ${data[2].timeframes.weekly.previous}hrs`;
    
            exerciseTitulo.innerHTML = data[3].title;
            exerciseHora.innerHTML = `${data[3].timeframes.weekly.current}hrs`;
            exerciseTempo.innerHTML = `Last Week - ${data[3].timeframes.weekly.previous}hrs`;
    
            socialTitulo.innerHTML = data[4].title;
            socialHora.innerHTML = `${data[4].timeframes.weekly.current}hrs`;
            socialTempo.innerHTML = `Last Week - ${data[4].timeframes.weekly.previous}hrs`;
    
            selfCareTitulo.innerHTML = data[5].title;
            selfCareHora.innerHTML = `${data[5].timeframes.weekly.current}hrs`;
            selfCareTempo.innerHTML = `Last Week - ${data[5].timeframes.weekly.previous}hrs`;
        })
    })
})

//Função Monthly
monthlyBtn.addEventListener('click', () => {
    dailyBtn.style.color = '#7078C9';
    weeklyBtn.style.color = '#7078C9';
    monthlyBtn.style.color = '#fff';
    fetch("./js/data.json").then((response) => {
        response.json().then((data) => {
            workTitulo.innerHTML = data[0].title;
            workHora.innerHTML = `${data[0].timeframes.monthly.current}hrs`;
            workTempo.innerHTML = `Last Week - ${data[0].timeframes.monthly.previous}hrs`;
    
            playTitulo.innerHTML = data[1].title;
            playHora.innerHTML = `${data[1].timeframes.monthly.current}hrs`;
            playTempo.innerHTML = `Last Week - ${data[1].timeframes.monthly.previous}hrs`;
    
            studyTitulo.innerHTML = data[2].title;
            studyHora.innerHTML = `${data[2].timeframes.monthly.current}hrs`;
            studyTempo.innerHTML = `Last Week - ${data[2].timeframes.monthly.previous}hrs`;
    
            exerciseTitulo.innerHTML = data[3].title;
            exerciseHora.innerHTML = `${data[3].timeframes.monthly.current}hrs`;
            exerciseTempo.innerHTML = `Last Week - ${data[3].timeframes.monthly.previous}hrs`;
    
            socialTitulo.innerHTML = data[4].title;
            socialHora.innerHTML = `${data[4].timeframes.monthly.current}hrs`;
            socialTempo.innerHTML = `Last Week - ${data[4].timeframes.monthly.previous}hrs`;
    
            selfCareTitulo.innerHTML = data[5].title;
            selfCareHora.innerHTML = `${data[5].timeframes.monthly.current}hrs`;
            selfCareTempo.innerHTML = `Last Week - ${data[5].timeframes.monthly.previous}hrs`;
        })
    })
})