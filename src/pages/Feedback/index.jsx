import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';

const THREE = 3;

export default function Feedback() {
  const { assertions } = useSelector(({ player }) => player);

  return (
    <div data-testid="feedback-text">
      <Header />
      <p data-testid="feedback-text">
        {
          assertions < THREE ? 'Could be better...' : 'Well Done!'
        }
      </p>
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
