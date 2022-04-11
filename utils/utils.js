function reloadPage() {
    window.location.reload();
}

function getRandomNumber(number) {
    return Math.floor(Math.random() * number);
}

function getRandomTypeOfWord() {
    return typeOfWords[getRandomNumber(typeOfWords.length)];
}

function getRandomCharacter() {
    return allCharacters[getRandomNumber(allCharacters.length)];
}

function getRandomCharacters() {
    const randNum = getRandomNumber(switchCharacterOptions);
    const randVowel = vowels[getRandomNumber(vowels.length)];
    const randConsonant = consonants[getRandomNumber(consonants.length)];
    switch (randNum) {
        case 0: return randVowel;
        case 1: return randConsonant;
        case 2: return randVowel + randConsonant;
        case 3: return randConsonant + randVowel;
        default: return randVowel + randConsonant + randVowel;
    }
}

function getRandomWord() {
    const typeOfWord = getRandomTypeOfWord();
    const randomTypeOfWordArray = listOfWords[typeOfWord];
    const randomNumber = getRandomNumber(randomTypeOfWordArray.length);
    const randomWord = randomTypeOfWordArray[randomNumber];

    const fullObject = {
        randomWord,
        randomNumber,
        typeOfWord,
    }
    return fullObject;
}

function getRandomMemoryMatrix() {
    const arrayOfWords = [];
    if (matrixSize < 25) {
        switchCharacterOptions = 5;
        if (matrixSize < 17) {
            switchCharacterOptions = 3;
        }
        //@TODO zlikwidować możliwość powtórzenia się liter, głosek
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

function checkifAwnserIsRigthMath(awnser) {

    if (awnser === mathResult) {
        points++;
        countOfAnswers++;
        if (awnser !== undefined || !Number.isNaN(awnser)) {
            addedParagraph.push(`<p class="right">${awnser} to dobry wynik działania<strong> ${mathNumber1} ${mathSign} ${mathNumber2}</strong></p>`);
        }
        if (addedParagraph.length > maxParagraphLength) {
            addedParagraph.shift();
        }
    } else {
        countOfAnswers++;
        addedParagraph.push(`<p class="wrong">${awnser} to zły wynik działania<strong> ${mathNumber1} ${mathSign} ${mathNumber2}</strong>, dobry wynik to ${mathResult}</p>`);
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
        createdHTML = createHTMLMemory(tempObj.randomWord);
    }
}

function restartEverything() {
    points = 0;
    countOfAnswers = 0;
    addedParagraph = [];
    getAndShowEverything();
}

function getPercent(rightAwnsers, awnsers) {
    const percentage = Math.round(rightAwnsers / awnsers * 100);
    return percentage;
}

function leftToAwnser() {
    return Math.floor(questionCount - countOfAnswers);
}

function mathSwitch() {
    const randNum = getRandomNumber(maxMath);
    mathNumber1 = getRandomNumber(numAToRandomMath);
    mathNumber2 = getRandomNumber(9);

    console.log(randNum);
    switch (randNum) {
        case 0:
            mathResult = mathNumber1 + mathNumber2;
            mathSign = '+';
            return;
        case 1:
            mathResult = substract();
            mathSign = '-';
            return;
        case 2:
            mathResult = multiply();
            mathSign = '*';
            return;
        default:
            mathResult = divide();
            mathSign = '/';
            return;
    }
}

function substract() {
    if (mathNumber1 >= mathNumber2) {
        return mathNumber1 - mathNumber2;
    } else {
        mathNumber1 = getRandomNumber(numAToRandomMath);
        mathNumber2 = getRandomNumber(9);
        return substract()
    }
}

function multiply() {
    if (mathNumber1 !== 0 && mathNumber2 !== 0) {
        return mathNumber1 * mathNumber2;
    } else {
        mathNumber1 = getRandomNumber(numAToRandomMath);
        mathNumber2 = getRandomNumber(9);
        return multiply();
    }
}
function divide() {
    if (mathNumber1 !== 0 && mathNumber2 !== 0) {
        mathNumber1 = mathNumber1 * mathNumber2;
        return mathNumber1 / mathNumber2;
    } else if (mathNumber1 === 0) {
        mathNumber1 = getRandomNumber(numAToRandomMath);
        mathNumber2 = getRandomNumber(9);
        return divide();
    } else {
        mathNumber2 = getRandomNumber(9);
        return divide();
    }
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
            return;
        case 'hardest':
            maxMath = 5;
            numAToRandomMath = 20;
            questionCount = (leadField === 'reading') ? 50 : 75;
            switchCharacterOptions = 5;
            matrixSize = 40;
            return;
    }
}

function switchToNextPropperField() {
    const container = document.querySelector('main');
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
            // addingEventsMemory();
            memoryEventListener();
            break;
    }
}

const getAndShowEverything = () => {
    getRandomEverything(leadField);
    container.innerHTML = createdHTML + restartButton();
}

const getAndShowEverythingWithSidebar = () => {
    getRandomEverything(leadField);
    container.innerHTML = generateSidebar();
}
