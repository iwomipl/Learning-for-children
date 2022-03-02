const restartButtonWord = `<button type="submit" id="starter">Od Nowa</button>`;
const restartButtonCharacter = `<button type="submit" id="newStart">Od Nowa</button>`;

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


const lastMessageStart = `<h3>Skończyłeś test, Twój wynik to `;
function lastMessageMiddle(string) {
    return `%</h3><h1>Wołaj Ojczulka</h1><button type="submit" id="${string}">lub zacznij od nowa</button><div id="sidebar">`;
}