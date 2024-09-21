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

interface IDeviceAdapter {
  kick(): void
  punch(): void
  defend(): void
  special(): void
}

class TecladoAdapter implements IDeviceAdapter {
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

class JoystickAdapter implements IDeviceAdapter {
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

class Factory {
  private static instance: Factory

  static getInstance(): Factory {
    if(!Factory.instance){
      Factory.instance = new Factory()
    }
    return Factory.instance
  }
// No sé si es correcto crear un "create" por cada clase que hereda de "IDeviceAdapter"
  createTecladoAdapter(): IDeviceAdapter {
    return new TecladoAdapter(new Teclado())
  }

  createJoystickAdapter(): IDeviceAdapter {
    return new JoystickAdapter(new Joystick())
  }

// O directamente crear un "create" para todas las clases que heredan de "IDeviceAdapter"
  createDeviceAdapter(tipo?: string): IDeviceAdapter {
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
  private controller: IDeviceAdapter

  constructor(controller: IDeviceAdapter){
    this.controller = controller
  }

  play() {
    this.controller.kick()
    this.controller.punch()
    this.controller.defend()
    this.controller.special()
  }
}

export { Teclado, Joystick, IDeviceAdapter, TecladoAdapter, JoystickAdapter, Factory, Game }  