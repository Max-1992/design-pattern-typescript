import Operation from "../../operation";
import { ITransaction } from "../../interfaces/transaction";

export class FiftyBillDispenser extends Operation  {
    public process (transaction: ITransaction) {
        const bills = Math.floor(transaction.amount / 50)
        console.info(`Se entregaron ${bills} billetes de $50.`)
 
        return;
    }
}