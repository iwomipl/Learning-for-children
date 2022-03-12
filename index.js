const container = document.querySelector('main');
const speach = document.getElementById('speach');
const reading = document.getElementById('reading');
const math = document.getElementById('math');

speach.addEventListener('click', () => {
    leadField = 'speach';
    container.innerHTML = difficultyLevelHtmlGenerator(leadField);
    difficultyEventListener();
});

reading.addEventListener('click', (event) => {
    leadField = 'reading';
    container.innerHTML = difficultyLevelHtmlGenerator(leadField);
    difficultyEventListener();
});

math.addEventListener('click', () => {
    leadField = 'math';
    container.innerHTML = difficultyLevelHtmlGenerator(leadField);
    difficultyEventListener();
});

function addingEventsSpeach() {
    const word = document.querySelector('#word');
    const reload = document.querySelector('#reload');
    const selecting = document.getElementById('selecting');
    const submit = document.querySelector('#submit');


    if (countOfAnswers < questionCount) {
        submit.addEventListener('click', () => {
            checkifAwnserIsRigth(selecting.value);
            getRandomEverything(leadField);
            container.innerHTML = `${generateSidebar()}`;
            addingEventsSpeach();
        })
    } else {
        container.innerHTML = generateContainerLastMessage(leadField);
    }
    const starter = document.getElementById(leadField);
    starter.addEventListener('click', () => {
        getRandomEverything(leadField);
        restartEverything();
        container.innerHTML = createdHTML + restartButtonWord;
        addingEventsSpeach();
    });
    reload.addEventListener('click', reloadPage);
}

function addingEventsCharacter() {
    const reload = document.querySelector('#reload');
    const goodButton = document.getElementById('good');
    const badButton = document.getElementById('bad');

    if (countOfAnswers < questionCount) {
        goodButton.addEventListener('click', () => {
            points++;
            countOfAnswers++;
            getRandomEverything(leadField);
            container.innerHTML = generateSidebarSpeech();
            addingEventsCharacter();
        })
        badButton.addEventListener('click', () => {
            getRandomEverything(leadField);
            countOfAnswers++;
            container.innerHTML = generateSidebarSpeech();
            addingEventsCharacter();
        })

    } else {
        container.innerHTML = generateContainerLastMessage(leadField);
    }
    const newStart = document.getElementById(leadField);
    console.log(leadField);
    console.log(newStart);

    newStart.addEventListener('click', () => {
        getRandomEverything(leadField);
        points = 0;
        countOfAnswers = 0;
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

    if (countOfAnswers < questionCount) {
        submit.addEventListener('click', () => {
            if (Number.isNaN(Number(selecting.value))) {
                return Error;
            }

            checkifAwnserIsRigthMath(Number(selecting.value));
            getRandomEverything(leadField);
            container.innerHTML = `${generateSidebarMath()}`;
            addingEventsMath();

        })
    } else {
        container.innerHTML = generateContainerLastMessage(leadField);
    }
    const starter = document.getElementById(leadField);
    starter.addEventListener('click', () => {
        getRandomEverything(leadField);
        restartEverything();
        container.innerHTML = createdHTML + restartButtonMath;
        addingEventsMath();
    });
    reload.addEventListener('click', reloadPage);
}

function difficultyEventListener() {
    // const veryEasy = document.getElementById('very-easy');
    // const easy = document.getElementById('easy');
    // const normal = document.getElementById('normal');
    // const hard = document.getElementById('hard');
    // const veryHard = document.getElementById('very-hard');
    const difficultyLevelClass = document.querySelectorAll('.difficulty');


    difficultyLevelClass.forEach(obj => {
        console.log('forEach');
        eventAdder(obj);
    });
}

function eventAdder(obj) {
    obj.addEventListener('click', () => {
        console.log('przed set Diff');
        setDifficultyLevel(obj.id);
        console.log('po setDif');
        switchToNextPropperField();
    })
}