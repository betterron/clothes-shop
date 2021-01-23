import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyA4YALHrvkdFo8vN8hxS4C-UkNGhx8lM3s",
  authDomain: "crwn-db-589c7.firebaseapp.com",
  projectId: "crwn-db-589c7",
  storageBucket: "crwn-db-589c7.appspot.com",
  messagingSenderId: "956136954232",
  appId: "1:956136954232:web:78dce5fbe9d2b942df508d",
  measurementId: "G-Y49GQMNMD4"
};
// luu du lieu vao db 
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`)
  try {
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
        })
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }
  } catch (error) {
    console.log(error);
  }
  return userRef
}
// ket thuc luu 
firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => { auth.signInWithPopup(provider) };

export default firebase;
