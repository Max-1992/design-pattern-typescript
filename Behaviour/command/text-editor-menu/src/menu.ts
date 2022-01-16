// Interface
import { ICommand } from './interface/command'

class Menu {
    constructor (
        private readonly openCommand: ICommand,
        private readonly closeCommand: ICommand,
        private readonly saveCommand: ICommand
    ) {}

    public open () {
        this.openCommand.execute()
    }

    public close () {
        this.closeCommand.execute()
    }

    public save () {
        this.saveCommand.execute()
    }
}

export default Menu
