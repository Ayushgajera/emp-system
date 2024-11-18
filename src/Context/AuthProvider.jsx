import React, { createContext, useEffect, useState } from 'react'
import { getlocalStorage, setlocalStorage } from '../utils/LocalStorage';

export const AuthContext=createContext()
function AuthProvider({children}) {
   
    const [userData, setUserData] = useState();
    useEffect(() => {
        const {employee,admin}=getlocalStorage();
        // setlocalStorage();
        setUserData({employee,admin});
    
    }, []);
    
    return (
        <div>
            <AuthContext.Provider value={userData}>
                {children}
            </AuthContext.Provider>
        </div>
    )
}

export default AuthProvider
