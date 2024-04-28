'use client'
import { User } from "@/types/User"
import { ReactNode, createContext, useContext, useState } from "react"

interface AuthContextProps {
    children: ReactNode
}

type AuthContextType =
    {
        userToken: string | null;
        fetchSignUpUser: (user: User) => Promise<void>;
        fetchLoginUser: (user: User) => Promise<void>;
        fetchSignOut: () => Promise<void>
    }


export const AuthContext = createContext<AuthContextType>({
    userToken: null,
    fetchSignUpUser: async (user: User) => { },
    fetchLoginUser: async (user: User) => { },
    fetchSignOut: async () => { }
});

export const useAuth = () => {
    return useContext(AuthContext);
};


export default function AuthProvider({ children }: AuthContextProps) {
    const [userToken, setUserToken] = useState<string | null>(null);

    const fetchSignUpUser = async () => {

    }

    const fetchLoginUser = async () => {

    }


    const fetchSignOut = async () => {

    }

    
    const contextValue: AuthContextType = { userToken, fetchSignUpUser, fetchLoginUser, fetchSignOut }
    return (
        <AuthContext.Provider value={contextValue}>
            <div>
                {children}
            </div>
        </AuthContext.Provider>
    )
}