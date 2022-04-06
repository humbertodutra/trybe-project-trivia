import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchQuestion, fetchToken } from '../../services/api';
import Header from '../../components/Header/index';

import { tokenData } from '../../redux/actions';
import './game.css';

const THIRTY = 30;
const ONE_SECOND = 1000;

export default function Game() {
  const [questions, setQuestion] = useState({});
  const [answered, setAnswered] = useState(false);
  const [timer, setTimer] = useState(THIRTY);

  const { token } = useSelector((state) => state);
  const dispatch = useDispatch();

  const shuffleAnswers = (answers) => {
    const sortNumber = 0.5;
    const answersObj = [
      { text: answers.correct_answer, correct: true, id: 10 },
      ...answers.incorrect_answers.map((answer, i) => ({
        text: answer,
        correct: false,
        id: i,
      })),
    ];
    return answersObj.sort(() => Math.random() - sortNumber);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, ONE_SECOND);

    if (answered) {
      clearInterval(interval);
    }

    setTimeout(() => {
      clearInterval(interval);
      setAnswered(true);
    }, THIRTY * ONE_SECOND);

    return () => {
      clearInterval(interval);
      setTimer(THIRTY);
    };
  }, [answered]);

  useEffect(() => {
    const getNewQuestion = async () => {
      if (token) {
        try {
          const data = await fetchQuestion(token);
          setQuestion({
            ...data?.results[0],
            answers: shuffleAnswers(data?.results[0]),
          });
        } catch {
          const newToken = fetchToken();
          dispatch(tokenData(newToken));
        }
      }
    };
    getNewQuestion();
  }, [token, dispatch]);

  return (
    <div>
      <Header />
      <p data-testid="question-category">{questions.category}</p>
      <h3 data-testid="question-text">{questions.question}</h3>
      <div data-testid="answer-options">
        {questions.answers
          && questions.answers.map(({ text, correct, id }) => (
            <button
              onClick={ () => setAnswered(true) }
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
      <h1>{timer}</h1>
    </div>
  );
}
