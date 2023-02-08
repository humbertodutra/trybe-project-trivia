import React from 'react';
import { useSelector } from 'react-redux';
import md5 from 'crypto-js/md5';
import './Header.css';

export default function Header() {
  const {
    player: { gravatarEmail, name, score },
  } = useSelector((state) => state);

  return (
    <header>
      <section>
        <img
          data-testid="header-profile-picture"
          src={ `https://www.gravatar.com/avatar/${md5(
            gravatarEmail,
          ).toString()}` }
          alt="avatar"
        />
        <p data-testid="header-player-name">{name}</p>
      </section>
      <div>
        <p data-testid="header-score">{`score: ${score} points`}</p>
      </div>
    </header>
  );
}
