function createHTML(word) {
    const generatedHTML = `${generatedHTMLStart}${word}${generatedHTMLEnd}`;
    return generatedHTML;
}

function createHTMLCharacter(character) {
    const generatedHTML = `${generatedHTMLCharacterStart}${character}${generatedHTMLCharacterEnd}`;
    return generatedHTML;
}

function createHTMLMath(character) {
    const generatedHTML = `${generatedHTMLMathStart}${mathNumber1} ${character} ${mathNumber2}= ${mathResult}${generatedHTMLMathEnd}`;
    return generatedHTML;
}

function finisherHeader() { 
    return `
<h3>Uzyskanych Punktów: <strong>${points}</strong></h3>
<h3>Liczba prób: <strong>${countOfWords}</strong></h3>
<h3>Procent dobrych odpowiedzi: <strong>${getPercent(points, countOfWords)}</strong>%</h3>
${leftToAwnser() ? `<h3>Pytań do końca: <strong>${leftToAwnser()}</strong> </h3>` : ''}
</div>`;
}

function generateSidebar() {
    return myPointsGeneratorStart + ((addedParagraph.join('')) ? addedParagraph.join('') : '') + myPointsGeneratorEnd + createdHTML + finisherHeader() + restartButtonWord;
}

function generateSidebarSpeech() {
    return createdHTML + '<div>Zebraliście dotąd: <strong>' + points + '</strong> punktów</div>' + '<div>Liczba prób: <strong>' + countOfWords + '</strong>' + `<h3>Procent dobrych odpowiedzi: <strong>${getPercent(points, countOfWords)}</strong>%</h3><h3>Pytań do końca: <strong>${leftToAwnser()}</strong> </h3></div>` + restartButtonCharacter;
}
function generateContainerLastMessage(variableNameString) {
    return `${lastMessageStart}${getPercent(points, countOfWords)}${lastMessageMiddle(variableNameString)}${addedParagraph.join('')}</div>`;
}