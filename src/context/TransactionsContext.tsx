import { createContext, ReactNode, useEffect, useState } from "react";


interface Transaction {
    id: number;
    description: string;
    type: 'income' | 'outcome';
    price: number;
    category: string;
    createdAt: string;

}

interface TransactionsContextType {
    transactions: Transaction[];
}

interface TransactionsProviderProps {
    children: ReactNode;
}

export const TransactionsContext = createContext({} as TransactionsContextType);


export function TransactionsProvider({ children }: TransactionsProviderProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    async function loadTransactions() {
        return await fetch('http://localhost:3333/transactions').then((res) => {
            return res.json()
        })
    }

    useEffect(() => {

        loadTransactions().then((res) => {
            setTransactions(res)
        })

    }, [])

    return (
        <TransactionsContext.Provider value={{ transactions }}>
            {children}
        </TransactionsContext.Provider>
    )
}