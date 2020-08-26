import firebase from "firebase/app";
import "firebase/auth";

export const firebaseConfig = {
  apiKey: "AIzaSyDXHcJtXvy08mlIWjCoj0w5lyBom-nuUiI",
  authDomain: "dr-pepper-map-club.firebaseapp.com",
  databaseURL: "https://dr-pepper-map-club.firebaseio.com",
  projectId: "dr-pepper-map-club",
  storageBucket: "dr-pepper-map-club.appspot.com",
  messagingSenderId: "636506083949",
  appId: "1:636506083949:web:b75f877d47627746be6564",
  measurementId: "G-3X1JCSRM1F",
};
firebase.initializeApp(firebaseConfig);

let auth;

if (typeof window !== "undefined") {
  auth = firebase.auth();
}

export { auth, firebase };
