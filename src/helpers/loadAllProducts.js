import { collection, getDocs, query } from "firebase/firestore/lite";
import { FirebaseDB } from "../firebase/config";


export const loadAllProducts = async () => {
    
    const collectionRef = collection(FirebaseDB, 'products');
    
    const docs = await getDocs(collectionRef);
    
    const products = [];
    docs.forEach( doc => {
        const id = doc.id;
        //console.log(doc.id);
        const data = doc.data();
        products.push({ id, ...data})
        
    });
    
    return products;
}
