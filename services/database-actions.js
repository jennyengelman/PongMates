import firebase from 'firebase'
import { updateGame } from './../services/game-actions'


export function searchDatabase(preferences, user) {
  return new Promise((resolve, reject) => {
    let childID = undefined
    let userID = undefined
    firebase.database().ref("games").once("value").then((snapshot) => {

      for (let key in snapshot.val()) {
        const childSnapshot = snapshot.val()[key]
        console.log(childSnapshot)
        console.log(user)
        console.log(preferences)
        if (childSnapshot.year.some(item => user.year)) {
          //finder is right age
          if (preferences.place.some(item => childSnapshot.place.includes(item))) {
            //creator has right place
            if (preferences.year.includes(childSnapshot.creator.year)) {
              //creator is right age
              if (!childID && !userID) {
                childID = childSnapshot.id
                userID = user.id
              }
            }
          }
        }
      }
      if (childID && userID) {
        resolve(updateGame(childID, userID))
      } else {
        reject(false)
      }
    })
  })
}
