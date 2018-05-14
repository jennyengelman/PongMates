import firebase from 'firebase'
import moment from 'moment';

export function createGame(game) {
  return new Promise((resolve, reject) => {
    firebase.database().ref(`games/${game.id}`).set({
      creator: "-LCF7qa2LI_oKKSQ3SIA",
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

export function deleteGame(game) {
  return new Promise((resolve, reject) => {
    firebase.database().ref(`games/${game.id}`).remove()
    })
    resolve(true)
}

export function updateGame(id, player) {
  return new Promise((resolve, reject) => {
    firebase.database().ref(`games/${id}`).set({
      player: player
    })
    resolve(true)
}
