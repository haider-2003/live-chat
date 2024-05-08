import { ref } from "vue";
import { firebaseAuth } from "@/firebase/config";

const user = ref(firebaseAuth.currentUser);

firebaseAuth.onAuthStateChanged((_user) => {
  console.log("user state changes", _user);
  user.value = _user;
});

const getUser = () => {
  return { user };
};
export default getUser;
