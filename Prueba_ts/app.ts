import { FactoryControllerSingleton, Game } from './src/ejemplo_adapter.js'

console.log('\nPrimero probaremos el teclado')

const jugarConTeclado = FactoryControllerSingleton.getInstance().createTecladoAdapter()

const primerJuego = new Game(jugarConTeclado)

primerJuego.play()



console.log('\nAhora sigue el joystick...')

const jugarConJoystick = FactoryControllerSingleton.getInstance().createJoystickAdapter()

const segundoJuego = new Game(jugarConJoystick)

segundoJuego.play()

//-----------------------------------------------------------------------------

console.log(`\nTeclado`)

let tipo = 'teclado'

let controlador = FactoryControllerSingleton.getInstance().createGameController(tipo)

new Game(controlador).play()



console.log(`\nJoystick`)

tipo = 'joystick'

controlador = FactoryControllerSingleton.getInstance().createGameController(tipo)

new Game(controlador).play()





