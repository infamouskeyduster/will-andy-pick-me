var questionInput = document.querySelector('.ask-input');
var getAnswerButton = document.querySelector('.get-answer-btn');
var eightBallContainer = document.querySelector('.eight-ball-img-container');
var questionDisplayed = document.querySelector('.display-question');
var responseDisplayed = document.querySelector('.display-response');
var clearBtn = document.querySelector('.clear-btn');
var favoriteBtn = document.querySelector('.favorite-btn');
var favoritesText = document.querySelector('.favorites-text');
var responses = [
  'It is certain.',
  'It is decidedly so.',
  'Without a doubt.',
  'Yes - definitely.',
  'You may rely on it.',
  'As I see it, yes.',
  'Most likely.',
  'Outlook good.',
  'Yes.',
  'Signs point to yes.',
  'Reply hazy, try again.',
  'Ask again later.',
  'Better not tell you now.',
  'Cannot predict now.',
  'Concentrate and ask again.',
  'Don\'t count on it.',
  'My reply is no.',
  'My sources say no.',
  'Outlook not so good.',
  'Very doubtful.',
];

getAnswerButton.addEventListener('click', displayResponse);
clearBtn.addEventListener('click', clearAll);
favoriteBtn.addEventListener('click', favoriteThis);

function displayResponse() {
  var questionInput = document.querySelector('.ask-input');
  var randomIndexValue = Math.floor(Math.random() * 20);
  if (questionInput.value.length > 0) {
    eightBallContainer.classList.add('hidden');
    clearBtn.classList.add('active');
    favoriteBtn.classList.remove('hidden');
    questionDisplayed.innerText = `"${questionInput.value}"`;
    responseDisplayed.innerText =  responses[randomIndexValue];
    questionInput.value = '';
  }
};

function clearAll() {
  questionDisplayed.innerText = '';
  responseDisplayed.innerText = '';
  eightBallContainer.classList.remove('hidden');
  clearBtn.classList.remove('active');
  favoriteBtn.classList.add('hidden');
  favoritesText.innerHTML = ``;
};

function favoriteThis() {
  localStorage.setItem('Q:', questionDisplayed.innerText);
  localStorage.setItem('A:', responseDisplayed.innerText);

  for (var i = 0; i < localStorage.length; i++) {
    var key = localStorage.key(i);
    var value = localStorage.getItem(key);
    favoritesText.innerHTML += `<span>${key} ${value}</span><br />`;
  }

  favoritesText.innerHTML += `<hr>`;
};
