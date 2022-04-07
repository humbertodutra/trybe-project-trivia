import React from 'react';
import { useSelector } from 'react-redux';
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
    </div>
  );
}
