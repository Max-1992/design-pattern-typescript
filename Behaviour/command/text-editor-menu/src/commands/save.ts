// Interface
import { ICommand } from './../interface/command';

// Class
import Document from '../document';

class SaveCommand implements ICommand {

    constructor (private readonly reciver: Document) {}

    public execute () {
        this.reciver.save()
    }
}

export default SaveCommand
