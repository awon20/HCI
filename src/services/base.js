import firebase from "firebase";
import "firebase/storage";

export const app = firebase.initializeApp({
  projectId: "sketchbox-saving-sketch",
  appId: "1:812450670364:web:fb924d49443b6f2cf87cd9",
  storageBucket: "sketchbox-saving-sketch.appspot.com",
  locationId: "europe-west",
  apiKey: "AIzaSyCMWua3Kdo_WqC-1TIwkXXPzERREcq9Bxs",
  authDomain: "sketchbox-saving-sketch.firebaseapp.com",
  messagingSenderId: "812450670364"
});

