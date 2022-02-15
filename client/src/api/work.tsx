import React from 'react';

import { db } from './firebaseApi';
import { setDoc, updateDoc, addDoc, doc, collection } from 'firebase/firestore';
import { ITimeLineItem } from '../models';

const collectionName = 'timeline';

async function updateWork({ id_, newDoc }: { id_: string; newDoc: ITimeLineItem }) {
    await setDoc(doc(db, collectionName, id_), newDoc);
}

async function createWork({ newDoc }: { newDoc: ITimeLineItem }) {
    await addDoc(collection(db, collectionName), newDoc);
}

async function deleteWork(id_: string) {
    console.log(id_);
    const result = await updateDoc(doc(db, collectionName, id_), { hasDeleted: true });
    console.log(result);
}

export { updateWork, createWork, deleteWork };
