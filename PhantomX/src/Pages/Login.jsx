import { auth } from "../firebase.js";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

function Login() {

  const loginWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <button
        onClick={loginWithGoogle}
        className="bg-blue-500 text-white px-6 py-2 rounded"
      >
        Login with Google
      </button>
    </div>
  );
}

export default Login;
