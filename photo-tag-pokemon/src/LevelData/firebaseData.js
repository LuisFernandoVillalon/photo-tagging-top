import { initializeApp } from 'firebase/app';
import { getDatabase, ref, child, push, update, onValue } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyBxuo8-EH0dMP4d2VMeE8MUMsPN9EKhQhU",
    authDomain: "photo-tag-top.firebaseapp.com",
    projectId: "photo-tag-top",
    storageBucket: "photo-tag-top.appspot.com",
    messagingSenderId: "15955486123",
    appId: "1:15955486123:web:3baefc93a19cea23fb9eee",
    databaseURL: "https://photo-tag-top-default-rtdb.firebaseio.com",
  };
  const app = initializeApp(firebaseConfig);

  const database = getDatabase(app);

export function addTimetoDatabase({timeRecord, username, level}) {
    
    const newUserKey = push(child(ref(database), 'RecordsList')).key;

    const updates = {};

    updates['/RecordsList/' + level + '/' + newUserKey] = {timeRecord, username};
  
    return update(ref(database), updates);
  }

export function getRecords(currentLevel, {setCurrentList}) { 

  const recordList = ref(database, 'RecordsList/' + currentLevel);
  onValue(recordList, (snapshot) => {
    const data = snapshot.val();
    setCurrentList([data]);
  });
}
  