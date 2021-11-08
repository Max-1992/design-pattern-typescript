import Operation from "../../operation";
import { ITransaction } from "../../interfaces/transaction";

export class FiveHundredBillDispenser extends Operation {
    public process (transaction: ITransaction) {
       const bills = Math.floor(transaction.amount / 500)
       const remain = transaction.amount % 500

       console.info(`Se entregaron ${bills} billetes de $500.`)

       if (!remain) return;

       transaction.amount = remain
       this.next(transaction)       
    }
}
