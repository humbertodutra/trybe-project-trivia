const INITIAL_STATE = {
  name: '',
  assertions: 0,
  score: 0,
  gravatarEmail: '',
};

export default function player(state = INITIAL_STATE, action) {
  switch (action.type) {
  case ('ADD_PLAYER_DATA'):
    return {
      ...state,
      name: action.data.name,
      gravatarEmail: action.data.email,
    };
  case ('UPDATE_SCORE'):
    return {
      ...state,
      score: action.score,
    };
  case ('UPDATE_ASSERTIONS'):
    return {
      ...state,
      assertions: state.assertions + 1,
    };
  default:
    return state;
  }
}
