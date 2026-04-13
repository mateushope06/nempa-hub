import { initializeApp } from "firebase/app";
import { getDatabase, ref, get, set } from "firebase/database";

const firebaseConfig = {
  // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBt6FnvHrZKvOpvRu6ENqM2le1-RTskXBs",
  authDomain: "nempa-hub.firebaseapp.com",
  databaseURL: "https://nempa-hub-default-rtdb.firebaseio.com",
  projectId: "nempa-hub",
  storageBucket: "nempa-hub.firebasestorage.app",
  messagingSenderId: "340000803548",
  appId: "1:340000803548:web:7259c40d63545b3eb78219"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export async function loadData(key, fallback) {
  try {
    const snapshot = await get(ref(db, "nempa/" + key));
    if (snapshot.exists()) {
      return snapshot.val();
    }
    return fallback;
  } catch (err) {
    console.error("Firebase load error:", err);
    return fallback;
  }
}

export async function saveData(key, value) {
  try {
    await set(ref(db, "nempa/" + key), value);
  } catch (err) {
    console.error("Firebase save error:", err);
  }
}
