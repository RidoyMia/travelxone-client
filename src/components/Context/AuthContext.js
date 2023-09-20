import React, { createContext, useState } from 'react';
export const AuthContextElement = createContext(null)
const AuthContext = ({children}) => {
    const [user,setUser] = useState(null)
    const info = {user,setUser}
    return (
        <div>
            <AuthContextElement.Provider value={info} >
                {children}
            </AuthContextElement.Provider>
        </div>
    );
};

export default AuthContext;