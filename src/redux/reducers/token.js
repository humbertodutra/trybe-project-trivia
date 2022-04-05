const INITIAL_STATE = '';

export default function token(state = INITIAL_STATE, action) {
  switch (action.type) {
  case ('ADD_TOKEN'):
    return action.token;
  default:
    return state;
  }
}
