import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, getDoc, getDocs, deleteDoc, updateDoc, collection, doc } from "firebase/firestore"

const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: "vendemostodo-29717.firebaseapp.com",
    projectId: "vendemostodo-29717",
    storageBucket: "vendemostodo-29717.appspot.com",
    messagingSenderId: "844799603131",
    appId: "1:844799603131:web:a886096ac915af0a7fd49e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Consultar BASE DE DATOS
const dataBase = getFirestore()

//CRUD de los productos (asincronica)
export const createProductsDB = async () => {
    const promise = await fetch ('./json/productos.json')
    const productos = await promise.json()
    productos.forEach( async (articulo) => {
        await addDoc(collection(dataBase, "productos"), {//si existe, te agrega nuevos productos. Caso contrario te crea la coleccion y te envia los productos
            idCategoria: articulo.idCategoria,
            nombre: articulo.nombre,
            marca: articulo.marca,
            modelo: articulo.modelo,
            descripcion: articulo.descripcion,
            precio: articulo.precio,
            stock: articulo.stock,
            imagen: articulo.imagen
        }) 
    })
}

export const getProductsDB = async() => {
    const productos = await getDocs(collection(dataBase, "productos"))
    const items = productos.docs.map(productos => {
        return {...productos.data(), id: productos.id}
    })
    return items
}

export const getProducto = async (id) => {
    const producto = await getDoc(doc(dataBase, "productos", id))
    const item = {...producto.data(), id: producto.id}
    return item
}

export const updateProducto = async (id, informacion) => {
    await updateDoc(doc(dataBase, "productos", id), informacion)
}

//No se utilizara esta funcion
export const deleteProducto = async (id) => {
    await deleteDoc(doc(dataBase, "productos", id))
}

// CREATE y READ OC

export const crearOrdenCompra = async(cliente, articulosCarrito, precioTotal, fecha) => {
    const ordenCompra = await addDoc(collection (dataBase, "ordenCompra"), {
        cliente: cliente,
        items: articulosCarrito,
        precioTotal: precioTotal,
        fecha: fecha
    })
    return (ordenCompra)
}

export const getOrdenCompra = async(id) => {
    const ordenCompra = await getDoc(doc(dataBase, "ordenCompra", id))
    const item = {...ordenCompra.data(), id: ordenCompra.id}
    return (item)
}