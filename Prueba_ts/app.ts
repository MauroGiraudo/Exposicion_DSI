import { TecladoAdapter, JoystickAdapter, Teclado, Joystick, Game } from './src/1_Adaptador.js'
import { FactoryController } from './src/2_Factory.js'
import { FactoryControllerSingleton } from './src/3_Singleton.js'
import { GameSingleton } from './src/4_Estrategia.js'
import { ControllerAdapterComposite, FactoryControllerComposite } from './src/5_Composite.js'

// 1- [Patrón Adaptador]
/*
console.log('Teclado')

const teclado = new Teclado()

const tecladoAdapter = new TecladoAdapter(teclado)

const game1 = new Game(tecladoAdapter)

game1.play()



console.log('Joystick')

const joystick = new Joystick()

const joystickAdapter = new JoystickAdapter(joystick)

const game2 = new Game(joystickAdapter)

game2.play()
*/

// ----------------------------------------------------------------------------

// 2- [Patrón Factoría]
/*
console.log('\nTeclado')

const factory = new FactoryController()

let tipo = 'teclado'

const tecladoController = factory.createGameController(tipo)

new Game(tecladoController).play()



console.log('\nJoystick')

tipo = 'joystick'

const joystickController = factory.createGameController(tipo)

new Game(joystickController).play()
*/

//-----------------------------------------------------------------------------

// 3- [Patrón Singleton]
/*
console.log(`\nTeclado`)

let tipo = 'teclado'

let controlador = FactoryControllerSingleton.getInstance().createGameController(tipo)

let game1 = new Game(controlador).play()

game1.play()


console.log(`\nJoystick`)

tipo = 'joystick'

controlador = FactoryControllerSingleton.getInstance().createGameController(tipo)

let game2 = new Game(controlador)

game2.play()
*/

// ----------------------------------------------------------------------------

// 4- [Patrón Estrategia]
/* 
console.log(`\nTeclado`)

let tipo = 'teclado'

let controlador = FactoryControllerSingleton.getInstance().createGameController(tipo)

let game = GameSingleton.createGame(controlador)

game.play()



console.log(`\nJoystick`)

tipo = 'joystick'

let newController = FactoryControllerSingleton.getInstance().createGameController(tipo)

game.setController(newController)

game.play() 
*/

// ----------------------------------------------------------------------------

// 5- [Patrón Composite]

console.log(`\nTeclado`)

let tipo = 'teclado'

let controlador = FactoryControllerSingleton.getInstance().createGameController(tipo)

let game = GameSingleton.createGame(controlador)

game.play()



console.log(`\nJoystick`)

tipo = 'joystick'

let newController = FactoryControllerSingleton.getInstance().createGameController(tipo)

game.setController(newController)

game.play() 



console.log('\nTeclado y Joystick')

tipo = 'teclado y joystick'

newController = FactoryControllerComposite.getInstance().createGameController(tipo)

game.setController(newController)

game.play()





