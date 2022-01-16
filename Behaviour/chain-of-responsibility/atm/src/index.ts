/**
 * El patrón de diseño "Cadena de responsabilidad" o "chain-of-responsibility-pattern" se utiliza para encadenar instancias de objetos entre sí permitiendo procesar y resolver una petición 
   que tiene por defecto una secuencia de pasos estructurada. También puede ser implementado encadenando multiples métodos de una unica clase.
   Cada eslavon de la cadena debe poder procear la petición, delegar el procesamiento a otro eslavon o terminar el procesamiento de la petición. En caso de que un eslavon delege el procesamiento a otro, 
   este proceso se debera repetir hasta que la petición pase por todos los eslavones de la cadena o alguno la finalice.
 * En este pantrón de diseño existen 3 conceptos principales.
 * Cliente: Es quien manda realiza la petición
 * Peticion: Es el requerimiento a resolover.
 * Handlers: Los handlers o manejadores representan los eslavones de la cadena que procesaran la logica para resolver la petción.
 * Detalle: 
 * Un cajero automátoco podría funcionar con el patrón de cadena de responsabilidad.
 * 1. Un cliente solicita un retiro de $1300 pesos de un cajero automático.
 * 2. El cajero procesa la petición de retiro de $1300 pesos.
 * 3. El primer handler recibe la petición y entrega dos billete de $500 pesos. Luego al no poder cumplir con el monto restante de la solicitud, decide delegar la petición al siguiente handler.
 * 4. El segundo handler recibe la petición y entrega un billete de $200 pesos. Luego al no poder cumplir con el monto restante de la solicitud, decide delegar la petición al siguiente handler.
 * 5. El tercer handler recibe la petición y entrega un billete de $100 pesos. Luego finaliza la ejecucuión de la petición ya que esta se ha resuelto existosamente.
 * 6. El cuarto handler que devuelve billetes de $50 pesos no fue ejecutado porque la petición se puedo resolver en un step anterior.
 */

// Interface
import { ITransaction } from './interfaces/transaction'

// Handlers
import { MultipleOfFifty, BalanceChecker, FiveHundredBillDispenser, TwoHundredBillDispenser, OneHundredBillDispenser, FiftyBillDispenser } from './handlers'


// Ejecutar programa
const transaction = { amount: 2350, balance: 2500 } as ITransaction

const multipleOfFifty = new MultipleOfFifty()
const balanceChecker = new BalanceChecker()
const fiveHundredBillDispenser = new FiveHundredBillDispenser()
const twoHundredBillDispenser = new TwoHundredBillDispenser()
const oneHundredBillDispenser = new OneHundredBillDispenser()
const fiftyBillDispenser = new FiftyBillDispenser()


// First Step
multipleOfFifty.then(balanceChecker)

// Second Step
balanceChecker.then(fiveHundredBillDispenser)

// Third Step
fiveHundredBillDispenser.then(twoHundredBillDispenser)

// Fourth step
twoHundredBillDispenser.then(oneHundredBillDispenser)

// Fifth step
oneHundredBillDispenser.then(fiftyBillDispenser)

// Init process
multipleOfFifty.process(transaction)
