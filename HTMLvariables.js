const restartButtonWord = `<button type="submit" id="reload">Wybierz inną dziedzinę</button><button type="submit" id="speach">Zacznij zadanie od nowa</button>`;
const restartButtonCharacter = `<button type="submit" id="reload">Wybierz inną dziedzinę</button><button type="submit" id="reading">Zacznij zadanie od nowa</button>`;
const restartButtonMath = `<button type="submit" id="reload">Wybierz inną dziedzinę</button><button type="submit" id="math">Zacznij zadanie od nowa</button>`;

let myPointsGeneratorStart = `<div id="sidebar">`;
let myPointsGeneratorEnd = `</div>`;

const generatedHTMLStart = `<div id=""headerDiv"><h1 id="word">`;
const generatedHTMLEnd = `</h1></div>
<form>
<label>Jaka to część mowy?</label></br>
<select id="selecting" size="3">
    <option value="rzeczownik">rzeczownik</option>
    <option value="czasownik">czasownik</option>
    <option value="przymiotnik">przymiotnik</option>
</select></br>
<button id="submit">Wyślij</button>
</form>`;

const generatedHTMLCharacterStart = `<div id=""headerDiv"><h1 id="character">`;
const generatedHTMLCharacterEnd = `</h1></div>
<div><label>Przeczytaj to</label></br>
    <button value="good" id="good">Dobrze</button>
    <button value="bad" id="bad">Źle</button></div>`;

const generatedHTMLMathStart = `<div id=""headerDiv"><h1 id="numbers">`;
const generatedHTMLMathEnd = `</h1></div>
<form>
<label>Jaki jest wynik tego działania?</label></br>
<input type="number" id="result"/></br>
<button id="submit">Wyślij</button>
</form></br></hr>`;

const lastMessageStart = `<h3>Skończyłeś test, Twój wynik to `;
function lastMessageMiddle(string) {
    return `%</h3><h1>Wołaj Ojczulka</h1><button type="submit" id="${string}">lub zacznij od nowa</button><div id="sidebar">`;
}