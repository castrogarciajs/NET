import { firestore } from "./firebase";
import {
  collection,
  addDoc,
  onSnapshot,
  QuerySnapshot,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import type { NOTE } from "./interfaces/notes";

export const saveNotes = (title: string, description: string, image: string) =>
  addDoc(collection(firestore, "notes"), { title, description, image });

export const realTimeDate = (
  callback: (querySnapshot: QuerySnapshot) => void
) => onSnapshot(collection(firestore, "notes"), callback);

export const deleteNote = (id: string) =>
  deleteDoc(doc(firestore, "notes", id));

export const updateNote = (id: string, note: NOTE) =>
  updateDoc(doc(firestore, "notes", id), { ...note });
