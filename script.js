const output = document.querySelector('.output');
const button = document.querySelector('button');
const player1 = document.querySelector('#player1');
const player2 = document.querySelector('#player2');

const dice = [
  [5],
  [1, 9],
  [1, 5, 9],
  [1, 3, 7, 9],
  [1, 3, 5, 7, 9],
  [1, 3, 4, 6, 7, 9],
];

function roll(num) {
  let rollNumber = Math.floor(Math.random() * num) + 1;
  //   let n = 9855 + rollNumber;
  //   let char = '&#' + n + ';';
  //   return rollNumber + ' ' + char;
  return rollNumber;
}

function builder(num) {
  //   let div = document.createElement('div');
  //   let dieArray = dice[num - 1];
  //   console.log(dieArray);
  //   for (let i = 0; i < 10; i++) {
  //     let span = document.createElement('div');
  //     span.classList.add('dot');
  //     if (dieArray.includes(i)) {
  //       console.log('dark');
  //       span.classList.add('dark');
  //     }
  //     div.appendChild(span);
  //   }
  //   div.classList.add('dicer');
  //   return div;

  let div = document.createElement('div');
  let dieArray = dice[num - 1];
  console.log(dieArray);
  for (let x = 1; x < 10; x++) {
    let span = document.createElement('div');
    span.setAttribute('class', 'dot');
    if (dieArray.includes(x)) {
      span.classList.add('dark');
    }
    div.appendChild(span);
  }
  div.setAttribute('class', 'dicer');
  return div;
}

function updateOutput(el, num) {
  let holder = builder(num);
  if (el.children[0]) {
    el.removeChild(el.children[0]);
  }
  el.appendChild(holder);
}

button.addEventListener('click', function () {
  //   let rolls = [roll(6), roll(6)];
  //   let temp;
  //   console.log(rolls);
  //   if (rolls[0] === rolls[1]) {
  //     temp = 'Draw!';
  //   } else if (rolls[0] > rolls[1]) {
  //     temp = 'Player 1 wins!';
  //   } else {
  //     temp = 'Player 2 wins!';
  //   }
  //   output.innerHTML = temp;
  //   player1.innerHTML = rolls[0];
  //   player2.innerHTML = rolls[1];

  let rolls = [roll(6), roll(6)];
  console.log(rolls);
  let temp;
  if (rolls[0] === rolls[1]) {
    temp = 'Draw!';
  } else if (rolls[0] > rolls[1]) {
    temp = 'Player 1 wins!';
  } else {
    temp = 'Player 2 wins!';
  }

  updateOutput(player1, rolls[0]);
  updateOutput(player2, rolls[1]);
  output.innerHTML = temp;
});
