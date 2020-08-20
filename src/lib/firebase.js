import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";

let db;
let storage;
try {
  const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
  };

  // リロード時にfirebaseが重複読み込みされないように制御する
  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }

  // Firestoreインスタンスを作成
  db = firebase.firestore();
  storage = firebase.storage();
} catch (error) {
  console.log(error);
}

function getCurrentUser() {
  return firebase.auth().currentUser;
}

export {
  // 本来、initializeAppによる初期化は一度きりのため、
  // 初期化の結果のみを切り出してexportする
  db,
  storage,
  getCurrentUser,
};
