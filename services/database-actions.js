import firebase from 'firebase'
import { updateGame } from './../services/game-actions'


export function searchDatabase(preferences, user) {
  return new Promise((resolve, reject) => {
    let childID = undefined
    let userID = undefined
    firebase.database().ref("games").once("value").then((snapshot) => {
      for (let key in snapshot.val()) {
        const childSnapshot = snapshot.val()[key]
        {console.log(childSnapshot)}
        {console.log(user)}
        {console.log(preferences)}
        if (!childSnapshot.player) {
          if (childSnapshot.year.some(item => user.year) && childSnapshot.creator.id !== user.id) {
            {console.log('works')}
            //finder is right age
            if (preferences.place.some(item => childSnapshot.place.includes(item))) {
              {console.log('works')}
              //creator has right place
              if (preferences.year.includes(childSnapshot.creator.year)) {
                {console.log('works')}
                //creator is right age
                resolve(updateGame(childSnapshot.id, user.id))
              }
            }
          }
        }
      }
      reject(false)
    })
  })
}
