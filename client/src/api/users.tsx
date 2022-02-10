import React from 'react';

import { db } from './firebaseApi';
import { doc, getDoc } from 'firebase/firestore';

async function isAdminUser(uid: string) {
    const docRef = doc(db, 'users', uid);
    const docSnap = await getDoc(docRef);
    return docSnap.exists() && docSnap.data().admin;
}

export default isAdminUser;
