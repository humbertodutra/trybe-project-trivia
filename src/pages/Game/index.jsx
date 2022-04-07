import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { fetchQuestion, fetchToken } from '../../services/api';
import Header from '../../components/Header/index';

import { tokenData, updateScore } from '../../redux/actions';
import './game.css';

const sortNumber = 0.5;
const MEDIUM = 2;
const HARD = 3;
const TEN = 10;
const THIRTY = 30;
const ONE_SECOND = 1000;

export default function Game() {
  const [questions, setQuestions] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [shuffled, setShuffled] = useState([]);
  const [answered, setAnswered] = useState(false);
  const [timer, setTimer] = useState(THIRTY);

  const { token } = useSelector((state) => state);
  const dispatch = useDispatch();
  const history = useHistory();

  const shuffleAnswers = (answers) => {
    const answersObj = [
      { text: answers.correct_answer, correct: true, id: TEN },
      ...answers.incorrect_answers.map((answer, i) => ({
        text: answer,
        correct: false,
        id: i,
      })),
    ];
    return answersObj.sort(() => Math.random() - sortNumber);
  };

  function handleClick(correct) {
    setAnswered(true);

    const difficultyScores = {
      hard: TEN + (timer * HARD),
      medium: TEN + (timer * MEDIUM),
      easy: TEN + timer,
    };
    if (correct) {
      dispatch(updateScore(difficultyScores[questions[questionIndex].difficulty]));
    }
  }

  function handleNextClick() {
    setTimer(THIRTY);
    setAnswered(false);
    setQuestionIndex((state) => state + 1);
    if (questionIndex === questions.length - 1) {
      history.push('/feedback');
    }
  }

  useEffect(() => {
    const interval = setTimeout(() => {
      setTimer((prev) => prev - 1);
    }, ONE_SECOND);

    if (timer === 0) setAnswered(true);

    if (answered) return clearTimeout(interval);

    return () => clearTimeout(interval);
  }, [answered, timer]);

  useEffect(() => {
    const getNewQuestion = async () => {
      if (token) {
        try {
          const data = await fetchQuestion(token);
          setQuestions(data.results);
        } catch {
          const newToken = fetchToken();
          dispatch(tokenData(newToken));
        }
      }
    };
    getNewQuestion();
  }, [token, dispatch]);

  useEffect(() => {
    if (questions[questionIndex]) setShuffled(shuffleAnswers(questions[questionIndex]));
  }, [questions, questionIndex]);

  return (
    <div>
      <Header />
      <p data-testid="question-category">{questions[questionIndex]?.category}</p>
      <h3 data-testid="question-text">{questions[questionIndex]?.question}</h3>
      <div data-testid="answer-options">
        {shuffled.map(({ text, correct, id }) => (
          <button
            onClick={ () => handleClick(correct) }
            className={ `question ${answered && correct && 'correct'}
              ${answered && !correct && 'incorrect'}` }
            data-testid={ correct ? 'correct-answer' : `wrong-answer-${id}` }
            key={ `${text}:${id}` }
            type="button"
            disabled={ answered }
          >
            {text}
          </button>
        ))}
      </div>
      { answered && (
        <button
          onClick={ handleNextClick }
          data-testid="btn-next"
          type="button"
        >
          Next
        </button>
      ) }
      <h1>{timer}</h1>
    </div>
  );
}
