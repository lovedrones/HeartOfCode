const startButton = document.querySelector('.starter')
const hid = document.getElementById('hidden-question')
const nextButton = document.getElementById('next-btn')


function startGame() {
  var typed1 = new Typed('#quest', {
        // Waits 1000ms after typing "First"
        strings: [ 
           'Missing Something, <br> Young Codesmith? ^1000',
        'Well, Ill be damned, too busy to notice your Princess is gone! ^4000',
         'Ill tell you,<br>but youll have to tell me some things first...',
          ],
          startDelay: 1000,
        typeSpeed: 50,
       });
       var typed2 = new Typed('#playerbox p', {
        // Waits 1000ms after typing "First"
        strings: [
    '???? ^4500',
    'WHAT!? ^500 <br> WHERE... <br> WHERE IS SHE!? ^5000 ',
      '... ?'
    ],
        startDelay: 4700,
        typeSpeed: 50,
       });
       
};

function next() {
  hid.classList.remove('hide');
  shuffledQuestions = questions.sort(() => Math.random() - .5);
  currentQuestionIndex = 0;
  setNextQuestion();
  };

