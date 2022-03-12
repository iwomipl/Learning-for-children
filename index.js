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
    const selecting = document.getElementById('selecting');
    const submit = document.querySelector('#submit');


    if (countOfAnswers < questionCount) {
        submit.addEventListener('click', () => {
            checkifAwnserIsRigth(selecting.value);
            getAndShowEverythingWithSidebar();
            addingEventsSpeach();
        })
    } else {
        container.innerHTML = generateContainerLastMessage(leadField);
    }
    const starter = document.getElementById(leadField);
    starter.addEventListener('click', () => {
        restartEverything();
        addingEventsSpeach();
    });
    const reload = document.querySelector('#reload');
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
            getAndShowEverythingWithSidebar();
            addingEventsCharacter();
        })
        badButton.addEventListener('click', () => {
            countOfAnswers++;
            getAndShowEverythingWithSidebar();
            addingEventsCharacter();
        })

    } else {
        container.innerHTML = generateContainerLastMessage(leadField);
    }
    const starter = document.getElementById(leadField);
    starter.addEventListener('click', () => {
        restartEverything();
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
            getAndShowEverythingWithSidebar();
            addingEventsMath();

        })
    } else {
        container.innerHTML = generateContainerLastMessage(leadField);
    }
    const starter = document.getElementById(leadField);
    starter.addEventListener('click', () => {
        restartEverything();
        addingEventsMath();
    });
    reload.addEventListener('click', reloadPage);
}

function difficultyEventListener() {
    const difficultyLevelClass = document.querySelectorAll('.difficulty');

    difficultyLevelClass.forEach(obj => {
        obj.addEventListener('click', () => {
            setDifficultyLevel(obj.id);
            switchToNextPropperField();
        })
    });
}