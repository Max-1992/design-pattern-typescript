/**
 * El patrón de diseño "comando" o "command" se utiliza para encapcular en un objeto toda la información necesara para realizar una acción o disparar un evento.
   Este patrón permite apilar comando para su ejecución en cadena y además permite ejecutarlos de manera inversa, dicho de otra forma también permite hacer un dehacer.
 * En este pantrón de diseño son 4 los terminos que se manejaran de forma asociativa.
 * Cliente: Es quien manda a llamar o a ejecutar el invocador.. Ej: El Usuario jugando a la consola de juegos.
 * Invocador: El disparador del comando. Ej: El control de la consola.
 * Comando: La acción selecciónada. Ej: Se presión el boton de Mover a la izquierda.
 * Receptor: Quien recibe y realiza la acción. Ej: La consola.
 * Detalle: 
 * 1. Crearemos una clase para implementar el Receptor, este será el encargado de contener la implementación de nuestra logica de negocio.
 * 2. Crearemos una clase comando por cada acción a realizar, las cuales compartiran una insterfaz común. Cada comando deberá recibir en su constructor una instancia de nuestro Receptor.
 * 3. Crearemos una clase para implementar nuestro invocador o disparador. Esta clase recibira en su constructor todos los comandos que nuestro sistema posea para realizar las diferentes acceiones.
 */

// Receptor 
import Document from './document'

// Comandos
import { ICommand } from './interface/command';
import OpenCommand from './commands/open'
import CloseCommand from './commands/close';
import SaveCommand from './commands/save';

// Invocador
import Menu from './menu';

// Receptor
const document = new Document()

// Comando -- Interface
const openCommand = new OpenCommand(document) as ICommand
const closeCommand = new CloseCommand(document) as ICommand
const saveCommand = new SaveCommand(document) as ICommand

// Invocador
const summoner = new Menu(openCommand, closeCommand, saveCommand)

// Cliente
summoner.open()
summoner.save()
summoner.close()