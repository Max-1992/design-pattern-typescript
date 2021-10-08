// Interface
import { ICommand } from './../interface/command';

// Class
import Document from '../document';

class OpenCommand implements ICommand {

    constructor (private readonly reciver: Document) {}

    public execute () {
        this.reciver.open()
    }
}

export default OpenCommand
