import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Ranking() {
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    const verifyStorage = JSON.parse(localStorage.getItem('ranking'));
    console.log(verifyStorage);
    if (verifyStorage) {
      setPlayers(verifyStorage.sort((a, b) => b.score - a.score));
    }
  }, []);
  return (
    <div>
      <h1 data-testid="ranking-title">Ranking</h1>
      { players.map((a, index) => (
        <div key={ index }>
          <h4 data-testid={ `player-name-${index}` }>{a.name}</h4>
          <span data-testid={ `player-score-${index}` }>
            {a.score }
            {'   ----'}
            pontos
          </span>
        </div>
      ))}
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
