class Document {
    constructor () {}

    public open () {
        console.log('Documento de texto abierto.');
    }

    public close () {
        console.log('Documento de texto cerrado.');
    }

    public save () {
        console.log('Documento de texto guardado.');
    }
}

export default Document
