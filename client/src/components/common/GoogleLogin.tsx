import React, { useEffect, useContext } from 'react';
import GoogleIcon from '@mui/icons-material/Google';
import Button from '@mui/material/Button';
import { AuthContext } from '../../context';

import firebase, { signInWithGoogle, auth } from '../../api/firebaseApi';
import isAdminUser from '../../api/users';

const Login: React.FC = () => {
    const {
        state,
        dispatch: { setAuth, clearAuth },
    } = useContext(AuthContext);

    useEffect(() => {
        handleLogIn();
    }, []);

    const handleLogIn = () => {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                isAdminUser(user.uid).then(res => {
                    setAuth(res);
                });
            }
        });
    };

    const handleLogOut = async () => {
        await auth.signOut();
        clearAuth();
    };

    return (
        <>
            {state.auth.loggedIn ? (
                <Button variant="text" onClick={handleLogOut} startIcon={<GoogleIcon />}>
                    Sign out
                </Button>
            ) : (
                <Button variant="text" onClick={signInWithGoogle} startIcon={<GoogleIcon />}>
                    Sign in
                </Button>
            )}
        </>
    );
};

export default Login;
