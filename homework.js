#### Episode 1
```js
const scenario = {
  murderer: 'Miss Scarlet',
  room: 'Library',
  weapon: 'Rope'
};

const declareMurderer = function() {
  return `The murderer is ${scenario.murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);
```

// The murderer is 'Miss Scarlet'. The scenario object has been set up as a constant
// and no change has been made to this. The 'murderer' key is within the constant
// but is able to be called outwith it's own block.

#### Episode 2
```js
const murderer = 'Professor Plum';

const changeMurderer = function() {
  murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);
```

// The murderer is 'Professor Plum'. A constant is created with Professor Plum as
// a string and an attempt is made to change the murderer via the changeMurderer
// constant. the changeMurderer constant will fail and the original constant
// (murderer = 'Professor Plum') will ensure an error is produced.

#### Episode 3
```js
let murderer = 'Professor Plum';

const declareMurderer = function() {
  let murderer = 'Mrs. Peacock';
  return `The murderer is ${murderer}.`;
}

const firstVerdict = declareMurderer();
console.log('First Verdict: ', firstVerdict);

const secondVerdict = `The murderer is ${murderer}.`;
console.log('Second Verdict: ', secondVerdict);
```
// firstVerdict will be Mrs Peacock. A 'let' variable is created within 'declareMurderer'
// and called there, so this variable should overwrite the initial let variable. The second
// verdict shall be Professor Plum as this ignores the let murderer = 'Mrs Peacock' which
// is only visible within the declareMurderer function

#### Episode 4
```js
let suspectOne = 'Miss Scarlet';
let suspectTwo = 'Professor Plum';
let suspectThree = 'Mrs. Peacock';

const declareAllSuspects = function() {
  let suspectThree = 'Colonel Mustard';
  return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
}

const suspects = declareAllSuspects();
console.log(suspects);
console.log(`Suspect three is ${suspectThree}.`);
```
// Suspect three is Colonel Mustard. The initial let variables are set and suspectThree
// is altered in the constant declareAllSuspects. As the let suspectThree variable is set
// and returned within declareAllSuspects, the variabl will have changed to Col. Mustard.
// interesting - I got this wrong. I see why now.
// The let suspectThree only changes for declareAllSuspects and the result of it's
// string interpolation. As the let suspectThree variable is set within declareAllSuspects,
// it is only visible within the declareAllSuspects block.

#### Episode 5
```js
const scenario = {
  murderer: 'Miss Scarlet',
  room: 'Kitchen',
  weapon: 'Candle Stick'
};

const changeWeapon = function(newWeapon) {
  scenario.weapon = newWeapon;
}

const declareWeapon = function() {
  return `The weapon is the ${scenario.weapon}.`;
}

changeWeapon('Revolver');
const verdict = declareWeapon();
console.log(verdict);
```
// The constant object will allow a key to be updated via changeWeapon. Although it
// is a constant, the object can allow these changes. The console will log 'Revolver'

#### Episode 6
```js
let murderer = 'Colonel Mustard';

const changeMurderer = function() {
  murderer = 'Mr. Green';

  const plotTwist = function() {
    murderer = 'Mrs. White';
  }

  plotTwist();
}

const declareMurderer = function () {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);
```
// The initial let variable can be changed. The constant changeMurderer cannot be
// changed but it's function is changing a let variable, which is permissable.
// The constant plotTwist is also able to change the let variable. It is called and
// the murdere becomes 'Mrs White' for 'declareMurderer'. The let variable 'murderer'
// is changed again and the murderer is 'Mr Green'
// wrong -  I thought murderer would have changed. I can see that no option was
// added before 'murderer' in either changeMurderer or plotTwist. Does this default
// murderer to be a constant when plotTwist is called?

#### Episode 7
```js
let murderer = 'Professor Plum';

const changeMurderer = function() {
  murderer = 'Mr. Green';

  const plotTwist = function() {
    let murderer = 'Colonel Mustard';

    const unexpectedOutcome = function() {
      murderer = 'Miss Scarlet';
    }

    unexpectedOutcome();
  }

  plotTwist();
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);
```
// The murderer is set within the initial let variable. This is then changed
// to 'Mr. Green' within changeMurderer. As the murderer is now a constant, as seen
// in the previous example, no further changes are permissable.

#### Episode 8
```js
const scenario = {
  murderer: 'Mrs. Peacock',
  room: 'Conservatory',
  weapon: 'Lead Pipe'
};

const changeScenario = function() {
  scenario.murderer = 'Mrs. Peacock';
  scenario.room = 'Dining Room';

  const plotTwist = function(room) {
    if (scenario.room === room) {
      scenario.murderer = 'Colonel Mustard';
    }

    const unexpectedOutcome = function(murderer) {
      if (scenario.murderer === murderer) {
        scenario.weapon = 'Candle Stick';
      }
    }

    unexpectedOutcome('Colonel Mustard');
  }

  plotTwist('Dining Room');
}

const declareWeapon = function() {
  return `The weapon is ${scenario.weapon}.`
}

changeScenario();
const verdict = declareWeapon();
console.log(verdict);
```
// Although changeScenario is at the bottom of the code section, when it is called
// it also runs unexpectedOutcome and plotTwist, changing the scenario room to
// dining room, allowing plotTwist to function, changing the murderer to Colonel Mustard
// and allowing unexpectedOutcome to change the weapon to Candle Stick

#### Episode 9
```js
let murderer = 'Professor Plum';

if (murderer === 'Professor Plum') {
  let murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);
// The murderer is changed with a let variable inside a block and is not called
// - the murderer is Professor Plum.
