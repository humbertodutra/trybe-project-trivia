
import React, { useEffect, useState } from 'react';
import { fetchQuestion } from '../../services/api';
import Header from "./../../components/Header/index";
import { useDispatch, useSelector } from "react-redux";
import { fetchToken } from "./../../services/api";
import { tokenData } from '../../redux/actions';
import './game.css'

export default function Game() {

  const [questions, setQuestion] = useState({});
  const [answered, setAnswered] = useState(false);

  const { token } = useSelector((state) => state)
  const dispatch = useDispatch()

  const shuffleAnswers = (answers) => {
    const sortNumber = 0.5;
    const answersObj = [{ text: answers.correct_answer, correct: true, id: 10 },
    ...answers.incorrect_answers.map((answer, i) => ({ text: answer, correct: false, id: i }))];
    return answersObj.sort(() => Math.random() - sortNumber);
  };

  const getNewQuestion = async () => {
    if (token) {
      try {
        const data = await fetchQuestion(token);
        setQuestion({ ...data?.results[0], answers: shuffleAnswers(data?.results[0]) });
      } catch {
        const newToken = fetchToken()
        dispatch(tokenData(newToken))
      }
    };
  }

    useEffect(() => {
      getNewQuestion();
    }, [token]);
  
    return (
      <div>
        <Header />
        <p data-testid="question-category">{ questions.category }</p>
        <h3 data-testid="question-text">{ questions.question }</h3>
        <div data-testid="answer-options">
          { questions.answers && questions.answers.map(({ text, correct, id }) => (
            <button
              onClick={ () => setAnswered(true) }
              className={ `question ${answered && correct && 'correct'}
               ${ answered && !correct &&  'incorrect'}` }
              data-testid={ correct ? 'correct-answer' : `wrong-answer-${id}` }
              key={`${text}:${id}`} type="button">
              {text}
            </button>)) }
        </div>
      </div>
  );
}