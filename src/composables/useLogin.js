import { ref } from "vue";
import { firebaseAuth } from "@/firebase/config";

const error = ref(null);

const login = async (email, password) => {
  error.value = null;
  try {
    const res = await firebaseAuth.signInWithEmailAndPassword(email, password);
 
    error.value = null;
    console.log(res);
    return res;
  } catch (err) {
    error.value ="invalid email or password";
  }
};

const useLogin = () => {
  return { error, login };
};
export default useLogin;
