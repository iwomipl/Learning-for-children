function getRandomNumberFloor(number) {
  return Math.floor(Math.random() * number);
}

function getRandomNumberCeil(number) {
  return Math.ceil(Math.random() * number);
}

function getRandomNumberSmallerThan(number) {
  let tempNum;
  do {
      tempNum = Math.floor(Math.random() * number);      
  } while(tempNum <= (maxMath <=3 ? 0 : Math.floor(number/2) || 0));
  return tempNum;
}

function getRandomPositiveNumber(number) {
  let tempNum;
  do {
      tempNum = Math.floor(Math.random() * number);
  } while(tempNum <= 2)
  return tempNum;
}

function checkifAwnserIsRigthMath(awnser) {

  if (awnser === mathResult) {
      points++;
      countOfAnswers++;
      if (awnser !== undefined || !Number.isNaN(awnser)) {
          // addedParagraph.push(`<p class="right">${awnser} to dobry wynik działania<strong> ${mathNumber1} ${mathSign} ${mathNumber2}</strong></p>`);
          addedParagraph.push(`<p class="right">${awnser} to dobry wynik działania<strong> ${mathEquation}</strong></p>`);
      }
      if (addedParagraph.length > maxParagraphLength) {
          addedParagraph.shift();
      }
  } else {
      countOfAnswers++;
      // addedParagraph.push(`<p class="wrong">${awnser} to zły wynik działania<strong> ${mathNumber1} ${mathSign} ${mathNumber2}</strong>, dobry wynik to ${mathResult}</p>`);
      addedParagraph.push(`<p class="wrong">${awnser} to zły wynik działania<strong> ${mathEquation}</strong>, dobry wynik to ${mathResult}</p>`);
      if (addedParagraph.length > maxParagraphLength) {
          addedParagraph.shift();
      }
  }
}

//ORIDGINAL MATHSWITCH

// function mathSwitch() {
//     const randNum = getRandomNumber(maxMath);
//     mathNumber1 = getRandomNumber(numAToRandomMath);
//     mathNumber2 = getRandomNumber(9);

//     switch (randNum) {
//         case 0:
//             mathResult = mathNumber1 + mathNumber2;
//             mathSign = '+';
//             return;
//         case 1:
//             mathResult = substract();
//             mathSign = '-';
//             return;
//         case 2:
//             mathResult = multiply();
//             mathSign = '*';
//             return;
//         default:
//             mathResult = divide();
//             mathSign = '/';
//             return;
//     }
// }

function randomEquationGenerator() {
    const elementsArray = [];
    // const randNum = getRandomNumber(maxMath * 2 + 1);

    const generateIndexOfSign = (length)=>{
        return maxMath <5 ? maxMath-1 : length;
    }

    const properNumberGenerator = (index) => {
        let indexOfSign = Math.round(Math.random() * (generateIndexOfSign(mathArray.length -2)));

        if (indexOfSign === 3 && elementsArray.includes(mathArray[3])) {
            indexOfSign = properNumberGenerator(index);
        } else if (indexOfSign === 4 && elementsArray.includes(mathArray[4])) {
            indexOfSign = properNumberGenerator(index);
        }
        return indexOfSign;
    }

    let index = 0
    do {
        let indexOfSign = properNumberGenerator(maxMath < 3 ? index : index+Math.round(Math.random() * maxMath%3));
        elementsArray.push(mathArray[indexOfSign])
        index++;
    } while (index < Math.ceil(maxMath%2))
    // for (let i = 0; i < maxMath-1; i++) {
    //     let indexOfSign = properNumberGenerator(i);
    //     elementsArray.push(mathArray[indexOfSign])

    // }numAToRandomMath
    const indexOfPharenthesis = elementsArray.indexOf('(');
    if (indexOfPharenthesis >= 0) {
        elementsArray[indexOfPharenthesis] = `${mathArray[getRandomNumberFloor(3)]}${elementsArray[indexOfPharenthesis]}`
        if (indexOfPharenthesis === elementsArray.length - 1) {
            elementsArray[indexOfPharenthesis + 1] = mathArray[getRandomNumberFloor(2)];
        }
        elementsArray[indexOfPharenthesis + 2] = elementsArray[indexOfPharenthesis + 2] === undefined ? ')' : `)${elementsArray[indexOfPharenthesis + 2]}`
        //@TODO- misstake when pharentesis is on the last index

    }
    const resultArray = [];

    elementsArray.map((element, ind) => {
        let el = element;
        let randomNumber = getRandomNumberFloor(numAToRandomMath) + 1;
        if (el === '/') {
            if (resultArray.length === 0) {
                resultArray.push(getRandomNumberFloor(numAToRandomMath) + 1);
                return;
            }

            if (!!elementsArray[ind + 1] && elementsArray[ind + 1] === '(') {
                el = mathArray[getRandomNumberFloor(2)];
            }

            if (ind === elementsArray.length - 1) {
                resultArray.push(randomNumber);
                if (el !== ')') {
                    resultArray.push(el)
                    resultArray.push(getRandomNumberFloor(numAToRandomMath) + 1)
                } else {
                    resultArray.push(el)
                    resultArray.push(mathArray[getRandomNumberFloor(2)])
                    resultArray.push(getRandomNumberFloor(numAToRandomMath) + 1);
                }
                return;
            }


            resultArray.push(resultArray[resultArray.length - 2] % randomNumber === 0 ? randomNumber : resultArray[resultArray.length - 2], el);
            //CASE ZERO CASE PHARENTESIS





            // resultArray.push(`${el}${resultArray[resultArray.length - 1] % randomNumber === 0 ? randomNumber : resultArray[resultArray.length - 1]}`);
        } else if (ind === elementsArray.length - 1) {
            resultArray.push(randomNumber);
            if (el !== ')') {
                resultArray.push(el)
                resultArray.push(getRandomNumberFloor(numAToRandomMath) + 1)
            } else {
                resultArray.push(el)
                resultArray.push(mathArray[getRandomNumberFloor(2)])
                resultArray.push(getRandomNumberFloor(numAToRandomMath) + 1);
            }

        } else {
            resultArray.push(randomNumber)
            if (el !== ')') {
                resultArray.push(el)
                // resultArray.push(getRandomNumber(numAToRandomMath) + 1)
            } else {
                resultArray.push(el)
                resultArray.push(mathArray[getRandomNumberFloor(2)])
                resultArray.push(getRandomNumberFloor(numAToRandomMath) + 1);
            }
        }
    });
    return resultArray.join('');
}

function parse(str) {
    return Function(`'use strict'; return (${str})`)()
}

function isNatural(n) {
    if (typeof n !== 'number')
        return 'Not a number';

    return (n >= 0.0) && (Math.floor(n) === n) && n !== Infinity;
}

function mathSwitch() {
    // const randNum = getRandomNumber(maxMath);
    // mathNumber1 = getRandomNumber(numAToRandomMath);
    // mathNumber2 = getRandomNumber(9);

    do {
        mathEquation = randomEquationGenerator();
        mathResult = Number(parse(mathEquation));
    } while (!isNatural(mathResult) && !mathEquation.includes("(") && !mathEquation.includes("*"))
}

function addAndSubsSwitch(){
    const randNum = getRandomNumberFloor(maxMath);
    mathNumber1 = getRandomPositiveNumber(maxMath <= 3 ? 15 : maxMath == 4 ? maxMath * 10 : maxMath * 15);
    mathNumber2 = getRandomNumberSmallerThan(mathNumber1);
    switch (randNum) {      
        case 0:
        case 2:
            mathResult = mathNumber1 + mathNumber2;
            mathEquation = `${mathNumber1}+${mathNumber2}`;
            return;
        case 1:
        case 3:
            mathResult = mathNumber1 - mathNumber2;
            mathEquation = `${mathNumber1}-${mathNumber2}`;
            return;
    }
}

function multiAndDivideSwitch(){
    const randNum = getRandomNumberCeil(maxMath);
    mathNumber1 = getRandomPositiveNumber(maxMath <= 1 ? 4 : maxMath * (maxMath == 4 ? 4 : 2));
    mathNumber2 = getRandomNumberSmallerThan(mathNumber1);
    switch (randNum) {      
        case 1:
        case 3:
        case 5:
            mathResult = multiply(mathNumber1 * mathNumber2);
            mathEquation = `${mathNumber1}*${mathNumber2}`;
            return;
        case 2:
        case 4:
            mathResult = divide(mathNumber1, mathNumber2);
            mathEquation = `${mathNumber1}/${mathNumber2}`;
            return;
    }
}

// function substract() {
//     if (mathNumber1 >= mathNumber2) {
//         return mathNumber1 - mathNumber2;
//     } else {
//         mathNumber1 = getRandomNumberFloor(numAToRandomMath);
//         mathNumber2 = getRandomNumberFloor(9);
//         return substract()
//     }
// }

function multiply() {
    if (mathNumber1 !== 0 && mathNumber2 !== 0) {
        return mathNumber1 * mathNumber2;
    } else {
        mathNumber1 = getRandomPositiveNumber(maxMath <= 1 ? 4 : maxMath * (maxMath == 4 ? 4 : 2));
        mathNumber2 = getRandomNumberSmallerThan(mathNumber1);
        return multiply();
    }
}
function divide() {
    if (mathNumber1 !== 0 && mathNumber2 !== 0) {
        mathNumber1 = mathNumber1 * mathNumber2;
        return mathNumber1 / mathNumber2;
    } else {
        mathNumber1 = getRandomPositiveNumber(maxMath <= 1 ? 4 : maxMath * (maxMath == 4 ? 4 : 2));
        mathNumber2 = getRandomNumberSmallerThan(mathNumber1);
        return divide();
    }
}
