import React from 'react';

import { db } from './firebaseApi';
import { setDoc, addDoc, doc, collection } from 'firebase/firestore';

async function upsertDoc<T>({ collectionName, id_ = '', newDoc }: { collectionName: string; id_?: string; newDoc: T }) {
    if (id_) {
        await setDoc(doc(db, collectionName, id_), newDoc);
    } else {
        await addDoc(collection(db, collectionName), newDoc);
    }
}

export default upsertDoc;
