import { Factory, Game } from './src/ejemplo_adapter.js'

console.log('\nPrimero probaremos el teclado')

const jugarConTeclado = Factory.getInstance().createTecladoAdapter()

const primerJuego = new Game(jugarConTeclado)

primerJuego.play()



console.log('\nAhora sigue el joystick...')

const jugarConJoystick = Factory.getInstance().createJoystickAdapter()

const segundoJuego = new Game(jugarConJoystick)

segundoJuego.play()

//-----------------------------------------------------------------------------

console.log(`\nTeclado`)

let tipo = 'teclado'

let controlador = Factory.getInstance().createDeviceAdapter(tipo)

new Game(controlador).play()



console.log(`\nJoystick`)

tipo = 'joystick'

controlador = Factory.getInstance().createDeviceAdapter(tipo)

new Game(controlador).play()





