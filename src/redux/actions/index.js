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
