import { IGameController, Teclado, Joystick, TecladoAdapter, JoystickAdapter, IAdapter } from './1_Adaptador copy.js';

// Ahora ControllerFactory es un Singleton
export class FactoryControllerSingleton {
  private static instance: FactoryControllerSingleton

  private constructor() {}

  static getInstance(): FactoryControllerSingleton {
    if(!FactoryControllerSingleton.instance){
      FactoryControllerSingleton.instance = new FactoryControllerSingleton()
    }
    return FactoryControllerSingleton.instance
  }

  createGameController(tipo: string): IAdapter {
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
