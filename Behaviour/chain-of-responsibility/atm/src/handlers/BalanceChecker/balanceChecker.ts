import Operation from "../../operation";
import { ITransaction } from "../../interfaces/transaction";

export class BalanceChecker extends Operation {
    public process (transaction: ITransaction) {
        const hasBalance = transaction.amount < transaction.balance

        if(!hasBalance) {
            console.info(`No posee saldo disponible para realizar la operación. Su saldo disponible es: ${transaction.balance}`)
            return
        }
       
        this.next(transaction)
    }
}

