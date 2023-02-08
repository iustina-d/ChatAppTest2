import { initializeApp } from "firebase/app"
import { getFirestore } from "@firebase/firestore"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDOh7I7Lv-4nfANw1YMw-1-fNPWZerpmu4",
  authDomain: "towellife-75de8.firebaseapp.com",
  projectId: "towellife-75de8",
  storageBucket: "towellife-75de8.appspot.com",
  messagingSenderId: "959901968379",
  appId: "1:959901968379:web:5c125f48074059588ccd5e",
}

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)

export const auth = getAuth(app)
