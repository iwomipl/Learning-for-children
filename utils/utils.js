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

function checkifAwnserIsRigth(awnser) {

    if (awnser === tempObj.typeOfWord) {
        points++;
        countOfWords++;
        if (tempObj.randomWord !== undefined) {
            addedParagraph.push(`<p class="right">${tempObj.randomWord} to <strong>${tempObj.typeOfWord}</strong></p>`);
        }
        if (addedParagraph.length > maxParagraphLength) {
            addedParagraph.shift();
        }
    } else {
        countOfWords++;
        addedParagraph.push(`<p class="wrong">${tempObj.randomWord} to <strong>${tempObj.typeOfWord}</strong>${(awnser ? `, a nie ${awnser}.` : `.`)}</p>`);
        if (addedParagraph.length > maxParagraphLength) {
            addedParagraph.shift();
        }
    }
}

function checkifAwnserIsRigthMath(awnser) {

    if (awnser === mathResult) {
        points++;
        countOfWords++;
        if (awnser !== undefined || !Number.isNaN(awnser)) {
            addedParagraph.push(`<p class="right">${awnser} to dobry wynik działania<strong> ${mathNumber1} ${mathSign} ${mathNumber2}</strong></p>`);
        }
        if (addedParagraph.length > maxParagraphLength) {
            addedParagraph.shift();
        }
    } else {
        countOfWords++;
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
    }
}

function restartEverything() {
    points = 0;
    countOfWords = 0;
    addedParagraph = [];
}

function getPercent(rightAwnsers, awnsers) {
    const percentage = Math.round(rightAwnsers / awnsers * 100);
    return percentage;
}

function leftToAwnser() {
    return Math.floor(questionCount - countOfWords);
}

function mathSwitch() {
    const randNum = getRandomNumber(5);
    mathNumber1 = getRandomNumber(numAToRandomMath);
    mathNumber2 = getRandomNumber(9);

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
            mathResult = divide();
            mathSign = '/';
            return;
        default:
            mathResult = multiply();
            mathSign = '*';
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