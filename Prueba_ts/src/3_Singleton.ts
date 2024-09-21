import { IDeviceAdapter, Teclado, Joystick, TecladoAdapter, JoystickAdapter } from './1_Adaptador';

// Ahora ControllerFactory es un Singleton
class ControllerFactory {
    private static instance: ControllerFactory;

    private constructor() {}

    static getInstance(): ControllerFactory {
        if (!this.instance) {
            this.instance = new ControllerFactory();
        }
        return this.instance;
    }

    createController(): IDeviceAdapter { }
}
export class TecladoFactory extends ControllerFactory {
    createController(): IDeviceAdapter {
        return new TecladoAdapter(new Teclado());
    }
}
export class JoystickFactory extends ControllerFactory {
    createController(): IDeviceAdapter {
        return new JoystickAdapter(new Joystick());
    }
}