import { IDevice, TecladoAdapter, JoystickAdapter, Teclado, Joystick } from "./1_Adaptador.js"
import { IGameController } from "./1_Adaptador.js"

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
