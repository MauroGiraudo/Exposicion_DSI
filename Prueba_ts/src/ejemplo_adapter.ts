interface IDevice {
  press(input: string): void
}

class Teclado implements IDevice{
  press(tecla: string) {
    console.log(`Tecla ${tecla} presionada`)
  }
}

class Joystick implements IDevice{
  press(boton: string) {
    console.log(`Botón ${boton} presionado`)
  }
}

interface IGameController {
  kick(): void
  punch(): void
  defend(): void
  special(): void
}

class TecladoAdapter implements IGameController {
  private teclado: Teclado

  constructor(teclado: Teclado) {
    this.teclado = teclado
  }

  kick() {
    this.teclado.press('U')
  }

  punch() {
    this.teclado.press('I')
  }

  defend() {
    this.teclado.press('J')
  }

  special() {
    this.teclado.press('K')
  }
}

class JoystickAdapter implements IGameController {
  private joystick: Joystick

  constructor(joystick: Joystick) {
    this.joystick = joystick
  }

  kick() {
    this.joystick.press('A')
  }

  punch() {
    this.joystick.press('B')
  }

  defend() {
    this.joystick.press('X')
  }

  special() {
    this.joystick.press('Y')
  }
}

class FactoryController {
// No sé si es correcto crear un "create" por cada clase que hereda de "IGameController"
  createTecladoAdapter(): IGameController {
    return new TecladoAdapter(new Teclado())
  }

  createJoystickAdapter(): IGameController {
    return new JoystickAdapter(new Joystick())
  }

// O directamente crear un "create" para todas las clases que heredan de "IGameController"
  createGameController(tipo?: string): IGameController {
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

class FactoryControllerSingleton {
  private static instance: FactoryControllerSingleton

  static getInstance(): FactoryControllerSingleton {
    if(!FactoryControllerSingleton.instance){
      FactoryControllerSingleton.instance = new FactoryControllerSingleton()
    }
    return FactoryControllerSingleton.instance
  }
// No sé si es correcto crear un "create" por cada clase que hereda de "IGameController"
  createTecladoAdapter(): IGameController {
    return new TecladoAdapter(new Teclado())
  }

  createJoystickAdapter(): IGameController {
    return new JoystickAdapter(new Joystick())
  }

// O directamente crear un "create" para todas las clases que heredan de "IGameController"
  createGameController(tipo?: string): IGameController {
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
  private controller: IGameController

  constructor(controller: IGameController){
    this.controller = controller
  }

  play() {
    this.controller.kick()
    this.controller.punch()
    this.controller.defend()
    this.controller.special()
  }
}

export { Teclado, Joystick, IGameController, TecladoAdapter, JoystickAdapter, FactoryControllerSingleton, Game }  