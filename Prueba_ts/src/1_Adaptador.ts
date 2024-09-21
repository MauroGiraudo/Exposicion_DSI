interface IDevice {
    press(input: string): void
  }
  
  class Teclado implements IDevice{
    press(tecla: string) {
      console.log(`Tecla ${tecla} presionada`)
    }
  }
  
  class Joystick implements IDevice{
    press(boton: string) {
      console.log(`Botón ${boton} presionado`)
    }
  }
  
  interface IDeviceAdapter {
    kick(): void
    punch(): void
    defend(): void
    special(): void
  }
  
  class TecladoAdapter implements IDeviceAdapter {
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
  
  class JoystickAdapter implements IDeviceAdapter {
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