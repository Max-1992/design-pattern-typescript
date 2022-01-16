// Interface
import { ICommand } from "../interface/command"

// Class
import Lamp from "../lapm"

// Comando
class OnCommand implements ICommand {


    constructor (private readonly receiver: Lamp) {}

    public execute () {
        this.receiver.on()
    }
}

export default OnCommand