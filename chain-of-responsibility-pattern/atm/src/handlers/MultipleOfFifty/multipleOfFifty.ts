import Operation from "../../operation";
import { ITransaction } from "../../interfaces/transaction";

export class MultipleOfFifty extends Operation { 

    public process (transaction: ITransaction) {
        const isMultipleOfFifty = transaction.amount % 50 === 0

        if (!isMultipleOfFifty) {
            console.info(`La cantidad solicitada debe ser multiplo de 50. Cantidad solicitada en la operación: ${transaction.amount}`)
            return;
        }

        this.next(transaction)
    }

}