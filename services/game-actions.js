import firebase from 'firebase'

export function gamePreferences(game) {
  return new Promise((resolve, reject) => {
    firebase.database().ref(`games/${game.id}`).set({
      place: game.place,
      year: game.year,
      time: game.time,
    })
    resolve(true)
  })
}

export function createGame(game) {
  return new Promise((resolve, return)) => {
    firebase.database().ref(`games/${game.id}`).set({
      id: game.id,
    })
  }
}

export function generateGameKey(game) {
  return firebase.database().ref().child('games').push().key
}
