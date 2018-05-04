import firebase from 'firebase'

export function gameUpdate(place, year) {
  return new Promise((resolve, reject) => {
    firebase.database().ref(`games/${game.id}`).set({
      place: game.place,
      year: game.year,
      timestamp: game.timestamp,
    })
    resolve(true)
  })
}

export function createGame(game) {
  return new Promise((resolve, reject)) => {
    firebase.database().ref(`games/${game.id}`).set({
      id: game.id,
    })
    resolve(true)
  }
}

export function generateGameKey(game) {
  return new Promise((resolve, reject)) => {
    firebase.database().ref().child('games').push().key
    })
    resolve(true)
  }
}

export function getGame(game) {
  return new Promise((resolve, reject)) => {
    firebase.database().ref(`games/${game.id}`).get()
    })
    resolve(true)
  }
}

export function deleteGame(game) {
  return new Promise((resolve, reject)) => {
    firebase.database().ref(`games/${game.id}`).remove()
    })
    resolve(true)
  }
}
