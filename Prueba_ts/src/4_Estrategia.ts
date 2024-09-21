import {IDeviceAdapter} from './1_Adaptador';
import {TecladoControllerFactory, JoystickControllerFactory} from './2_Factory';
export class Game{
    private controller:IDeviceAdapter;
    private static game: Game;
    private constructor(controller:IDeviceAdapter){
        this.controller = controller;
    }
    static createGame(controller): Game {
        if (!this.game) {
            this.game = new Game(controller);
        }
        return this.game;
    }
    setController(controller: IDeviceAdapter){
        this.controller = controller;
    }
    play(){
        this.controller.kick();
        this.controller.punch();
        this.controller.defend();
        this.controller.special();
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