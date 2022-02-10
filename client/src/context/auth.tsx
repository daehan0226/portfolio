import React, { useReducer, FC, ReactNode, createContext } from 'react';

enum AuthActionType {
    SET_AUTH = 'SET_AUTH',
    CLEAR_AUTH = 'CLEAR_AUTH',
}

const initialState = {
    auth: {
        loggedIn: false,
        isAdmin: false,
    },
};

interface AuthState {
    auth: {
        loggedIn: boolean;
        isAdmin: boolean;
    };
}

interface AuthStateProps {
    children: ReactNode;
}

interface SetAuthAction {
    type: typeof AuthActionType.SET_AUTH | typeof AuthActionType.CLEAR_AUTH;
    payload: {
        loggedIn: boolean;
        isAdmin: boolean;
    };
}

interface ContextProps {
    state: AuthState;
    dispatch: {
        setAuth: (isAdmin: boolean) => void;
        clearAuth: () => void;
    };
}

const AuthReducer = (state: AuthState, action: SetAuthAction): AuthState => {
    switch (action.type) {
        case AuthActionType.SET_AUTH:
            return {
                auth: {
                    loggedIn: action.payload.loggedIn,
                    isAdmin: action.payload.isAdmin,
                },
            };
        case AuthActionType.CLEAR_AUTH:
            return {
                auth: {
                    loggedIn: action.payload.loggedIn,
                    isAdmin: action.payload.isAdmin,
                },
            };
        default:
            return state;
    }
};

export const AuthContext = createContext({} as ContextProps);

const AuthState: FC<AuthStateProps> = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, initialState);

    const setAuth = (isAdmin: boolean) => {
        dispatch({
            type: AuthActionType.SET_AUTH,
            payload: { loggedIn: true, isAdmin },
        });
    };

    const clearAuth = () => {
        dispatch({
            type: AuthActionType.CLEAR_AUTH,
            payload: { loggedIn: false, isAdmin: false },
        });
    };

    return <AuthContext.Provider value={{ state, dispatch: { setAuth, clearAuth } }}>{children}</AuthContext.Provider>;
};

export default AuthState;
