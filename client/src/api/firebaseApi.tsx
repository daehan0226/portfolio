import { initializeApp } from 'firebase/app';
import { getDatabase, ref } from 'firebase/database';
import { getFirestore } from 'firebase/firestore';

const config = {
    apiKey: process.env.REACT_APP_APIKEY,
    authDomain: process.env.REACT_APP_AUTHDOMAIN,
    projectId: process.env.REACT_APP_PROJECTID,
    storageBucket: process.env.REACT_APP_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
    appId: process.env.REACT_APP_APPID,
};

const app = initializeApp(config);
const database = getDatabase(app);
export const db = getFirestore();
export const postsRef = ref(database, 'blog_posts');
