import Operation from "../../operation";
import { ITransaction } from "../../interfaces/transaction";

export class OneHundredBillDispenser extends Operation  {
    public process (transaction: ITransaction) {
        const bills = Math.floor(transaction.amount / 100)
        const remain = transaction.amount % 100
 
        console.info(`Se entregaron ${bills} billetes de $100.`)
 
        if (!remain) return;
 
        transaction.amount = remain
        this.next(transaction)  
    }
}