import { useContext, useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { TransactionsContext } from "../../context/TransactionsContext";
import { SearhcForm } from "./components/SearchForm";
import { PriceHighlight, TransactionsContainer, TransactionsTable } from "./styles";


export function Transactions() {
    const { transactions } = useContext(TransactionsContext);


    return (
        <div>
            <Header />
            <Summary />
            <TransactionsContainer>
                <SearhcForm />
                <TransactionsTable>
                    <tbody>
                        {transactions.map((transaction) => (
                            <tr key={transaction.id}>
                                <td width={"50%"}>
                                    {transaction.description}
                                </td>
                                <td>
                                    <PriceHighlight variant={transaction.type}>R$ {transaction.price}</PriceHighlight>
                                </td>
                                <td>{transaction.type}</td>
                                <td>{new Date(transaction.createdAt).toLocaleDateString('pt-BR', {
                                    year: 'numeric',
                                    month: '2-digit',
                                    day: '2-digit'
                                })}</td>
                            </tr>
                        ))}
                    </tbody>
                </TransactionsTable>
            </TransactionsContainer>
        </div>
    )
}