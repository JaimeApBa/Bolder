import { collection, getDocs, query, where } from "firebase/firestore/lite";
import { FirebaseDB } from "../firebase/config";


export const loadProductsByCategory = async (category) => {
    const queryData = category.map( el => `/category/${el}`);

    const collectionRef = collection(FirebaseDB, 'products');
    const q = query(collectionRef, where("category", "in", queryData));
    
    const docs = await getDocs(q);
    
    const products = [];
    docs.forEach( doc => {
        const id = doc.id;
        //console.log(doc.id);
        const data = doc.data();
        products.push({ id, ...data})
        
    });
    
    return products;
}
