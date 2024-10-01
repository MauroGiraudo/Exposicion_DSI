export interface IDevice {
  press(input: string): string
}
  
export class Teclado implements IDevice{
  press(tecla: string) {
    console.log(`Tecla ${tecla} presionada`)
    return tecla
  }
}
  
export class Joystick implements IDevice{
  press(boton: string) {
    console.log(`Botón ${boton} presionado`)
    return boton
  }
}

export interface IAdapter {
  adapt(input: string): string
}
  
export class TecladoAdapter implements IAdapter {

  private teclado: Teclado
  
  constructor(teclado: Teclado) {
    this.teclado = teclado
  }
  
  adapt(tecla: string): string {
    let result = this.teclado.press(tecla)
    switch (result) {
      case 'U': 
        return 'kick'
      case 'I':
        return 'punch'
      case 'J':
        return 'defend'
      case 'K':
        return 'special'
      default:
        return 'No action'
    }
  }
}
  
export class JoystickAdapter implements IAdapter {
  private joystick: Joystick
  
  constructor(joystick: Joystick) {
    this.joystick = joystick
  }
  
  adapt(boton: string): string {
    let result = this.joystick.press(boton)
    switch (result) {
      case 'A': 
        return 'kick'
      case 'B':
        return 'punch'
      case 'X':
        return 'defend'
      case 'Y':
        return 'special'
      default:
        return 'No action'
    }
  }
}

export interface IGameController {
  kick(): void
  punch(): void
  defend(): void
  special(): void
}

export class Game implements IGameController {

  private controller: IAdapter

  constructor(controller: IAdapter) {
    this.controller = controller
  }

  kick(){
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
  }
}