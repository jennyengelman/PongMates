import firebase from 'firebase'
import { getUser } from './../services/user-actions.js'

export function searchDatabase(preferences, user) {
  return new Promise((resolve, reject) => {
    firebase.database().ref("games").once("value").then((snapshot) => {
      snapshot.forEach(function(childSnapshot) {
        console.log(childSnapshot.val())
        if (childSnapshot.val().year.includes(user.year)) {
          console.log("finder is right age")
          if (preferences.place.includes(childSnapshot.val().place)) {
            console.log("creator has right place")
            if (preferences.year.includes(childSnapshot.val().creatoryear)) {
              console.log("creator is right age")
              resolve(childSnapshot.val())
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
