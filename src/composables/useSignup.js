import { ref } from "vue";
import { firebaseAuth } from "@/firebase/config";

const error = ref(null);

const signup = async (email, password, displayName) => {
  error.value = null;
  console.log(email);

  try {
    const res = await firebaseAuth.createUserWithEmailAndPassword(
      email,
      password
    );
    if (!res) throw new Error("couldnot complete the signup");
    res.user.updateProfile({ displayName });
    error.value = null;

    return res;
  } catch (err) {
    console.log(err.message);
    error.value = err.message;
  }
};

const useSignup = () => {
  return { error, signup };
};

export default useSignup;
