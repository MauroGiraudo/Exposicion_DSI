import { IDevice, TecladoAdapter, JoystickAdapter, Teclado, Joystick } from "./1_Adaptador.js"
import { IGameController } from "./ejemplo_adapter.js"

/* interface IDeviceComposite {
  press(input: string | string[]): void
}

export class TecladoComposite implements IDeviceComposite{
  press(tecla: string | string[]) {
    if(typeof tecla === 'object') {
      console.log(`Teclas ${tecla.join(', ')} presionadas`)
    } else {
      console.log(`Tecla ${tecla} presionada`)
    }  
  }
}

export class JoystickComposite implements IDeviceComposite{
  press(boton: string | string[]) {
    if(typeof boton === 'object') {
      console.log(`Botones ${boton.join(', ')} presionados`)
    } else {
      console.log(`Botón ${boton} presionado`)
    }
  }
}

  export class TecladoAdapterComposite implements IGameController {
    private teclado: TecladoComposite
  
    constructor(teclado: TecladoComposite) {
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
  
  export class JoystickAdapterComposite implements IGameController {
    private joystick: JoystickComposite
  
    constructor(joystick: JoystickComposite) {
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
  } */

export class ControllerAdapterComposite implements IGameController {
  private controllers: IGameController[] = []

  addController(controller: IGameController) {
    this.controllers.push(controller)
  }

  kick(): void {
    this.controllers.forEach((controller) => {
      controller.kick()
    })
  }

  punch(): void {
    this.controllers.forEach((controller) => {
      controller.punch()
    })
  }

  defend(): void {
    this.controllers.forEach((controller) => {
      controller.defend()
    })
  }

  special(): void {
    this.controllers.forEach((controller) => {
      controller.special()
    })
  }
}

export class FactoryControllerComposite {
  private static instance: FactoryControllerComposite

  private constructor() {}

  static getInstance(): FactoryControllerComposite {
    if(!FactoryControllerComposite.instance){
      FactoryControllerComposite.instance = new FactoryControllerComposite()
    }
    return FactoryControllerComposite.instance
  }

  createGameController(tipo: string): IGameController {
    switch(tipo) {
      case 'teclado':
        return new TecladoAdapter(new Teclado())
      case 'joystick':
        return new JoystickAdapter(new Joystick())
      case 'teclado y joystick':
        const adapters = new ControllerAdapterComposite()
        adapters.addController(new TecladoAdapter(new Teclado()))
        adapters.addController(new JoystickAdapter(new Joystick()))
        return adapters
      default:
        throw new Error('Tipo de controlador no válido')
    }
  }
}

/* export class FactoryControllerComposite {
  private static instance: FactoryControllerComposite

  private constructor() {}

  static getInstance(): FactoryControllerComposite {
    if(!FactoryControllerComposite.instance){
      FactoryControllerComposite.instance = new FactoryControllerComposite()
    }
    return FactoryControllerComposite.instance
  }

  createGameController(tipo: string): IGameController {
    switch(tipo) {
      case 'teclado':
        return new TecladoAdapterComposite(new TecladoComposite())
      case 'joystick':
        return new JoystickAdapterComposite(new JoystickComposite())
      default:
        throw new Error('Tipo de controlador no válido')
    }
  }
} */