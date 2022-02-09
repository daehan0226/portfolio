import firebase from 'firebase/compat/app';
import { getDatabase, ref } from 'firebase/database';
import { getFirestore } from 'firebase/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: process.env.REACT_APP_APIKEY,
    authDomain: process.env.REACT_APP_AUTHDOMAIN,
    projectId: process.env.REACT_APP_PROJECTID,
    storageBucket: process.env.REACT_APP_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
    appId: process.env.REACT_APP_APPID,
};

firebase.initializeApp(config);
const database = getDatabase(firebase.initializeApp(config));
export const db = getFirestore();
export const postsRef = ref(database, 'blog_posts');

export const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
