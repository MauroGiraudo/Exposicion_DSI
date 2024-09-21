export interface IDevice {
    press(input: string): void
  }
  
  export class Teclado implements IDevice{
    press(tecla: string) {
      console.log(`Tecla ${tecla} presionada`)
    }
  }
  
  export class Joystick implements IDevice{
    press(boton: string) {
      console.log(`Botón ${boton} presionado`)
    }
  }
  
  export interface IGameController {
    kick(): void
    punch(): void
    defend(): void
    special(): void
  }
  
  export class TecladoAdapter implements IGameController {
    private teclado: Teclado
  
    constructor(teclado: Teclado) {
      this.teclado = teclado
    }
  
    kick() {
      this.teclado.press('U')
    }
  
    punch() {
      this.teclado.press('I')
    }
  
    defend() {
      this.teclado.press('J')
    }
  
    special() {
      this.teclado.press('K')
    }
  }
  
  export class JoystickAdapter implements IGameController {
    private joystick: Joystick
  
    constructor(joystick: Joystick) {
      this.joystick = joystick
    }
  
    kick() {
      this.joystick.press('A')
    }
  
    punch() {
      this.joystick.press('B')
    }
  
    defend() {
      this.joystick.press('X')
    }
  
    special() {
      this.joystick.press('Y')
    }
  }

export class Game {
  private controller: IGameController

  constructor(controller: IGameController){
    this.controller = controller
  }

  play() {
    this.controller.kick()
    this.controller.punch()
    this.controller.defend()
    this.controller.special()
  }
}