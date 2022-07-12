import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZmQBdl836E7rJxkq8I1bonGoh99M7EU0",
  authDomain: "react-cursos-589c7.firebaseapp.com",
  projectId: "react-cursos-589c7",
  storageBucket: "react-cursos-589c7.appspot.com",
  messagingSenderId: "908130559607",
  appId: "1:908130559607:web:91f6e260ba307ae6148872"
};

// Initialize Firebase

export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp); //aquivienen las funcionalidades de autentificacion
export const FirebaseDB = getFirestore( FirebaseApp); //configuracion de mi base de datos