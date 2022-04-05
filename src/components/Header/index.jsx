import React from 'react';
import { useSelector } from 'react-redux';

export default function Header() {
  const { name, imgSrc } = useSelector(({ user }) => user);

  return (
    <header>
      <section>
        <img data-testid="header-profile-picture" src={ imgSrc } alt="avatar" />
        <p data-testid="header-player-name">{name}</p>
        <p data-testid="header-score">0</p>
      </section>
    </header>
  );
}
