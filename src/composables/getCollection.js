import { ref, watchEffect } from "vue";
import { db } from "@/firebase/config";

const getCollection = (collection) => {
  const documents = ref(null);
  const error = ref(null);

  let collectionRef = db.collection(collection).orderBy("createdAt");

  const unsub = collectionRef.onSnapshot(
    (snapshot) => {
      let result = [];
      snapshot.forEach((doc) => {
        doc.data().createdAt && result.push({ id: doc.id, ...doc.data() });
      });
      documents.value = result;
      error.value = null;
    },
    (err) => {
      console.log(err.message);
      documents.value = null;
      error.value = "coludnt fetch data failed";
    }
  );
  watchEffect((onInvalidate) => {
    onInvalidate(()=> unsub())
  })
  return { documents, error };
};
export default getCollection;
