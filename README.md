import { initializeApp } from "firebase/app";
import { getDatabase, ref, get, set } from "firebase/database";

const firebaseConfig = {
  COLE SEUS DADOS AQUI
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
