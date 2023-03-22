import { GoogleAuthProvider, signOut } from "firebase/auth";
import { auth } from "./firebase";

export const provider = new GoogleAuthProvider();

export const logOut = signOut(auth);


