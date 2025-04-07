import React, { createContext, useState, useContext, ReactNode } from 'react';

interface User {
    userName: string;
    userId: string;
    enterDate: Date;
    fullName: string;
    emailAddress: string;
    permanentAddress: string;
    country: string;
    mobileNumber: string;
    telegramId: string;
    twitterId: string;
    discordId: string;
    loginWallet: string;
    btcWallet: string;
    solanaWallet: string;
    anotherWallet1: string;
    anotherWallet2: string;
    referred_by: string;
    isAdmin: Boolean;
}

interface UserContextType {
    user: User | null;
    setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
};