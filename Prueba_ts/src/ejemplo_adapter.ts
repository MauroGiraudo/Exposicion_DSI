interface IDevice {
  press(input: string | string[]): void
}

class Teclado implements IDevice{
  press(tecla: string | string[]) {
    if(typeof tecla === 'object') {
      console.log(`Teclas ${tecla.join(', ')} presionadas`)
    } else {
      console.log(`Tecla ${tecla} presionada`)
    }  
  }
}

class Joystick implements IDevice{
  press(boton: string | string[]) {
    if(typeof boton === 'object') {
      console.log(`Botones ${boton.join(', ')} presionados`)
    } else {
      console.log(`Botón ${boton} presionado`)
    }
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
    this.teclado.press(['U', 'I'])
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
    this.joystick.press(['A', 'B'])
  }
}

class FactoryController {
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

  private constructor() {}

  static getInstance(): FactoryControllerSingleton {
    if(!FactoryControllerSingleton.instance){
      FactoryControllerSingleton.instance = new FactoryControllerSingleton()
    }
    return FactoryControllerSingleton.instance
  }

  createGameController(tipo: string): IGameController {
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

// Teclado sin considerar Composite
/*
class Teclado implements IDevice{
  press(tecla: string) {
    console.log(`Tecla ${tecla} presionada`) 
  }
}
*/

//Teclado con Composite
/*
class Teclado implements IDevice{
  press(tecla: string | string[]) {
    if(typeof tecla === 'object') {
      console.log(`Teclas ${tecla.join(', ')} presionadas`)
    } else {
      console.log(`Tecla ${tecla} presionada`)
    }  
  }
}
*/

// Joystick sin considerar Composite

/*
class Joystick implements IDevice{
  press(boton: string) {
    console.log(`Botón ${boton} presionado`)
  }
}
*/

// Joystick con Composite
/*
class Joystick implements IDevice{
  press(boton: string | string[]) {
    if(typeof boton === 'object') {
      console.log(`Botones ${boton.join(', ')} presionados`)
    } else {
      console.log(`Botón ${boton} presionado`)
    }
  }
}
*/