// Full updated code with enhancements

import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import tacQuestions from './data/tacQuestions';

const symbols = [
  '/images/m1.png', '/images/m2.png', '/images/m3.png', '/images/m4.png',
  '/images/m5.png', '/images/m6.png', '/images/m7.png', '/images/m8.png',
  '/images/m9.png', '/images/m10.png', '/images/m11.png', '/images/m12.png',
  '/images/m13.png', '/images/m14.png', '/images/m15.png', '/images/m16.png', '/images/m17.png', '/images/m18.png', '/images/m19.png', '/images/m20.png', '/images/m21.png'
];

type CardType = {
  id: number;
  symbol: string;
  isFlipped: boolean;
  isMatched: boolean;
};

type QuizAnswerState = {
  selectedOption: string | null;
  isCorrect: boolean | null;
};

const App: React.FC = () => {
  const [cards, setCards] = useState<CardType[]>([]);
  const [selected, setSelected] = useState<number[]>([]);
  const [pairCount, setPairCount] = useState(2);
  const [trials, setTrials] = useState(3);
  const [originalTrials, setOriginalTrials] = useState(3);
  const [message, setMessage] = useState<string>('');
  const [isGameOver, setIsGameOver] = useState(false);
  const [loading, setLoading] = useState(true);
  const [score, setScore] = useState<number>(0);
  const [startTime, setStartTime] = useState<number>(Date.now());
  const [showFailPopup, setShowFailPopup] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizQuestions, setQuizQuestions] = useState<typeof tacQuestions>([]);
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [answerState, setAnswerState] = useState<QuizAnswerState>({ selectedOption: null, isCorrect: null });
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
  const [fade, setFade] = useState(true);
  const [revealAll, setRevealAll] = useState(false);

  const backgroundMusicRef = useRef<HTMLAudioElement | null>(null);
  const flipSoundRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    backgroundMusicRef.current = new Audio('/sounds/BackSound.mp3');
    backgroundMusicRef.current.loop = true;
    backgroundMusicRef.current.volume = 0.5;

    flipSoundRef.current = new Audio('/sounds/Clicks.mp3');
    flipSoundRef.current.volume = 1.0;

    const timer = setTimeout(() => setLoading(false), 2000);

    return () => {
      clearTimeout(timer);
      backgroundMusicRef.current?.pause();
      backgroundMusicRef.current = null;
      flipSoundRef.current = null;
    };
  }, []);

  const getInitialTrials = (level: number) => 3 + (level - 2) * 2;

  const initializeGame = (pairs: number) => {
    const shuffledSymbols = [...symbols].sort(() => Math.random() - 0.5);
    const chosenSymbols = shuffledSymbols.slice(0, pairs);
    const shuffled = [...chosenSymbols, ...chosenSymbols].sort(() => Math.random() - 0.5);
    const initialCards = shuffled.map((symbol, index) => ({
      id: index,
      symbol,
      isFlipped: false,
      isMatched: false,
    }));

    const initialTrials = getInitialTrials(pairs);

    setCards(initialCards);
    setSelected([]);
    setTrials(initialTrials);
    setOriginalTrials(initialTrials);
    setMessage('');
    setIsGameOver(false);
    setStartTime(Date.now());
    setShowFailPopup(false);
    setShowQuiz(false);
    setCurrentQuizIndex(0);
    setAnswerState({ selectedOption: null, isCorrect: null });
    setCorrectAnswersCount(0);
    setRevealAll(false);
  };

  useEffect(() => {
    if (!loading) {
      initializeGame(pairCount);
    }
  }, [pairCount, loading]);

  const handleClick = (index: number) => {
    if (backgroundMusicRef.current && backgroundMusicRef.current.paused) {
      backgroundMusicRef.current.play().catch(() => {});
    }

    if (
      selected.length === 2 ||
      cards[index].isFlipped ||
      cards[index].isMatched ||
      trials <= 0
    ) return;

    flipSoundRef.current?.play();

    const newCards = [...cards];
    newCards[index].isFlipped = true;
    const newSelected = [...selected, index];
    setCards(newCards);
    setSelected(newSelected);

    if (newSelected.length === 2) {
      const [i1, i2] = newSelected;
      if (newCards[i1].symbol === newCards[i2].symbol) {
        setTimeout(() => {
          const updated = newCards.map((card, i) =>
            i === i1 || i === i2 ? { ...card, isMatched: true } : card
          );
          setCards(updated);
          setSelected([]);

          const allMatched = updated.every(card => card.isMatched);
          if (allMatched) {
            const timeTaken = Math.floor((Date.now() - startTime) / 1000);
            const gainedScore = (trials * 10) + Math.max(0, 100 - timeTaken);
            setScore(prev => prev + gainedScore);

            if (pairCount < symbols.length) {
              setTimeout(() => {
                setPairCount(prev => prev + 1);
              }, 800);
              setMessage(`🎉 You matched all pairs! +${gainedScore} pts`);
            } else {
              setMessage(`🎉 Game Completed! +${gainedScore} pts`);
              setIsGameOver(true);
              setRevealAll(true);
            }
          }
        }, 500);
      } else {
        setTimeout(() => {
          const reset = newCards.map((card, i) =>
            i === i1 || i === i2 ? { ...card, isFlipped: false } : card
          );
          setCards(reset);
          setSelected([]);
          setTrials(prev => {
            const updated = prev - 1;
            if (updated <= 0) {
              setMessage('❌ Game Over!');
              setIsGameOver(true);
              setShowFailPopup(true);
              setRevealAll(false);
            }
            return updated;
          });
        }, 800);
      }
    }
  };

  const resetGame = () => {
    setScore(0);
    setPairCount(2);
    initializeGame(2);
    setShowFailPopup(false);
    setShowQuiz(false);
    setRevealAll(false);
  };

  const handleEarnTrialsClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    const shuffled = [...tacQuestions].sort(() => Math.random() - 0.5).slice(0, 3);
    setQuizQuestions(shuffled);
    setCurrentQuizIndex(0);
    setCorrectAnswersCount(0);
    setShowQuiz(true);
    setShowFailPopup(false);
    setAnswerState({ selectedOption: null, isCorrect: null });
    setFade(true);
  };

  const handleAnswerClick = (option: string) => {
    if (answerState.selectedOption !== null || !quizQuestions[currentQuizIndex]) return;

    const isCorrect = option === quizQuestions[currentQuizIndex].answer;
    setAnswerState({ selectedOption: option, isCorrect });

    if (isCorrect) {
      setCorrectAnswersCount(prev => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentQuizIndex < 2) {
      setFade(false);
      setTimeout(() => {
        setCurrentQuizIndex(prev => prev + 1);
        setAnswerState({ selectedOption: null, isCorrect: null });
        setFade(true);
      }, 300);
    }
  };

  const handleQuizClose = () => {
    const notAllAnswered = currentQuizIndex < 2 || !answerState.selectedOption;

    if (correctAnswersCount > 0 && !notAllAnswered) {
      const restored = Math.round(originalTrials / 2);
      setTrials(restored);
      setIsGameOver(false);
      setMessage('');
      setRevealAll(false);
    } else {
      setRevealAll(true);
      setIsGameOver(true);
      setMessage('❌ Game Over!');
    }

    setShowQuiz(false);
  };

  const handleFailPopupClose = () => {
    if (correctAnswersCount === 0) {
      setRevealAll(true);
    }
    setShowFailPopup(false);
  };

  const currentQuestion = quizQuestions[currentQuizIndex];

  if (loading) {
    return (
      <div className="loading-container">
        <img src="/images/loading.png" alt="Loading..." className="rotating loading-image" />
      </div>
    );
  }

  return (
    <div className="app-wrapper">
      <div className="App" style={{ textAlign: 'center', padding: 20 }}>
        <h1>TacFlip Challenge 🫰</h1>
        <h3 style={{ marginTop: 0, color: '#444' }}>Level {pairCount - 1}</h3>
        <p>Trials: {trials} | Score: {score}</p>
        {message && <h2>{message}</h2>}

        <div className="app-container">
          {cards.map((card, index) => (
            <div
              key={card.id}
              className={`card ${(card.isFlipped || card.isMatched || revealAll) ? 'flipped' : ''}`}
              onClick={() => handleClick(index)}
              style={{ cursor: 'pointer' }}
            >
              <div className="card-inner">
                <div className="card-front">
                  <img src="/images/m0.png" alt="card front" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 12 }} />
                </div>
                <div className="card-back">
                  <img src={card.symbol} alt="symbol" style={{ width: '100%', height: '100%' }} />
                </div>
              </div>
            </div>
          ))}
        </div>

        <button onClick={resetGame} className="reset-button" style={{ marginTop: 50 }}>
          Reset Game
        </button>
      </div>

      {showFailPopup && !showQuiz && (
        <div className="fail-popup" onClick={handleFailPopupClose}>
          <div className="fail-content" onClick={e => e.stopPropagation()}>
            <div className="fail-close" onClick={handleFailPopupClose}>
              <img src="/images/cancel.png" alt="Close" />
            </div>
            <h2>❌ Game Over!</h2>
            <p
              onClick={handleEarnTrialsClick}
              style={{ color: '#1d152c', cursor: 'pointer', textDecoration: 'underline'}}
            >
              Click here to earn more trials
            </p>
            <img className="fail-image" src="/images/cry.png" alt="Fail" />
            <button className="reset-button" onClick={resetGame}>
              Try Again??
            </button>
          </div>
        </div>
      )}

      {showQuiz && currentQuestion && (
        <div className="fail-popup" onClick={handleQuizClose}>
          <div
            className="fail-content"
            onClick={e => e.stopPropagation()}
            style={{ maxWidth: 400, textAlign: 'left', transition: 'opacity 0.3s ease', opacity: fade ? 1 : 0 }}
          >
            <div className="fail-close" onClick={handleQuizClose}>
              <img src="/images/cancel.png" alt="Close" />
            </div>

            <div style={{ marginBottom: 10 }}>
              <strong>Question {currentQuizIndex + 1} / 3</strong>
            </div>
            <h3>{currentQuestion.question}</h3>
            {currentQuestion.options.map((opt, idx) => {
              const optionLetter = String.fromCharCode(65 + idx);
              const isSelected = answerState.selectedOption === optionLetter;
              const isCorrectAnswer = currentQuestion.answer === optionLetter;

              let bgColor = 'transparent';
              if (answerState.selectedOption !== null) {
                if (isCorrectAnswer) bgColor = '#4CAF50';
                if (isSelected && !isCorrectAnswer) bgColor = '#f44336';
              }

              return (
                <button
                  key={optionLetter}
                  onClick={() => handleAnswerClick(optionLetter)}
                  disabled={answerState.selectedOption !== null}
                  style={{
                    display: 'block',
                    width: '100%',
                    marginBottom: 8,
                    padding: '10px',
                    backgroundColor: bgColor,
                    color: bgColor === 'transparent' ? 'black' : 'white',
                    border: '1px solid #ccc',
                    borderRadius: 6,
                    cursor: answerState.selectedOption === null ? 'pointer' : 'default',
                    textAlign: 'left',
                    transition: '0.3s ease',
                  }}
                >
                  <strong>{optionLetter}. </strong>
                  {opt}
                </button>
              );
            })}

            {currentQuizIndex < 2 && (
              <button
                className="reset-button"
                style={{ marginTop: 20 }}
                disabled={!answerState.selectedOption}
                onClick={handleNext}
              >
                Next
              </button>
            )}
            {currentQuizIndex === 2 && answerState.selectedOption && (
              <button className="reset-button" style={{ marginTop: 20 }} onClick={handleQuizClose}>
                Close
              </button>
            )}
          </div>
        </div>
      )}

      <footer className="footer">
        Taced by🫰 -{' '}
        <a 
              style={{ color: '#1d152c', cursor: 'pointer' }}
        
        href="https://discord.com/users/642325751038869514" target="_blank" rel="noopener noreferrer">
          Angelokhare
        </a>
      </footer>
    </div>
  );
};

export default App;