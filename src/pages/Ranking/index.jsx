import React from 'react';
import { Link } from 'react-router-dom';

export default function Ranking() {
  return (
    <div>
      <h1 data-testid="ranking-title">Ranking</h1>
      <Link to="/">
        <button
          data-testid="btn-go-home"
          type="button"
        >
          Go Home
        </button>
      </Link>

    </div>
  );
}
