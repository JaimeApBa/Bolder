import { collection, getDocs } from "firebase/firestore/lite"
import { FirebaseDB } from "../firebase/config"

export const loadAllCategories = async () => {
  const collectionRef = collection(FirebaseDB, 'category');
  const docs = await getDocs(collectionRef);

  const categories = [];
  
  docs.forEach(doc => {
    const id = doc.id;
    const data = doc.data();
    categories.push({ id, ...data})
  });

  return categories;

}
