import firebase from 'firebase'
import moment from 'moment';

export function createGame(game) {
  return new Promise((resolve, reject) => {
    firebase.database().ref(`games/${game.id}`).set({
      creator: game.creator,
      id: game.id,
      place: game.place,
      year: game.year,
      timestamp: moment.now(),
    })
    resolve(true)
  })
}

export function generateGameKey() {
  return new Promise((resolve, reject) => {
    var key = firebase.database().ref().child('games').push().key
    resolve(key)
  })
}

export function getGame(game) {
  return new Promise((resolve, reject) => {
    firebase.database().ref(`games/${game.id}`).once('value').then(snapshot => {
      resolve(snapshot.val())
    });
  })
}

export function deleteGame(id) {
  return new Promise((resolve, reject) => {
    firebase.database().ref(`games/${id}`).remove()
    resolve(true)
  })
}
