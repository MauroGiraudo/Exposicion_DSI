import {IGameController, Teclado, Joystick, TecladoAdapter, JoystickAdapter} from './1_Adaptador.js';

/* 
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
*/
abstract class FactoryController {
  abstract createGameController(): IGameController;
}

// Subclases concretas que implementan el método createGameController
export class FactoryTecladoController extends FactoryController {
  createGameController(): IGameController {
    return new TecladoAdapter(new Teclado());
  }
}

export class FactoryJoystickController extends FactoryController {
  createGameController(): IGameController {
    return new JoystickAdapter(new Joystick());
  }
}