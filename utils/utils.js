function reloadPage() {
    window.location.reload();
}

function getPercent(rightAwnsers, awnsers) {
    const percentage = Math.round(rightAwnsers / awnsers * 100);
    return percentage;
}

function leftToAwnser() {
    return Math.floor(questionCount - countOfWords);
}

function getRandomMemoryMatrix() {
    const arrayOfWords = [];
    if (matrixSize < 25) {
        switchCharacterOptions = 5;
        if (matrixSize < 17) {
            switchCharacterOptions = 3;
        }
        for (let i = 0; i < matrixSize / 2; i++) {
            const randomWord = getRandomCharacters();
            if (arrayOfWords.includes(randomWord)) {
                i--;
            } else {
                arrayOfWords.push(randomWord);
            }
        }
    } else {

        for (let i = 0; i < matrixSize / 2; i++) {
            const { randomWord } = getRandomWord();
            if (arrayOfWords.includes(randomWord)) {
                i--;
            } else {
                arrayOfWords.push(randomWord);
            }
        }
    }

    return arrayOfWords;
}

function checkifAwnserIsRigth(awnser) {

    if (awnser === tempObj.typeOfWord) {
        points++;
        countOfAnswers++;
        if (tempObj.randomWord !== undefined) {
            addedParagraph.push(`<p class="right">${tempObj.randomWord} to <strong>${tempObj.typeOfWord}</strong></p>`);
        }
        if (addedParagraph.length > maxParagraphLength) {
            addedParagraph.shift();
        }
    } else {
        countOfAnswers++;
        addedParagraph.push(`<p class="wrong">${tempObj.randomWord} to <strong>${tempObj.typeOfWord}</strong>${(awnser ? `, a nie ${awnser}.` : `.`)}</p>`);
        if (addedParagraph.length > maxParagraphLength) {
            addedParagraph.shift();
        }
    }
}

function getRandomEverything(keyWord) {
    if (keyWord === 'reading') {
        tempObj = getRandomCharacters();
        createdHTML = createHTMLCharacter(tempObj);
    } else if (keyWord === 'math') {
        tempObj = mathSwitch();
        createdHTML = createHTMLMath(tempObj);
    } else if (keyWord === 'speach') {
        tempObj = getRandomWord();
        createdHTML = createHTML(tempObj.randomWord);
    } else if (keyWord === 'memory') {
        tempObj = getRandomMemoryMatrix();
        createdHTML = createHTMLMemory();
    } else if (keyWord === 'divAndSubs') {
        tempObj = addAndSubsSwitch();
        createdHTML = createHTMLMath(tempObj);
    } else if (keyWord === 'multiDivid') {
        tempObj = multiAndDivideSwitch();
        createdHTML = createHTMLMath(tempObj);
    }
}

function restartEverything() {
    points = 0;
    countOfAnswers = 0;
    addedParagraph = [];
    memoryArray = [];
    guessedThingsInMemoryGame = [];
    memoryTwoElementsArray = [];
    lastIdToMemoryGame = '';
    tempObj = {};
    getAndShowEverything();
}

function getPercent(rightAwnsers, awnsers) {
    const percentage = Math.round(rightAwnsers / awnsers * 100);
    return percentage;
}

function leftToAwnser() {
    return Math.floor(questionCount - countOfAnswers);
}

function setDifficultyLevel(difficultyLevel) {
    switch (difficultyLevel) {
        case 'easiest':
            maxMath = 1;
            numAToRandomMath = 3;
            questionCount = 15;
            switchCharacterOptions = 1;
            matrixSize = 8;
            return;
        case 'easy':
            maxMath = 2;
            numAToRandomMath = 5;
            questionCount = 20;
            switchCharacterOptions = 2;
            matrixSize = 16;
            return;
        case 'normal':
            maxMath = 3;
            numAToRandomMath = 10;
            questionCount = 25;
            switchCharacterOptions = 3;
            matrixSize = 24;
            return;
        case 'hard':
            maxMath = 4;
            numAToRandomMath = 15;
            questionCount = 50;
            switchCharacterOptions = 4;
            matrixSize = 32;
            fontSize = '1.3vw';
            return;
        case 'hardest':
            maxMath = 5;
            numAToRandomMath = 20;
            questionCount = (leadField === 'reading') ? 50 : 75;
            switchCharacterOptions = 5;
            matrixSize = 40;
            fontSize = '1.3vw';
            return;
    }
}

function switchToNextPropperField() {
    switch (leadField) {
        case 'speach':
            getAndShowEverything();
            addingEventsSpeach();
            break;
        case 'reading':
            getAndShowEverything();
            addingEventsCharacter();
            break;
        case 'math':
            getAndShowEverything();
            addingEventsMath();
            break;
        case 'memory':
            getAndShowEverything();
            memoryEventListener();
            break;
        case 'divAndSubs':
            getAndShowEverything();
            addingEventsDivAndSubs();
            break;
        case 'multiDivid':
            getAndShowEverything();
            addingEventsMultiplication();
            break;
    }
}

const getAndShowEverything = () => {
    const container = document.querySelector('main');
    getRandomEverything(leadField);
    container.innerHTML = createdHTML + restartButton();
}

const getAndShowEverythingWithSidebar = () => {
    getRandomEverything(leadField);
    container.innerHTML = generateSidebar();
}
