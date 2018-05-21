import firebase from 'firebase'

export function searchDatabase(preferences, user) {
  return new Promise((resolve, reject) => {
    let childID = undefined
    let userID = undefined
    firebase.database().ref("games").once("value").then((snapshot) => {
      for (let key in snapshot.val()) {
        const childSnapshot = snapshot.val()[key]
        if (!childSnapshot.player) {
          if (childSnapshot.year.some(item => user.year) && childSnapshot.creator.id !== user.id) {
            //finder is right age
            if (preferences.place.some(item => childSnapshot.place.includes(item))) {
              //creator has right place
              if (preferences.year.includes(childSnapshot.creator.year)) {
                //creator is right age
                resolve(childSnapshot)
              }
            }
          }
        }
      }
      reject(false)
    })
  })
}
