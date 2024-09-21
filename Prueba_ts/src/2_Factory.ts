import {IGameController, Teclado, Joystick, TecladoAdapter, JoystickAdapter} from './1_Adaptador.js';

export class FactoryController {
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