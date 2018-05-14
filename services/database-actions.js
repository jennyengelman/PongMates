import firebase from 'firebase'
import { getUser } from './../services/user-actions.js'
import { updateGame } from './../services/game-actions'


export function searchDatabase(preferences, user) {
  return new Promise((resolve, reject) => {
    firebase.database().ref("games").once("value").then((snapshot) => {
      snapshot.forEach(function(childSnapshot) {
        if (childSnapshot.val().year.includes(user.year)) {
          //finder is right age
          if (preferences.place.includes(childSnapshot.val().place)) {
            //creator has right place
            if (preferences.year.includes(childSnapshot.val().creatoryear)) {
              //creator is right age
              resolve(updateGame(childSnapshot.val().id, user.id))
            }
            else {
              console.log("creator is wrong age")
            }
          }
          else {
            console.log("creator has wrong place")
          }
        }
        else {
          console.log("finder is wrong age")
        }
      })
      reject(false)
    })
  })
}
