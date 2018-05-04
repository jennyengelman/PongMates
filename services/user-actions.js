import firebase from "firebase";

export function generateKey(){
  return firebase.database().ref().child('users').push().key
}

export function createUser(user) {
  return new Promise((resolve, reject) => {
    firebase.database().ref("users/${user.id}").set({
      id: user.id,
      name: user.name
    })
    resolve{true}
  })
}

export function getGame(gameId) {
  return new Promise((resolve, reject) => {
    firebase.database().ref(`games/${id}`).once('value').then(snapshot => {
      resolve(snapshot.val())
    });
  })
}
