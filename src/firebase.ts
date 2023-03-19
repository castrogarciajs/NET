/** @Firebase module */
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { firebaseConfig } from "./firebase.config";

/** @app */
export const app = initializeApp(firebaseConfig);

/**@Auth */
export const firestore = getFirestore(app);
