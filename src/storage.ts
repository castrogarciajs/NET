/**@storage firebase */
import { storage } from "./firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

/**@initialStorage */
const storageRef = ref(storage, "static");

/**
 * 
 * @param file image
 * @returns url of tha image
 */
export const uploadFile = async (file: File) => {
  /**
   * @directory and nameof  image
   */
  const fileRef = ref(storageRef, file.name);
  const uploadTask = uploadBytesResumable(fileRef, file);

  uploadTask.on(
    "state_changed",
    (snapshot) => (snapshot.bytesTransferred / snapshot.totalBytes) * 100,
    (error) => console.log(error)
  );
  const image = await getDownloadURL(fileRef);
  return image;
};
