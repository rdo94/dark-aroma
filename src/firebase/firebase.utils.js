import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyABIqy44Nm8njZr1hsnxyvepA4EJsJk3xo",
  authDomain: "dark-aroma.firebaseapp.com",
  databaseURL: "https://dark-aroma.firebaseio.com",
  projectId: "dark-aroma",
  storageBucket: "dark-aroma.appspot.com",
  messagingSenderId: "703248028481",
  appId: "1:703248028481:web:36412fc872a4562aba87c0",
  measurementId: "G-J8YYFD14SJ"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("Error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(firebaseConfig);

//* AUTHENTICATION + FIRESTORE MODULES
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
