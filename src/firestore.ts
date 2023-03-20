/**@firestore */
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

/**
 *
 * @param callback onSub
 * @returns note
 */
export const getNote = (callback: (querySnapshot: QuerySnapshot) => void) =>
  onSnapshot(collection(firestore, "notes"), callback);

/**
 *
 * @param title title note
 * @param description description note
 * @param image image note
 * @returns note
 */
export const saveNotes = (title: string, description: string, image: string) =>
  addDoc(collection(firestore, "notes"), { title, description, image });

/**
 *
 * @param id note id
 * @returns note
 */
export const deleteNote = (id: string) =>
  deleteDoc(doc(firestore, "notes", id));

/**
 *
 * @param id id note
 * @param note mew note
 * @returns note
 */
export const updateNote = (id: string, note: NOTE) =>
  updateDoc(doc(firestore, "notes", id), { ...note });
