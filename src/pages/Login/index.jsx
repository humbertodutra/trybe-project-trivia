import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { tokenData, playerData } from '../../redux/actions';
import { fetchToken } from '../../services/api';
import '../../App.css';
import TriviaLogo from '../../trivia.png';

export default function Login() {
  const [state, setState] = React.useState({
    name: '',
    email: '',
  });

  const dispatch = useDispatch();
  const history = useHistory();

  function handleChange({ target }) {
    const { name, value } = target;
    setState({
      ...state,
      [name]: value,
    });
  }

  async function handlePlay() {
    const { token } = await fetchToken();
    dispatch(tokenData(token));
    dispatch(playerData(state));
    history.push('/game');
  }

  return (
    <div id="main-div">
      <img id="logo" src={ TriviaLogo } alt="Trivia Logo" />
      <form id="form-login" onSubmit={ (event) => event.preventDefault() }>
        <label className="label-login" htmlFor="input-name">
          <input
            className="input-login"
            name="name"
            id="input-name"
            type="text"
            data-testid="input-player-name"
            value={ state.name }
            onChange={ handleChange }
            placeholder="Name"
          />
        </label>
        <label className="label-login" htmlFor="input-email">
          <input
            className="input-login"
            name="email"
            id="input-email"
            type="email"
            data-testid="input-gravatar-email"
            value={ state.email }
            onChange={ handleChange }
            placeholder="Email"
          />
        </label>
        <button
          className="btn-login"
          id="btn-play"
          type="submit"
          data-testid="btn-play"
          disabled={ state.name === '' || state.email === '' }
          onClick={ handlePlay }
        >
          Play
        </button>
      </form>

    </div>
  );
}

/* <Link to="/settings">
        <button
          data-testid="btn-settings"
          type="button"
        >
          Configurações do jogo
        </button>
      </Link> */
