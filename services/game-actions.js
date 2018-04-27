import firebase from 'firebase'

export function gameUpdate(game) {
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
    firebase.database().ref(`games/${game.id}`)
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
