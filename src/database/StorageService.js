import {storage} from "../Firebase";
import {ref, uploadBytesResumable, getDownloadURL} from "firebase/storage"

export function upload(file) {
    const storageRef = ref(storage, file.name);
    return uploadBytesResumable(storageRef, file);
}

export async function getDownloadUrl(uploadTask) {

}