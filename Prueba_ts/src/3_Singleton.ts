import { IGameController, Teclado, Joystick, TecladoAdapter, JoystickAdapter } from './1_Adaptador.js';

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
