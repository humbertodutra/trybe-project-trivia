import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ranking.css';

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
    <div className="div-ranking">
      <h1 data-testid="ranking-title">Ranking</h1>
      { players.map((a, index) => (
        <div key={ index } className="div-ranking-line">
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
          className="btn-ranking"
        >
          Go Home
        </button>
      </Link>

    </div>
  );
}
