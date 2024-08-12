import {createContext} from 'react';

export const AuthContext = createContext({
        isLoggedIn:false,
        userId:'',
        userType:'',
        eId:'',
        login: () => {},
        logout: () => {}
    }
);