/**@storage firebase */
import { storage } from "./firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

/**@initialStorage */
const storageRef = ref(storage, "static");
/**
 *
 * @param file se pasa la url de la imagen
 * @returns se devuelve la url de la imagen ya subida en la nube de firebase
 */
export const uploadFile = async (file: File) => {
  /**
   * @sorageRef esta seria la referencia de la carpeta statica
   * @fileName el segundo parametro el nombre de la iamgen o mejor dicho la url de la imagen
   */
  const fileRef = ref(storageRef, file.name);

  /**
   * @uploadTask esta constante es la encargada de resumir el archivo al momento de subirse
   */
  const uploadTask = uploadBytesResumable(fileRef, file);

  /**
   * @listeners se añade un listener sera un observador cuando ocurra algun cambio en el software se va disparar el evento stateChanged , luedo se calcula el porcentaje de progreso de la carga del archivo, si ocurre un error se rechaza
   */
  uploadTask.on(
    "state_changed",
    (snapshot) => (snapshot.bytesTransferred / snapshot.totalBytes) * 100,
    (error) => error
  );
  /**
   * @image esta seria ya la url subida en la nube de firebase , para esto nos ayuda la funcion getDownLoadURL()
   */
  const image = await getDownloadURL(fileRef);
  return image;
};
