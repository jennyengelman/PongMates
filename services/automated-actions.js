import schedule from 'node-schedule'
import firebase from 'firebase'
import moment from 'moment'

let checkDatabase = schedule.scheduleJob('* * */1 * *', () => {
  firebase.database().ref('/games').once('value').then((snapshot) => {
    for (let key in snapshot.val()) {
        var now = moment();
        var userTime = snapshot.val()[key].timestamp;
        var converted = moment.unix(userTime);
        if(now.diff(converted, 'hours') > 23)
          firebase.database().ref(`/games/${key}`).remove()
      }
  });
})
