import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
	apiKey: "AIzaSyBn1ijraAhuZ2dKnkkvFtGHAfQ28_53Cqc",
	authDomain: "react-ecommerce-699ac.firebaseapp.com",
	databaseURL: "https://react-ecommerce-699ac.firebaseio.com",
	projectId: "react-ecommerce-699ac",
	storageBucket: "react-ecommerce-699ac.appspot.com",
	messagingSenderId: "342549702722",
	appId: "1:342549702722:web:454d2086fe892a778f25db",
	measurementId: "G-JXEBXSF49D"
};

export const createUserProfileDocument = async (userAuth, addtionalData) => {
   if(!userAuth) return;

   const userRef = firestore.doc(`users/${userAuth.uid}`);
   const snapShot = await userRef.get();
   if (!snapShot.exists) {
      const {displayName, email} = userAuth;
      const createdAt = new Date();
      try {
         userRef.set({
            displayName,
            email,
            createdAt,
            ...addtionalData
         })
      } catch (error) {
         console.log('error creating user', error.message);
      }
   }

   return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({promt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;