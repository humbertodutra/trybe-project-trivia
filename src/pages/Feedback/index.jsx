import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';

const THREE = 3;

export default function Feedback() {
  const { assertions, score, name } = useSelector(({ player }) => player);
  const playersInfo = { name, score, assertions };
  const verifyStorage = JSON.parse(localStorage.getItem('players'));

  if (!verifyStorage) {
    localStorage.setItem('players', JSON.stringify([playersInfo]));
  } else {
    localStorage.setItem('players', JSON.stringify([...verifyStorage, playersInfo]));
  }

  return (
    <div data-testid="feedback-text">
      <Header />
      <p data-testid="feedback-text">
        {
          assertions < THREE ? 'Could be better...' : 'Well Done!'
        }
      </p>
      <p>
        Sua pontuação total:
        <span data-testid="feedback-total-score">
          {score}
          <span> pontos </span>
        </span>
      </p>
      <p>
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
        >
          Play Again
        </button>
      </Link>
      <Link to="/ranking">
        <button
          data-testid="btn-ranking"
          type="button"
        >
          Ranking
        </button>
      </Link>
    </div>
  );
}
