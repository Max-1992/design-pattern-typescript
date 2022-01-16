import Operation from "../../operation";
import { ITransaction } from "../../interfaces/transaction";

export class TwoHundredBillDispenser extends Operation  {
    public process (transaction: ITransaction) {
        const bills = Math.floor(transaction.amount / 200)
        const remain = transaction.amount % 200
 
        console.info(`Se entregaron ${bills} billetes de $200.`)
 
        if (!remain) return;
 
        transaction.amount = remain
        this.next(transaction)  
    }
}