import { ref } from "vue";
import { db } from "@/firebase/config";

const useCollection = (collection) => {
  const error = ref(null);

  const addDoc = async (doc) => {
    error.value = null;

    try {
      await db.collection(collection).add(doc);
    } catch (err) {
      console.log(err);
      error.value = "coludnt send a message";
    }
  };
  return { error, addDoc };
};
export default useCollection;
