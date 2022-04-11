function restartButton() {
    return `<button type="submit" id="reload">Wybierz inną dziedzinę</button><button type="submit" id="${leadField}">Zacznij zadanie od nowa</button>`;
}

function lastMessageMiddle(string) {
    return `%</h3><h1>Wołaj Ojczulka</h1><button type="submit" id="${string}">lub zacznij od nowa</button><div id="sidebar">`;
}

function createHTML(word) {
    const generatedHTML = `${generatedHTMLStart}${word}${generatedHTMLEnd}`;
    return generatedHTML;
}

function createHTMLCharacter(character) {
    const generatedHTML = `${generatedHTMLCharacterStart}${character}${generatedHTMLCharacterEnd}`;
    return generatedHTML;
}

function createHTMLMath() {
    const generatedHTML = `${generatedHTMLMathStart} ${mathNumber1} ${mathSign} ${mathNumber2}${generatedHTMLMathEnd}`;
    return generatedHTML;
}

function createHTMLMemory() {
    const generatedHTML = `<div class="memoryTable">${createTableFromTempObject()}</div>`;
    return generatedHTML;
}

function finisherHeader() {
    return `
<h3>Uzyskanych Punktów: <strong>${points}</strong></h3>
<h3>Liczba prób: <strong>${countOfAnswers}</strong></h3>
<h3>Procent dobrych odpowiedzi: <strong>${getPercent(points, countOfAnswers)}</strong>%</h3>
${leftToAwnser() ? `<h3>Pytań do końca: <strong>${leftToAwnser()}</strong> </h3>` : ''}
</div>`;
}

function generateSidebar() {
    return myPointsGeneratorStart + ((addedParagraph.join('')) ? addedParagraph.join('') : '') + myPointsGeneratorEnd + createdHTML + finisherHeader() + restartButton();
}
function generateContainerLastMessage(variableNameString) {
    return `${lastMessageStart}${getPercent(points, countOfAnswers)}${lastMessageMiddle(variableNameString)}${addedParagraph.join('')}</div>`;
}

function difficultyLevelHtmlGenerator() {
    return `<h1>Wybierz Poziom trudniości</h1>
    <button type="submit" id="easiest" name="${leadField}" class="difficulty">Najłatwiejszy</button>
    <button type="submit" id="easy" name="${leadField}" class="difficulty">Łatwy</button>
    <button type="submit" id="normal" name="${leadField}" class="difficulty">Normalny</button>
    <button type="submit" id="hard" name="${leadField}" class="difficulty">Trudny</button>
    <button type="submit" id="hardest" name="${leadField}" class="difficulty">Najtrudniejszy</button>`;
}

function createTableFromTempObject() {
    if (memoryArray.length < 1) {
        let tempArrayToHTML = [...tempObj, ...tempObj].sort(() => Math.random() - 0.5);
        memoryArray = [...tempArrayToHTML];
    }
    const tableToHTML = memoryArray.map((element, index) => {
        return `<div style="font-size: ${fontSize};" class="${isInGuessedMemoryArray(element) ? 'guessed' : 'notGuessed'}" id="${index}">${isInGuessedMemoryArray(element) ? element : ''}</div>`
    })
    return tableToHTML.join('');
}

function isInGuessedMemoryArray(checkedString) {
    return guessedThingsInMemoryGame.includes(checkedString) ? true : false;
}

