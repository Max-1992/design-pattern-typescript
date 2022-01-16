// Interface
import { ICommand } from "../interface/command"

// Class
import Lamp from "../lapm"

// Comando
class OffCommand implements ICommand {


    constructor (private readonly receiver: Lamp) {}

    public execute () {
        this.receiver.off()
    }
}

export default OffCommand