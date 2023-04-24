import { initializeApp } from 'firebase/app';
//import { getDatabase, ref, child, push, update, onValue } from "firebase/database";
import { getFirestore, doc, setDoc, getDoc  } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBxuo8-EH0dMP4d2VMeE8MUMsPN9EKhQhU",
    authDomain: "photo-tag-top.firebaseapp.com",
    projectId: "photo-tag-top",
    storageBucket: "photo-tag-top.appspot.com",
    messagingSenderId: "15955486123",
    appId: "1:15955486123:web:3baefc93a19cea23fb9eee"
  };
  const app = initializeApp(firebaseConfig);

  const db = getFirestore(app);

const LevelRecords = {
  "0": [],
  "1": [],
  "2": []
}


export async function addTimetoDatabase({timeRecord, username, currLevel}) {

  
  const docRef = doc(db, "data", "levels");
  const docSnap = await getDoc(docRef);
  let data = docSnap.data();
  const item = {username, timeRecord}

  if (docSnap.exists()) {
    let tempDataArray = Object.entries(data);
    tempDataArray.map((level) => {
      if (Number(level[0]) === currLevel) {
        level[1].push({item})
      }
    })
      
    data = Object.fromEntries(tempDataArray);
    console.log(data);
  
    await setDoc(doc(db, "data", "levels"), data);
  } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!");
    await setDoc(doc(db, "data", "levels"), LevelRecords);
  }

  }

export async function getRecords(currentLevel, setCurrentList) { 

  const docRef = doc(db, "data", "levels");
  const docSnap = await getDoc(docRef);
  currentLevel = Number(currentLevel);
  if (docSnap.exists()) {
    setCurrentList(docSnap.data()[currentLevel]);
  } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!");
    await setDoc(doc(db, "data", "levels"), LevelRecords);
  }

}
  