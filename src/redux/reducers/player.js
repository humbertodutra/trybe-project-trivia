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
      name: action.playerData.name,
      gravatarEmail: action.playerData.email,
    };
  default:
    return state;
  }
}
