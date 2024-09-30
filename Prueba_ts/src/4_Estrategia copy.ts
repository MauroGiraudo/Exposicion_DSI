import {IAdapter, IGameController} from './1_Adaptador copy.js'


// Para implementar el patrón Estrategia, incorporamos el método setController(controller), que cambia el controlador del juego.
export class GameEstrategia implements IGameController {
  private controller: IAdapter | undefined

  private static instance: GameEstrategia

  private constructor(controller?: IAdapter){
    this.controller = controller;
  }

  static createGame(controller?: IAdapter): GameEstrategia {
    if (!this.instance) {
      if(controller) {
        this.instance = new GameEstrategia(controller)
      } else {
        this.instance = new GameEstrategia()
      }
    } 
    return this.instance
      
  }

  setController(controller: IAdapter) {
    this.controller = controller;
  }

  kick() {
    console.log('Patada')
  }

  punch() {
    console.log('Puñetazo')
  }

  defend() {
    console.log('Defensa')
  }

  special() {
    console.log('Ataque Especial')
  }

  play(input: string) {
    if(this.controller) {
      const command = this.controller.adapt(input)
      switch (command) {
      case 'kick':
        this.kick()
        break
      case 'punch':
        this.punch()
        break
      case 'defend':
        this.defend()
        break
      case 'special':
        this.special()
        break
      default:
        console.log(command)
        break
    }
    } else {
      throw new Error('No se ha definido un controlador')
    }
  }
}

//Ejemplo de uso
/*
import {Game} from './4_Estrategia';
import {TecladoFactory, TecladoFactory} from './3_Singleton';


// Crear instancias de los Factory (Singleton)
const tecladoFactory = TecladoFactory.getInstance()
const joystickFactory = TecladoFactory.getInstance()

// Crear instancias de los Controllers (Factory/Adapter)
const tecladoAdapter = tecladoFactory.createController();
const joystickAdapter = joystickFactory.createController();

// Crear instancia de Game (Singleton)
const game = Game.createGame(tecladoFactory); 
game.play(); // Juega con el Teclado

// Cambiar el Controller (Strategia)
game.setController(joystickFactory); 
game.play(); 

*/