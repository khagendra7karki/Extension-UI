import React, { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext<any>(null);


export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }: {children: React.ReactNode}) => {
    const [user, setUser] = useState(null)

    return (
    <AuthContext.Provider value={{user, setUser}}>
        {children}
    </AuthContext.Provider>
);
};

export default AuthProvider;