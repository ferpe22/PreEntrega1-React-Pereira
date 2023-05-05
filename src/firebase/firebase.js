// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, getDoc, getDocs, deleteDoc, updateDoc, collection, doc } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAiKZ0saIj5PGsDQCbuR-nXG0bG4RKTjPY",
    authDomain: "vendemostodo-29717.firebaseapp.com",
    projectId: "vendemostodo-29717",
    storageBucket: "vendemostodo-29717.appspot.com",
    messagingSenderId: "844799603131",
    appId: "1:844799603131:web:a886096ac915af0a7fd49e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Consultar BDD
const bdd = getFirestore()

/*
    "CRUD"
    CREATE --> post
    READ --> get
    UPDATE --> put
    DELETE --> delete
*/

//CRUD de los productos (asincronica)
export const createProducts = async () => {
    const promise = await fetch ('./json/productos.json')
    const productos = await promise.json()
    productos.forEach( async (prod) => {
        await addDoc(collection(bdd, "productos"), {//si existe, te agrega nuevos productos. Caso contrario te crea la coleccion y te envia los prodcutos
            nombre: prod.nombre,
            marca: prod.marca,
            modelo: prod.modelo,
            producto: prod.producto,
            descripcion: prod.descripcion,
            precio: prod.precio,
            stock: prod.stock,
            imagen: prod.imagen,
        }) 
    })
}