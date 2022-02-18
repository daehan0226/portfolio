import React from 'react';

import { db } from './firebaseApi';
import { setDoc, updateDoc, addDoc, doc, collection } from 'firebase/firestore';
import { IWorkDetailDates } from '../models';

const collectionName = 'work';

async function updateWork({ id_, newDoc }: { id_: string; newDoc: IWorkDetailDates }) {
    const result = await setDoc(doc(db, collectionName, id_), newDoc);
}

async function createWork({ newDoc }: { newDoc: IWorkDetailDates }) {
    const result = await addDoc(collection(db, collectionName), { ...newDoc, hasDeleted: false });
}

async function deleteWork(id_: string) {
    const result = await updateDoc(doc(db, collectionName, id_), { hasDeleted: true, updatedDate: new Date() });
}

async function recoverWork(id_: string) {
    const result = await updateDoc(doc(db, collectionName, id_), { hasDeleted: false, updatedDate: new Date() });
}

export { updateWork, createWork, deleteWork, recoverWork };
