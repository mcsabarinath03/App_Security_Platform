// ============================================================
//  QuizMaster Pro — script.js
// ============================================================

const allQuestions = [

  // ===== WORLD CUP =====
  {
    category: "World Cup",
    question: "Which country has won the FIFA World Cup the most times?",
    options: ["Germany", "Argentina", "Italy", "Brazil"],
    answer: 3
  },
  {
    category: "World Cup",
    question: "Who scored the famous 'Hand of God' goal in the 1986 World Cup?",
    options: ["Pelé", "Ronaldo", "Diego Maradona", "Zinedine Zidane"],
    answer: 2
  },
  {
    category: "World Cup",
    question: "Which country hosted the 2022 FIFA World Cup?",
    options: ["Saudi Arabia", "UAE", "Qatar", "Bahrain"],
    answer: 2
  },
  {
    category: "World Cup",
    question: "Who won the Golden Boot at the 2018 FIFA World Cup?",
    options: ["Cristiano Ronaldo", "Kylian Mbappé", "Harry Kane", "Romelu Lukaku"],
    answer: 2
  },
  {
    category: "World Cup",
    question: "Which nation won the 2022 FIFA World Cup?",
    options: ["France", "Brazil", "Argentina", "Croatia"],
    answer: 2
  },
  {
    category: "World Cup",
    question: "How many times has Germany (including West Germany) won the World Cup?",
    options: ["3", "4", "5", "2"],
    answer: 1
  },
  {
    category: "World Cup",
    question: "Who holds the record for most goals scored in FIFA World Cup history?",
    options: ["Ronaldo (Brazil)", "Miroslav Klose", "Pelé", "Gerd Müller"],
    answer: 1
  },
  {
    category: "World Cup",
    question: "Which player won the Golden Ball (Best Player) at the 2022 World Cup?",
    options: ["Kylian Mbappé", "Lionel Messi", "Luka Modrić", "Emi Martínez"],
    answer: 1
  },

  // ===== CHAMPIONS LEAGUE =====
  {
    category: "Champions League",
    question: "Which club has won the UEFA Champions League the most times?",
    options: ["Barcelona", "Bayern Munich", "AC Milan", "Real Madrid"],
    answer: 3
  },
  {
    category: "Champions League",
    question: "Who scored the winning penalty in the 2012 Champions League final for Chelsea?",
    options: ["Frank Lampard", "Didier Drogba", "Ashley Cole", "Juan Mata"],
    answer: 1
  },
  {
    category: "Champions League",
    question: "Which city hosted the 2023 UEFA Champions League final?",
    options: ["Paris", "London", "Istanbul", "Lisbon"],
    answer: 2
  },
  {
    category: "Champions League",
    question: "Who is the all-time top scorer in UEFA Champions League history?",
    options: ["Lionel Messi", "Karim Benzema", "Cristiano Ronaldo", "Raúl"],
    answer: 2
  },
  {
    category: "Champions League",
    question: "Which team completed a historic comeback against Barcelona in the 2019 UCL semi-final?",
    options: ["Ajax", "Manchester City", "Liverpool", "Tottenham"],
    answer: 2
  },
  {
    category: "Champions League",
    question: "Which club won the 2023–24 UEFA Champions League?",
    options: ["Manchester City", "Borussia Dortmund", "Real Madrid", "Bayern Munich"],
    answer: 2
  },
  {
    category: "Champions League",
    question: "What is the anthem of the UEFA Champions League officially called?",
    options: ["Champions Hymn", "UEFA Anthem", "The Champions", "Zadok the Priest"],
    answer: 3
  },

  // ===== PREMIER LEAGUE =====
  {
    category: "Premier League",
    question: "Which club has won the most Premier League titles?",
    options: ["Liverpool", "Arsenal", "Chelsea", "Manchester United"],
    answer: 3
  },
  {
    category: "Premier League",
    question: "Who scored 'that' last-minute title-winning goal for Man City against QPR in 2012?",
    options: ["Mario Balotelli", "Carlos Tevez", "Sergio Agüero", "Edin Džeko"],
    answer: 2
  },
  {
    category: "Premier League",
    question: "Which player holds the record for most Premier League goals?",
    options: ["Wayne Rooney", "Frank Lampard", "Andrew Cole", "Alan Shearer"],
    answer: 3
  },
  {
    category: "Premier League",
    question: "Which club went an entire Premier League season unbeaten (2003–04)?",
    options: ["Chelsea", "Arsenal", "Manchester United", "Liverpool"],
    answer: 1
  },
  {
    category: "Premier League",
    question: "Who won the Premier League Golden Boot in the 2023–24 season?",
    options: ["Erling Haaland", "Mohamed Salah", "Cole Palmer", "Ollie Watkins"],
    answer: 0
  },

  // ===== LA LIGA =====
  {
    category: "La Liga",
    question: "Which club has won La Liga the most times?",
    options: ["Barcelona", "Atletico Madrid", "Real Madrid", "Valencia"],
    answer: 2
  },
  {
    category: "La Liga",
    question: "Who holds the record for most La Liga goals in a single season?",
    options: ["Cristiano Ronaldo", "Lionel Messi", "Hugo Sánchez", "Telmo Zarra"],
    answer: 1
  },
  {
    category: "La Liga",
    question: "What is the name of the fierce rivalry match between Real Madrid and Barcelona?",
    options: ["El Clásico", "El Derbi", "La Batalla", "El Grande"],
    answer: 0
  },
  {
    category: "La Liga",
    question: "Which La Liga club plays their home games at the Estadio Metropolitano?",
    options: ["Sevilla", "Valencia", "Atletico Madrid", "Real Betis"],
    answer: 2
  },

  // ===== BUNDESLIGA =====
  {
    category: "Bundesliga",
    question: "Which club has dominated the Bundesliga with the most consecutive titles (2013–2023)?",
    options: ["Borussia Dortmund", "Bayer Leverkusen", "Bayern Munich", "RB Leipzig"],
    answer: 2
  },
  {
    category: "Bundesliga",
    question: "Who scored 40 Bundesliga goals in a single season (2015–16), a record?",
    options: ["Thomas Müller", "Mario Lewandowski", "Robert Lewandowski", "Gerd Müller"],
    answer: 2
  },
  {
    category: "Bundesliga",
    question: "Which club ended Bayern Munich's 11-year Bundesliga title streak in 2023–24?",
    options: ["Borussia Dortmund", "RB Leipzig", "Bayer Leverkusen", "Stuttgart"],
    answer: 2
  },
  {
    category: "Bundesliga",
    question: "What is the nickname of Borussia Dortmund?",
    options: ["The Black Eagles", "Die Roten", "BVB / Die Schwarzgelben", "Der Klassiker"],
    answer: 2
  },

  // ===== SERIE A =====
  {
    category: "Serie A",
    question: "Which Italian club holds the record for most Serie A titles?",
    options: ["AC Milan", "Inter Milan", "Roma", "Juventus"],
    answer: 3
  },
  {
    category: "Serie A",
    question: "Who is known as 'Il Fenomeno' and had a legendary spell at Inter Milan?",
    options: ["Roberto Baggio", "Ronaldo (Brazil)", "Zlatan Ibrahimović", "Gabriel Batistuta"],
    answer: 1
  },
  {
    category: "Serie A",
    question: "Which club won the Serie A title in 2023–24?",
    options: ["Juventus", "Napoli", "AC Milan", "Inter Milan"],
    answer: 3
  },

  // ===== LIGUE 1 =====
  {
    category: "Ligue 1",
    question: "Which club has dominated Ligue 1 since 2013, winning multiple consecutive titles?",
    options: ["Lyon", "Marseille", "Monaco", "Paris Saint-Germain"],
    answer: 3
  },
  {
    category: "Ligue 1",
    question: "Which player became the all-time top scorer in Ligue 1 history?",
    options: ["Zlatan Ibrahimović", "Thierry Henry", "Kylian Mbappé", "Edinson Cavani"],
    answer: 2
  },
  {
    category: "Ligue 1",
    question: "Which club is known as 'Les Olympiens' and is PSG's biggest rival?",
    options: ["Lyon", "Monaco", "Marseille", "Lille"],
    answer: 2
  }
];

// Pick 10 random questions, shuffled across all categories
function getRandomQuestions(pool, count = 10) {
  const shuffled = [...pool].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

const questions = getRandomQuestions(allQuestions);

// ======= STATE =======
let currentIndex = 0;
let score = 0;
let correctCount = 0;
let wrongCount = 0;
let skippedCount = 0;
let timerInterval = null;
let timeLeft = 20;
const TIMER_SECONDS = 20;
const CIRCUMFERENCE = 100; // matches stroke-dasharray

// ======= DOM REFS =======
const startScreen   = document.getElementById('start-screen');
const quizScreen    = document.getElementById('quiz-screen');
const resultScreen  = document.getElementById('result-screen');
const startBtn      = document.getElementById('start-btn');
const restartBtn    = document.getElementById('restart-btn');
const qNumber       = document.getElementById('q-number');
const progressFill  = document.getElementById('progress-fill');
const timerDisplay  = document.getElementById('timer-display');
const ringFill      = document.getElementById('ring-fill');
const categoryTag   = document.getElementById('category-tag');
const questionText  = document.getElementById('question-text');
const optionsGrid   = document.getElementById('options-grid');
const liveScore     = document.getElementById('live-score');
const finalScore    = document.getElementById('final-score');
const resultEmoji   = document.getElementById('result-emoji');
const resultTitle   = document.getElementById('result-title');
const resultMessage = document.getElementById('result-message');
const statCorrect   = document.getElementById('stat-correct');
const statWrong     = document.getElementById('stat-wrong');
const statSkipped   = document.getElementById('stat-skipped');

// ======= SCREEN SWITCHER =======
function showScreen(screen) {
  [startScreen, quizScreen, resultScreen].forEach(s => s.classList.remove('active'));
  screen.classList.add('active');
}

// ======= START =======
startBtn.addEventListener('click', startQuiz);
restartBtn.addEventListener('click', startQuiz);

function startQuiz() {
  currentIndex = 0;
  score = 0;
  correctCount = 0;
  wrongCount = 0;
  skippedCount = 0;
  liveScore.textContent = '0';
  showScreen(quizScreen);
  loadQuestion();
}

// ======= LOAD QUESTION =======
function loadQuestion() {
  clearTimer();

  const q = questions[currentIndex];
  const labels = ['A', 'B', 'C', 'D'];

  // Update header
  qNumber.textContent = currentIndex + 1;
  progressFill.style.width = `${((currentIndex + 1) / questions.length) * 100}%`;

  // Update card
  categoryTag.textContent = q.category;
  questionText.textContent = q.question;

  // Render options
  optionsGrid.innerHTML = '';
  q.options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.innerHTML = `<span class="option-label">${labels[i]}</span>${opt}`;
    btn.addEventListener('click', () => selectAnswer(i, btn));
    optionsGrid.appendChild(btn);
  });

  // Start timer
  timeLeft = TIMER_SECONDS;
  updateTimerDisplay();
  ringFill.classList.remove('danger');
  timerInterval = setInterval(tickTimer, 1000);
}

// ======= TIMER =======
function tickTimer() {
  timeLeft--;
  updateTimerDisplay();
  if (timeLeft <= 5) ringFill.classList.add('danger');
  if (timeLeft <= 0) {
    clearTimer();
    skippedCount++;
    showCorrectAnswer();
    setTimeout(nextQuestion, 1200);
  }
}

function updateTimerDisplay() {
  timerDisplay.textContent = timeLeft;
  const offset = CIRCUMFERENCE - (timeLeft / TIMER_SECONDS) * CIRCUMFERENCE;
  ringFill.style.strokeDashoffset = offset;
}

function clearTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
}

// ======= ANSWER SELECTION =======
function selectAnswer(selectedIndex, clickedBtn) {
  clearTimer();
  const q = questions[currentIndex];
  const allBtns = optionsGrid.querySelectorAll('.option-btn');

  // Disable all buttons
  allBtns.forEach(b => b.disabled = true);

  if (selectedIndex === q.answer) {
    clickedBtn.classList.add('correct');
    score++;
    correctCount++;
    liveScore.textContent = score;
  } else {
    clickedBtn.classList.add('wrong');
    wrongCount++;
    showCorrectAnswer();
  }

  setTimeout(nextQuestion, 1200);
}

function showCorrectAnswer() {
  const allBtns = optionsGrid.querySelectorAll('.option-btn');
  allBtns.forEach(b => b.disabled = true);
  allBtns[questions[currentIndex].answer].classList.add('correct');
}

// ======= NEXT QUESTION =======
function nextQuestion() {
  currentIndex++;
  if (currentIndex < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

// ======= RESULT =======
function showResult() {
  finalScore.textContent = score;
  statCorrect.textContent = correctCount;
  statWrong.textContent = wrongCount;
  statSkipped.textContent = skippedCount;

  const pct = (score / questions.length) * 100;

  if (pct === 100) {
    resultEmoji.textContent = '🏆';
    resultTitle.textContent = 'Perfect Score!';
    resultMessage.textContent = 'You got every single question right. Incredible!';
  } else if (pct >= 80) {
    resultEmoji.textContent = '🎉';
    resultTitle.textContent = 'Excellent!';
    resultMessage.textContent = 'Outstanding performance! You really know your stuff.';
  } else if (pct >= 60) {
    resultEmoji.textContent = '😊';
    resultTitle.textContent = 'Good Job!';
    resultMessage.textContent = 'Solid effort! A little more practice and you\'ll ace it.';
  } else if (pct >= 40) {
    resultEmoji.textContent = '🤔';
    resultTitle.textContent = 'Not Bad!';
    resultMessage.textContent = 'You\'re getting there. Keep practicing!';
  } else {
    resultEmoji.textContent = '💪';
    resultTitle.textContent = 'Keep Going!';
    resultMessage.textContent = 'Every expert was once a beginner. Try again!';
  }

  showScreen(resultScreen);
}