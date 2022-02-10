import React, { useState, useEffect } from 'react';

import { db } from '../api/firebaseApi';
import { getDocs, collection, query, orderBy, limit, QueryConstraint } from 'firebase/firestore';

interface IGenQueryProps {
    sortOrder?: 'desc' | 'asc';
    sortKey?: string;
    limitNumber?: number;
}

interface IGetDocsProps extends IGenQueryProps {
    collectionName: string;
}
const genQuery = ({ sortKey, sortOrder, limitNumber }: IGenQueryProps): QueryConstraint[] => {
    const queryConditions = [];
    if (sortKey) {
        queryConditions.push(orderBy(sortKey, sortOrder));
    }
    if (limitNumber) {
        queryConditions.push(limit(limitNumber));
    }
    return queryConditions;
};

const useGetDocs = <T extends object>({ collectionName, sortOrder = 'desc', sortKey = '', limitNumber }: IGetDocsProps) => {
    const [data, setData] = useState<T[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');

    const fetchData = async () => {
        const col = collection(db, collectionName);
        const q = await query(col, ...genQuery({ sortKey, sortOrder, limitNumber }));

        try {
            const querySnapshot = await getDocs(q);
            const temp: any[] = [];
            querySnapshot.forEach(doc => {
                temp.push({ id: doc.id, ...doc.data() });
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
