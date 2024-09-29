const container = document.querySelector('main');
const speach = document.getElementById('speach');
const reading = document.getElementById('reading');
const math = document.getElementById('math');
const memory = document.getElementById('memory');
const divAndSubs = document.getElementById('divAndSubs');
const multiplication = document.getElementById('multiDivid');

function parse(str) {
    return Function(`'use strict'; return (${str})`)()
}
a = 1;
b = 2;
c = 3;
str = `${b}+(${c}/${b}+${a})`;
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

memory.addEventListener('click', () => {
    leadField = 'memory';
    container.innerHTML = difficultyLevelHtmlGenerator(leadField);
    difficultyEventListener();
});

divAndSubs.addEventListener('click', () => {
    leadField = 'divAndSubs';
    container.innerHTML = difficultyLevelHtmlGenerator(leadField);
    difficultyEventListener();
});

multiplication.addEventListener('click', () => {
    leadField = 'multiDivid';
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

function addingEventsDivAndSubs() {
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
            addingEventsDivAndSubs();

        })
    } else {
        container.innerHTML = generateContainerLastMessage(leadField);
    }
    const starter = document.getElementById(leadField);
    starter.addEventListener('click', () => {
        restartEverything();
        addingEventsDivAndSubs();
    });
    reload.addEventListener('click', reloadPage);
}

function addingEventsMultiplication() {
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
            addingEventsMultiplication();

        })
    } else {
        container.innerHTML = generateContainerLastMessage(leadField);
    }
    const starter = document.getElementById(leadField);
    starter.addEventListener('click', () => {
        restartEverything();
        addingEventsMultiplication();
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

function memoryEventListener() {
    const reload = document.querySelector('#reload');


    for (let i = 0; i <= memoryArray.length - 1; i++) {
        const mySquare = document.getElementById(`${i}`);

        mySquare.addEventListener('click', (e) => {
            if (lastIdToMemoryGame === e.target.id) {
                return;
            } else if (memoryTwoElementsArray.length > 1) {
                memoryTwoElementsArray.length = 0;
                switchToNextPropperField();
            } else if (checkTheWordInMemoryGame(e.target.id)) {
                switchToNextPropperField();
            } else {
                memoryTwoElementsArray.push(memoryArray[e.target.id]);
                mySquare.innerText = memoryArray[e.target.id];
            }

        });
    }
    const starter = document.getElementById(leadField);
    starter.addEventListener('click', () => {
        restartEverything();
        switchToNextPropperField();
        memoryEventListener();
    });
    reload.addEventListener('click', reloadPage);
}

function checkTheWordInMemoryGame(id) {
    if (memoryTwoElementsArray.length === 1) {
        if (memoryArray[id] === memoryTwoElementsArray[0]) {
            guessedThingsInMemoryGame.push(memoryArray[id]);
            memoryTwoElementsArray.length = 0;
            lastIdToMemoryGame = id;
            return true;
        }
    }
    lastIdToMemoryGame = id;
    return false;
}