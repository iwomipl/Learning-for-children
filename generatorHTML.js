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

function finisherHeader() { 
    return `
<h3>Uzyskanych Punktów: <strong>${points}</strong></h3>
<h3>Liczba prób: <strong>${countOfAnswers}</strong></h3>
<h3>Procent dobrych odpowiedzi: <strong>${getPercent(points, countOfAnswers)}</strong>%</h3>
${leftToAwnser() ? `<h3>Pytań do końca: <strong>${leftToAwnser()}</strong> </h3>` : ''}
</div>`;
}

function generateSidebar() {
    return myPointsGeneratorStart + ((addedParagraph.join('')) ? addedParagraph.join('') : '') + myPointsGeneratorEnd + createdHTML + finisherHeader() + restartButtonWord;
}
function generateSidebarMath() {
    return myPointsGeneratorStart + ((addedParagraph.join('')) ? addedParagraph.join('') : '') + myPointsGeneratorEnd + createdHTML + finisherHeader() + restartButtonMath;
}

function generateSidebarSpeech() {
    return createdHTML + '<div>Zebraliście dotąd: <strong>' + points + '</strong> punktów</div>' + '<div>Liczba prób: <strong>' + countOfAnswers + '</strong>' + `<h3>Procent dobrych odpowiedzi: <strong>${getPercent(points, countOfAnswers)}</strong>%</h3><h3>Pytań do końca: <strong>${leftToAwnser()}</strong> </h3></div>` + restartButtonCharacter;
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