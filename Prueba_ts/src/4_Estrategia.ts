import {IGameController} from './ejemplo_adapter.js'


// Para implementar el patrón Estrategia, incorporamos el método setController(controller), que cambia el controlador del juego.
export class GameSingleton{
    private controller: IGameController;
    private static instance: GameSingleton;
    private constructor(controller:IGameController){
        this.controller = controller;
    }
    static createGame(controller: IGameController): GameSingleton {
        if (!this.instance) {
            this.instance = new GameSingleton(controller);
        }
        return this.instance;
    }
    setController(controller: IGameController){
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