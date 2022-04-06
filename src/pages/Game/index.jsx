
import React, { useEffect, useState } from 'react';
import { fetchQuestion } from '../../services/api';
import { useDispatch, useSelector } from "react-redux";
import { fetchToken } from "./../../services/api";
import { tokenData } from '../../redux/actions';


export default function Game() {
  const [questions, setQuestion] = useState({});

  const token = useSelector(({ token }) => token)
  const dispatch = useDispatch()

  const shuffleAnswers = (answers) => {
    const sortNumber = 0.5;
    const answersObj = [
      { text: answers.correct_answer, correct: true, id: 10 },
      ...answers.incorrect_answers.map((answer, i) => (
        { text: answer, correct: false, id: i }))];
    return answersObj.sort(() => Math.random() - sortNumber);
  };

  const getNewQuestion = async () => {
    try {
      const data = await fetchQuestion(token);
      setQuestion({ ...data?.results[0], answers: shuffleAnswers(data?.results[0]) });
    } catch {
      const newToken = fetchToken()
      dispatch(tokenData(newToken))
    }
  };

  useEffect(() => {
    getNewQuestion();
  }, []);

  const { category, question, answers } = questions;

  return (
  <Header />
    <div>
      <p data-testid="question-category">{category}</p>
      <h3 data-testid="question-text">{question}</h3>
      <div data-testid="answer-options">
        {answers?.map(({ text, correct, id }) => (
          <button
            onClick={() => console.log(correct) }
            data-testid={correct ? 'correct-answer' : `wrong-answer-${id}`}
            key={`${text}:${id}`} type="button">
            {text}
          </button>))}
      </div>
    </div>
  

  );
}
