const INITIAL_STATE = [];

export default function ranking(state = INITIAL_STATE, action) {
  switch (action.type) {
  case ('SET_RANKING'):
    return [...state, action.payload];
  default:
    return state;
  }
}
