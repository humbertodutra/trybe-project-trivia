import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import md5 from 'crypto-js/md5';
import Header from '../../components/Header';
import './feedback.css';

const THREE = 3;

export default function Feedback() {
  const { assertions, score, name, gravatarEmail } = useSelector(({ player }) => player);
  const playersInfo = {
    name,
    score,
    picture: `https://www.gravatar.com/avatar/${md5(gravatarEmail).toString()}` };
  const verifyStorage = JSON.parse(localStorage.getItem('ranking'));

  if (!verifyStorage) {
    localStorage.setItem('ranking', JSON.stringify([playersInfo]));
  } else {
    localStorage.setItem('ranking', JSON.stringify([...verifyStorage, playersInfo]));
  }

  return (
    <>
      <Header />
      <div data-testid="feedback-text">
        <p data-testid="feedback-text">
          {
            assertions < THREE ? 'Could be better...' : 'Well Done!'
          }
        </p>
        <p className="feedback -p">
          Sua pontuação total:
          <span data-testid="feedback-total-score">
            {score}
            <span> pontos </span>
          </span>
        </p>
        <p className="feedback -p">
          Voce acertou um total de:
          <span data-testid="feedback-total-question">
            { assertions }
            <span> perguntas </span>
          </span>
        </p>
        <Link to="/">
          <button
            data-testid="btn-play-again"
            type="button"
            className="btn-feedback"
          >
            Play Again
          </button>
        </Link>
        <Link to="/ranking">
          <button
            data-testid="btn-ranking"
            type="button"
            className="btn-feedback"
          >
            Ranking
          </button>
        </Link>
      </div>
    </>
  );
}
