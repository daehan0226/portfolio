import React, { useState, useEffect } from 'react';

import { db } from '../api/firebaseApi';
import { getDocs, collection } from 'firebase/firestore';

type useGetDocsProps = {
    collectionName: string;
};

const useGetDocs = <T extends object>({ collectionName }: useGetDocsProps) => {
    const [data, setData] = useState<T[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');

    const fetchData = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, collectionName));
            const temp: any[] = [];
            querySnapshot.forEach(doc => {
                temp.push(doc.data());
            });
            setData([...temp]);
        } catch (e) {
            setData([]);
            setError('Oops, something went wrong. Try later again!');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        setLoading(true);
        fetchData();
    }, []);

    return {
        data,
        loading,
        error,
    };
};

export default useGetDocs;
