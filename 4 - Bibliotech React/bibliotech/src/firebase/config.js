import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage";


//Chaves de acesso ao firebase
const firebaseConfig = {
  apiKey: "AIzaSyA5T6iDnXz2k9ideWj4DF-7asqjLtd7q1k",
  authDomain: "bibliotech-renata.firebaseapp.com",
  projectId: "bibliotech-renata",
  storageBucket: "bibliotech-renata.appspot.com",
  messagingSenderId: "348412181617",
  appId: "1:348412181617:web:80c72ba1ac7a817e00afd0"
};

//Inicializa o app com base nas configurações acima
export const app = initializeApp(firebaseConfig);

//configurando o Authentication e seus recursos login/cadastro
export const auth = getAuth(app);

//configura o firestore e seus recursos de banco de dados
export const db = getFirestore(app);

// Configura o Storage e seus recursos de upload
export const storage = getStorage(app);