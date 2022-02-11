import React from 'react';

import { db } from './firebaseApi';
import { setDoc, updateDoc, addDoc, doc, collection } from 'firebase/firestore';
import { ITimeLineItem } from '../models';

const collectionName = 'timeline';

async function updateTimeline({ id_, newDoc }: { id_: string; newDoc: ITimeLineItem }) {
    await setDoc(doc(db, collectionName, id_), newDoc);
}

async function createTimeline({ newDoc }: { newDoc: ITimeLineItem }) {
    await addDoc(collection(db, collectionName), newDoc);
}

async function deleteTimeline(id_: string) {
    console.log(id_);
    const result = await updateDoc(doc(db, collectionName, id_), { hasDeleted: true });
    console.log(result);
}

export { updateTimeline, createTimeline, deleteTimeline };
