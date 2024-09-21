import {IDeviceAdapter, Teclado, Joystick, TecladoAdapter, JoystickAdapter} from './1_Adaptador.js';
export abstract class ControllerFactory {
    abstract createController(): IDeviceAdapter;

}

export class TecladoControllerFactory extends ControllerFactory {
    createController(): IDeviceAdapter {
        return new TecladoAdapter(new Teclado());
    }
}

export class JoystickControllerFactory extends ControllerFactory {
    createController(): IDeviceAdapter {
        return new JoystickAdapter(new Joystick());
    }
}