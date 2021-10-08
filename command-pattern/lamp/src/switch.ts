// Interface
import { ICommand } from "./interface/command";

class Switch {
    constructor (private readonly onCommand: ICommand, private readonly offCommand: ICommand) {}

    public on () {
        this.onCommand.execute()
    }

    public off () {
        this.offCommand.execute()
    }
}

export default Switch
