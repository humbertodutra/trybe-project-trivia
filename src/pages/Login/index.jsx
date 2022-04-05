import React from 'react';
import '../../App.css';

export default function Login() {
  const [state, setState] = React.useState({
    name: '',
    email: '',
  });

  function handleChange({ target }) {
    const { name, value } = target;
    setState({
      ...state,
      [name]: value,
    });
  }

  return (
    <form onSubmit={ (event) => event.preventDefault() }>
      <label htmlFor="input-name">
        <input
          name="name"
          id="input-name"
          type="text"
          data-testid="input-player-name"
          value={ state.name }
          onChange={ handleChange }
        />
      </label>
      <label htmlFor="input-email">
        <input
          name="email"
          id="input-email"
          type="email"
          data-testid="input-gravatar-email"
          value={ state.email }
          onChange={ handleChange }
        />
      </label>
      <button
        id="btn-play"
        type="submit"
        data-testid="btn-play"
        disabled={ state.name === '' || state.email === '' }
      >
        Play
      </button>
    </form>
  );
}
