export function playerData(data) {
  return {
    type: 'ADD_PLAYER_DATA',
    data,
  };
}

export function tokenData(token) {
  return {
    type: 'ADD_TOKEN',
    token,
  };
}

export function setRanking(payload) {
  return {
    type: 'SET_RANKING',
    payload,
  };
}

export function updateScore(score) {
  return {
    type: 'UPDATE_SCORE',
    score,
  };
}
