import React, { createContext, useState, useContext, ReactNode } from 'react';

export interface Deal {
    _id: string;
    name: string;
    logo: string;
    banner: string;
    round: string;
    tokenprice: string;
    fdv: string;
    mc: string;
    vesttge: string;
    vestcliff: string;
    vestgap: string;
    fundrasing: string;
    fee: string;
    investmin: string;
    investmax: string;
    test: string;
    weburl: string;
    xurl: string;
    discordurl: string;
    teleurl: string;
    tc_pulltrust: boolean;
    tc_pinmsg: boolean;
    tc_answer: boolean;
    tc_responsible: boolean;
    tc_acknowledge: boolean;
    tc_allocation: boolean;
    tc_never: boolean;
    livedate: Date;
    createdate: Date;
    timezone: string;
    state: string;
}

interface DealContextType {
    deal: Deal | null;
    setDeal: React.Dispatch<React.SetStateAction<Deal | null>>;
}

const DealContext = createContext<DealContextType | undefined>(undefined);

export const DealProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [deal, setDeal] = useState<Deal | null>(null);

    return (
        <DealContext.Provider value={{ deal, setDeal }}>
            {children}
        </DealContext.Provider>
    );
};

export const useDeal = () => {
    const context = useContext(DealContext);
    if (!context) {
        throw new Error('useDeal must be used within a DealProvider');
    }
    return context;
};