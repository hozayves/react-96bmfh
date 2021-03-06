import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDYHSu7M-V-mLiey8NIxe8scuZ1eMLHl4E',
  authDomain: 'auth-77d05.firebaseapp.com',
  projectId: 'auth-77d05',
  storageBucket: 'auth-77d05.appspot.com',
  messagingSenderId: '941865764760',
  appId: '1:941865764760:web:243ee543f743ce08394ded',
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const signInWithGoogle = async() => {
  await signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result)
      const name = result.user.displayName;
      const email = result.user.email;
      const profilePic = result.user.photoURL;

      localStorage.setItem('name', name);
      localStorage.setItem('email', email);
      localStorage.setItem('photoURL', profilePic);
    })
    .catch((error) => {
      console.log(error);
    });
};
