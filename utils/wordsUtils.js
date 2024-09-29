function getRandomNumberFloor(number) {
    return Math.floor(Math.random() * number);
}

function getRandomTypeOfWord() {
    return typeOfWords[getRandomNumberFloor(typeOfWords.length)];
}

function getRandomCharacter() {
    return allCharacters[getRandomNumberFloor(allCharacters.length)];
}

function getRandomCharacters(){
    const randNum = getRandomNumberFloor(switchCharacterOptions);
    switch(randNum){
        case 0: return vowels[getRandomNumberFloor(vowels.length)];
        case 1: return consonants[getRandomNumberFloor(consonants.length)];
        case 2: return vowels[getRandomNumberFloor(vowels.length)]+consonants[getRandomNumberFloor(consonants.length)];
        default: return consonants[getRandomNumberFloor(consonants.length)]+vowels[getRandomNumberFloor(vowels.length)];
    }
}

function getRandomWord() {
    const typeOfWord = getRandomTypeOfWord();
    const randomTypeOfWordArray = listOfWords[typeOfWord];
    const randomNumber = getRandomNumberFloor(randomTypeOfWordArray.length);
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
        if (addedParagraph.length >maxParagraphLength){
            addedParagraph.shift();
        }
    } else {
        countOfWords++;
        addedParagraph.push(`<p class="wrong">${tempObj.randomWord} to <strong>${tempObj.typeOfWord}</strong>${(awnser ? `, a nie ${awnser}.` : `.`)}</p>`);
        if (addedParagraph.length >maxParagraphLength){
            addedParagraph.shift();
        }
    }
}

function getRandomEverything(keyWord) {
    if (keyWord === 'Czytanie'){
        tempObj = getRandomCharacters();
        createdHTML = createHTMLCharacter(tempObj);
    } else {
        tempObj = getRandomWord();
        createdHTML = createHTML(tempObj.randomWord);
    }
}

function restartEverything() {
    points = 0;
    countOfWords = 0;
    addedParagraph = [];
}

function getRandomTypeOfWord() {
    return typeOfWords[getRandomNumberFloor(typeOfWords.length)];
}

function getRandomCharacter() {
    return allCharacters[getRandomNumberFloor(allCharacters.length)];
}

function getRandomCharacters() {
    const randNum = getRandomNumberFloor(switchCharacterOptions);
    const randVowel = vowels[getRandomNumberFloor(vowels.length)];
    const randConsonant = consonants[getRandomNumberFloor(consonants.length)];
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
    const randomNumber = getRandomNumberFloor(randomTypeOfWordArray.length);
    const randomWord = randomTypeOfWordArray[randomNumber];

    const fullObject = {
        randomWord,
        randomNumber,
        typeOfWord,
    }
    return fullObject;
}