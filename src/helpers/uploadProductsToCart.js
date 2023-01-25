import { useContext } from "react";
import { collection } from "firebase/firestore/lite";
import { FirebaseDB } from "../firebase/config";
import { AuthContext } from "../auth/context";

export const uploadProductsToCart = () => {

    const { uid } = useContext(AuthContext)

    console.log(uid);

    const newOrder = {
        date: new Date().getTime(),
        products: [{}],
        ordered: false
    }
  
    const collectionRef = collection(FirebaseDB, 'orders');

}
