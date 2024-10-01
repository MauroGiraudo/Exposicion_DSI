import { TecladoAdapter, JoystickAdapter, Teclado, Joystick, IGameController, IAdapter } from "./1_Adaptador.js"

export class ControllerAdapterComposite implements IAdapter {
  private controllers: IAdapter[] = []

  addController(controller: IAdapter) {
    this.controllers.push(controller)
  }

  adapt(input: string): string {
    let action
    this.controllers.forEach((controller) => {
      let input1 = controller.adapt(input)
      if(input1 !== 'No action') {
        action = input1
      }
    })
    if(action) {
      return action
    } else {
      return 'No action'
    }
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

  createGameController(tipo: string): IAdapter {
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
