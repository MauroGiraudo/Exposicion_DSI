class Teclado {
  pressTecla(tecla: string) {
    console.log(`Tecla ${tecla} presionada`)
  }
}

class Joystick {
  pressBoton(boton: string) {
    console.log(`Botón ${boton} presionado`)
  }
}

interface GameController {
  kick(): void
  punch(): void
  defend(): void
  special(): void
}

class TecladoAdapter implements GameController {
  private teclado: Teclado

  constructor(teclado: Teclado) {
    this.teclado = teclado
  }

  kick() {
    this.teclado.pressTecla('U')
  }

  punch() {
    this.teclado.pressTecla('I')
  }

  defend() {
    this.teclado.pressTecla('J')
  }

  special() {
    this.teclado.pressTecla('K')
  }
}

class JoystickAdapter implements GameController {
  private joystick: Joystick

  constructor(joystick: Joystick) {
    this.joystick = joystick
  }

  kick() {
    this.joystick.pressBoton('A')
  }

  punch() {
    this.joystick.pressBoton('B')
  }

  defend() {
    this.joystick.pressBoton('X')
  }

  special() {
    this.joystick.pressBoton('Y')
  }
}

class Factory {
  private static instance: Factory

  static getInstance(): Factory {
    if(!Factory.instance){
      Factory.instance = new Factory()
    }
    return Factory.instance
  }
// No sé si es correcto crear un "create" por cada clase que hereda de "GameController"
  createTecladoAdapter(): GameController {
    return new TecladoAdapter(new Teclado())
  }

  createJoystickAdapter(): GameController {
    return new JoystickAdapter(new Joystick())
  }

// O directamente crear un "create" para todas las clases que heredan de "GameController"
  createGameController(tipo?: string): GameController {
    switch(tipo) {
      case 'teclado':
        return new TecladoAdapter(new Teclado())
      case 'joystick':
        return new JoystickAdapter(new Joystick())
      default:
        throw new Error('Tipo de controlador no válido')
    }
  }
}

class Game {
  private controller: GameController

  constructor(controller: GameController){
    this.controller = controller
  }

  play() {
    this.controller.kick()
    this.controller.punch()
    this.controller.defend()
    this.controller.special()
  }
}

export { Teclado, Joystick, GameController, TecladoAdapter, JoystickAdapter, Factory, Game }  