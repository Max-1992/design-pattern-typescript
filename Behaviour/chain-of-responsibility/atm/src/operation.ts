import { ITransaction } from "./interfaces/transaction"

class Operation {

    public operation: Operation = null

    then (operation: Operation) {
        this.operation = operation
    }

    next (transaction: ITransaction) {
        this.operation.process(transaction)
    }

    process (transaction: ITransaction) {
        this.operation.process(transaction)
    }

}

export default Operation
