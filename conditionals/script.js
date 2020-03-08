'use strict';


async function runAdventure() {
  let chosenChoice = null;

  setQuestion('Select adventurer weapon:');
  addChoice('crossbow');
  addChoice('Sword');
  addChoice('Bow');
  addChoice('Cheese');
  chosenChoice = await getChoice();
  
  if (chosenChoice === 'crossbow') {
    setQuestion('You see a goblin up ahead! He notices you have cheese and lets you pass. You then come to a town. What do you do?');
    addChoice('run away');
    addChoice('talk to him');
    addChoice('Fight him');
    addChoice('sing him "staying alive"');
    chosenChoice = await getChoice();  

    if (chosenChoice === 'Fight him') {
      setQuestion('he fought back and lost')
    }
    
    
    }

  if (chosenChoice === 'Bow') {
    setQuestion('You see a goblin up ahead! He notices you have cheese and lets you pass. You then come to a town. What do you do?');
    addChoice('run away');
    addChoice('talk to him');
    addChoice('Fight him');
    addChoice('sing him "staying alive"');
    chosenChoice = await getChoice();
    if (chosenChoice === 'Fight him') {
    setQuestion('he called for backup')}

    else {
    setQuestion('congrats you win'); 
    addChoice('play again');
    chosenChoice = await
    getChoice();
    runAdventure()
    }}}

  
 














/* --------------------------------------- */
/* -------DON'T TOUCH ANTHING BELOW------- */
/* --------------------------------------- */

window.chosenChoice = null;

const questionElement = document.getElementById('question');
const choicesElement = document.getElementById('choices');


function setQuestion(questionText) {
  questionElement.textContent = questionText;
}

function addChoice(choiceText) {
  const wrapperElement = document.createElement('div');
  wrapperElement.setAttribute('class', 'choice');

  const inputElement = document.createElement('input');
  inputElement.setAttribute('type', 'radio');
  inputElement.setAttribute('name', 'choice');
  inputElement.value = choiceText;
  inputElement.onclick = () => {
    window.chosenChoice = choiceText;
  };

  const labelElement = document.createElement('label');
  labelElement.for = choiceText;
  labelElement.textContent = choiceText;

  wrapperElement.appendChild(inputElement);
  wrapperElement.appendChild(labelElement);
  document.getElementById('choices').appendChild(wrapperElement);
}
function clearChoices() {
  while (choicesElement.lastChild) {
    choicesElement.removeChild(choicesElement.lastChild);
  }
}

function getChoice() {
  return new Promise(resolve => {
    const interval = setInterval(() => {
      if (window.chosenChoice !== null) {
        const returnValue = window.chosenChoice;
        window.chosenChoice = null;
        clearInterval(interval);
        setQuestion('');
        clearChoices();
        resolve(returnValue);
      } 
    }, 100);
  });
}

runAdventure();
