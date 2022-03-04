const container = document.querySelector('main');
const starter = document.getElementById('starter');
const czytanie = document.getElementById('Czytanie');
const math = document.getElementById('math');

starter.addEventListener('click', () => {
    getRandomEverything();
    questionCount = 25;
    container.innerHTML = createdHTML + restartButtonWord;
    addingEvents();
});

czytanie.addEventListener('click', (event) => {
    getRandomEverything('Czytanie');
    questionCount = 50;
    container.innerHTML = createdHTML + restartButtonCharacter;
    addingEventsCharacter();
});

math.addEventListener('click', () => {
    getRandomEverything('math');
    questionCount = 25;
    container.innerHTML = createdHTML + restartButtonWord;
    addingEventsMath();
});

function addingEvents() {
    const word = document.querySelector('#word');
    const reload = document.querySelector('#reload');
    const selecting = document.getElementById('selecting');
    const submit = document.querySelector('#submit');


    if (countOfWords < questionCount) {
        submit.addEventListener('click', (event) => {
            checkifAwnserIsRigth(selecting.value);
            getRandomEverything();
            container.innerHTML = `${generateSidebar()}`;
            addingEvents();
        })
    } else {
        container.innerHTML = generateContainerLastMessage('starter');
    }
    const starter = document.getElementById('starter');
    starter.addEventListener('click', () => {
        getRandomEverything();
        restartEverything();
        container.innerHTML = createdHTML + restartButtonWord;
        addingEvents();
    });
    reload.addEventListener('click', reloadPage);
}

function addingEventsCharacter() {
    const reload = document.querySelector('#reload');
    const goodButton = document.getElementById('good');
    const badButton = document.getElementById('bad');

    if (countOfWords < questionCount) {
        goodButton.addEventListener('click', () => {
            points++;
            countOfWords++;
            getRandomEverything('Czytanie');
            container.innerHTML = generateSidebarSpeech();
            addingEventsCharacter();
        })
        badButton.addEventListener('click', () => {
            getRandomEverything('Czytanie');
            countOfWords++;
            container.innerHTML = generateSidebarSpeech();
            addingEventsCharacter();
        })

    } else {
        container.innerHTML = generateContainerLastMessage('newStart');
    }
    const newStart = document.getElementById('newStart');

    newStart.addEventListener('click', () => {
        getRandomEverything('Czytanie');
        points = 0;
        countOfWords = 0;
        container.innerHTML = createdHTML + restartButtonCharacter;
        addingEventsCharacter();
    })
    reload.addEventListener('click', reloadPage);
}

function addingEventsMath() {
    const reload = document.querySelector('#reload');
    const selecting = document.getElementById('result');
    const submit = document.querySelector('#submit');
    selecting.focus();

    if (countOfWords < questionCount) {
        submit.addEventListener('click', (event) => {
            if (Number.isNaN(Number(selecting.value))) {
                return Error;
            }

            checkifAwnserIsRigthMath(Number(selecting.value));
            getRandomEverything('math');
            container.innerHTML = `${generateSidebar()}`;
            addingEventsMath();

        })
    } else {
        container.innerHTML = generateContainerLastMessage('starter');
    }
    const starter = document.getElementById('starter');
    starter.addEventListener('click', () => {
        getRandomEverything('math');
        restartEverything();
        container.innerHTML = createdHTML + restartButtonWord;
        addingEventsMath();
    });
    reload.addEventListener('click', reloadPage);
}