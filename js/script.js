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
let workBtnA = document.querySelector('.work__btnA');

//Variáveis Play
let playTitulo = document.querySelector('.play__texto');
let playHora = document.querySelector('.play__hora');
let playTempo = document.querySelector('.play__tempo');
let playBtn = document.querySelector('.play__btn');
let playBtnA = document.querySelector('.play__btnA');


//Variáveis Study
let studyTitulo = document.querySelector('.study__texto');
let studyHora = document.querySelector('.study__hora');
let studyTempo = document.querySelector('.study__tempo');
let studyBtn = document.querySelector('.study__btn');
let studyBtnA = document.querySelector('.study__btnA');

//Variáveis Exercise
let exerciseTitulo = document.querySelector('.exercise__texto');
let exerciseHora = document.querySelector('.exercise__hora');
let exerciseTempo = document.querySelector('.exercise__tempo');
let exerciseBtn = document.querySelector('.exercise__btn');
let exerciseBtnA = document.querySelector('.exercise__btnA');

//Variáveis Social
let socialTitulo = document.querySelector('.social__texto');
let socialHora = document.querySelector('.social__hora');
let socialTempo = document.querySelector('.social__tempo');
let socialBtn = document.querySelector('.social__btn');
let socialBtnA = document.querySelector('.social__btnA');

//Variáveis Self Care
let selfCareTitulo = document.querySelector('.self__texto');
let selfCareHora = document.querySelector('.self__hora');
let selfCareTempo = document.querySelector('.self__tempo');
let selfBtn = document.querySelector('.self__btn');
let selfBtnA = document.querySelector('.self__btnA');

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

//Função para mudar o botão de cor
// 3 Pontos do Card Work
workBtn.addEventListener('click', () => {
    workBtn.classList.add('hideout');
    workBtnA.classList.remove('hideout');
})

workBtnA.addEventListener('click', () => {
    workBtnA.classList.add('hideout');
    workBtn.classList.remove('hideout');
})

// 3 Pontos do Card Play
playBtn.addEventListener('click', () => {
    playBtn.classList.add('hideout');
    playBtnA.classList.remove('hideout');
})

playBtnA.addEventListener('click', () => {
    playBtnA.classList.add('hideout');
    playBtn.classList.remove('hideout');
})

// 3 Pontos do Card Study
studyBtn.addEventListener('click', () => {
    studyBtn.classList.add('hideout');
    studyBtnA.classList.remove('hideout');
})

studyBtnA.addEventListener('click', () => {
    studyBtnA.classList.add('hideout');
    studyBtn.classList.remove('hideout');
})

// 3 Pontos do Card Exercise
exerciseBtn.addEventListener('click', () => {
    exerciseBtn.classList.add('hideout');
    exerciseBtnA.classList.remove('hideout');
})

exerciseBtnA.addEventListener('click', () => {
    exerciseBtnA.classList.add('hideout');
    exerciseBtn.classList.remove('hideout');
})

// 3 Pontos do Card Social
socialBtn.addEventListener('click', () => {
    socialBtn.classList.add('hideout');
    socialBtnA.classList.remove('hideout');
})

socialBtnA.addEventListener('click', () => {
    socialBtnA.classList.add('hideout');
    socialBtn.classList.remove('hideout');
})

// 3 Pontos do Card Self Care
selfBtn.addEventListener('click', () => {
    selfBtn.classList.add('hideout');
    selfBtnA.classList.remove('hideout');
})

selfBtnA.addEventListener('click', () => {
    selfBtnA.classList.add('hideout');
    selfBtn.classList.remove('hideout');
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