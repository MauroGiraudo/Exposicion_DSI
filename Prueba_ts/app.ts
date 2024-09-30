import { Teclado, Joystick, TecladoAdapter, JoystickAdapter, Game } from './src/1_Adaptador copy.js'
import { FactoryController } from './src/2_Factory copy.js'
import { FactoryControllerSingleton } from './src/3_Singleton copy.js'
import { GameEstrategia } from './src/4_Estrategia copy.js'
import { FactoryControllerComposite } from './src/5_Composite copy.js'

// 1- [NUEVO Patrón Adaptador]
/*
console.log('\nTeclado')

const teclado = new Teclado()

const tecladoAdapter = new TecladoAdapter(teclado)

const game1 = new Game(tecladoAdapter)

game1.play('U')



console.log('\nJoystick')

const joystick = new Joystick()

const joystickAdapter = new JoystickAdapter(joystick)

const game2 = new Game(joystickAdapter)

game2.play('X')
*/

// ----------------------------------------------------------------------------

// 2- [NUEVO Patrón Factoría]
/*
console.log('\nTeclado')

let tipo = 'teclado'

try {
  const factory = new FactoryController()
  const tecladoController = factory.createGameController(tipo)
  const game = new Game(tecladoController)
  game.play('U')

} catch(error: any) {
  console.log(error.message)
}



console.log('\nJoystick')

tipo = 'joystick'
try {
  const factory = new FactoryController()
  const joystickController = factory.createGameController(tipo)
  const game = new Game(joystickController)
  game.play('X')

} catch(error: any) {
  console.log(error.message)   
}
*/

// ----------------------------------------------------------------------------

// 3- [NUEVO Patrón Singleton]
/*
console.log(`\nTeclado`)

let tipo = 'teclado'

try {
  const factory = FactoryControllerSingleton.getInstance()
  const controlador = factory.createGameController(tipo)
  const game = new Game(controlador)
  game.play('I')

} catch(error: any) {
  console.log(error.message)
}


console.log(`\nJoystick`)

tipo = 'joystick'
try {
  const factory = FactoryControllerSingleton.getInstance()
  let controlador = factory.createGameController(tipo)
  let game = new Game(controlador)
  game.play('B')

} catch(error: any) {
  console.log(error.message)   
}
*/

// ----------------------------------------------------------------------------

// 4- [Patrón Estrategia]
/*
console.log(`\nTeclado`)

let tipo = 'teclado'

try {

  const factory = FactoryControllerSingleton.getInstance()
  let tecladoController = factory.createGameController(tipo)
  let game = GameEstrategia.createGame()
  game.setController(tecladoController)
  game.play('I')


  console.log(`\nJoystick`)
  tipo = 'joystick'
  let joystickController = factory.createGameController(tipo)
  game.setController(joystickController)
  game.play('A')

} catch(error: any) {
  console.log(error.message)
}
*/

// ----------------------------------------------------------------------------

// 5- [Patrón Composite]
/*
console.log(`\nTeclado`)

let tipo = 'teclado'

try {
  const factory = FactoryControllerComposite.getInstance()
  let tecladoController = factory.createGameController(tipo)
  let game = GameEstrategia.createGame()
  game.setController(tecladoController)
  game.play('A')


  console.log(`\nJoystick`)
  let joystickController = factory.createGameController('joystick')
  game.setController(joystickController)
  game.play('U')


  console.log('\nTeclado y Joystick')
  let tecladoYJoystickController = factory.createGameController('teclado y joystick')
  game.setController(tecladoYJoystickController)
  game.play('J')
  game.play('X')

} catch(error: any) {
  console.log(error.message)
}
*/