import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCiDNZEz1P4Do8G5tD23d0IS96vhohMXjU",
  authDomain: "chat-pdf-ai-96bd5.firebaseapp.com",
  projectId: "chat-pdf-ai-96bd5",
  storageBucket: "chat-pdf-ai-96bd5.firebasestorage.app",
  messagingSenderId: "580062199184",
  appId: "1:580062199184:web:b27a888ed52f8145e24715",
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore(app);

export { db };
