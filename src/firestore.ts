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
 * @param callback esta funcion es la encargada de vigilar algun minimo cambio
 * @returns devolvemos la nota que se ha añadido
 */
export const getNote = (callback: (querySnapshot: QuerySnapshot) => void) =>
  onSnapshot(collection(firestore, "notes"), callback);

/**
 *
 * @param title titulo de la nota
 * @param description description de la nota
 * @param image imagen de la nota
 * @returns se devuelve la nota
 */
export const saveNotes = (title: string, description: string, image: string, userId: string) =>
  addDoc(collection(firestore, "notes"), { title, description, image, userId });

/**
 *
 * @param id obtenemos el id de la nota
 * @returns se devuelve la nota eliminada
 */
export const deleteNote = (id: string) =>
  deleteDoc(doc(firestore, "notes", id));

/**
 *
 * @param id id obtiene el id de la nota
 * @param note se construye una la nota a remplazar
 * @returns se devuelve la nota actulizada
 */
export const updateNote = (id: string, note: NOTE) =>
  updateDoc(doc(firestore, "notes", id), { ...note });
