/** @Firebase module */
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { firebaseConfig } from "./firebase.config";

/** @app */
export const app = initializeApp(firebaseConfig);

/**@Auth */
export const auth = getAuth(app);
