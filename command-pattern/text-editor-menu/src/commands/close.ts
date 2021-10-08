// Interface
import { ICommand } from './../interface/command';

// Class
import Document from '../document';

class CloseCommand implements ICommand {

    constructor (private readonly reciver: Document) {}

    public execute () {
        this.reciver.close()
    }
}

export default CloseCommand