import { IAdapter, TecladoAdapter, Teclado, Joystick, JoystickAdapter, IGameController } from './1_Adaptador copy.js';

export class FactoryController {
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