import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { PriceHighlight, TransactionsContainer, TransactionsTable } from "./styles";

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <TransactionsTable>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento de site</td>
              <td>
                <PriceHighlight variant="income">
                  R$ 17.400,00
                </PriceHighlight>
              </td>
              <td>Venda</td>
              <td>14/09/2023</td>
            </tr>

            <tr>
              <td width="50%">Rancho do mês</td>
              <td>
                <PriceHighlight variant="outcome">
                  - R$ 1.400,00
                </PriceHighlight>
              </td>
              <td>Alimentação</td>
              <td>14/09/2023</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}