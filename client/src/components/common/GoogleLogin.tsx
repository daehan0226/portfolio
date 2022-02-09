import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import GoogleIcon from '@mui/icons-material/Google';
import Button from '@mui/material/Button';

import firebase, { signInWithGoogle, auth } from '../../api/firebaseApi';

const Login: React.FC = () => {
    const [user, setUser] = useState<any>(null);
    useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
            console.log(user);
            setUser(user);
        });
    }, []);
    return (
        <div>
            {/* <TextField
                label="input"
                color="secondary"
                focused
                value={value}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setValue(e.target.value);
                }}
            />
            <Button
                variant="outlined"
                onClick={() => {
                    upsertDoc({ collectionName: 'Test', newDoc: { value } });
                    console.log(value);
                }}
            >
                Submit
            </Button> */}
            {user ? (
                <Button variant="outlined" onClick={() => auth.signOut()} startIcon={<GoogleIcon />}>
                    Sign out
                </Button>
            ) : (
                <Button variant="outlined" onClick={signInWithGoogle} startIcon={<GoogleIcon />}>
                    Sign in
                </Button>
            )}
        </div>
    );
};

export default Login;
