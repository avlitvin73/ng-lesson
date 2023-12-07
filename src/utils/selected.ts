import { Toggle } from "../models/toggle"

export const selected = () => {
    return function (this: any, target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const original = descriptor.value
        descriptor.value = function() {
            (this as Toggle).selected()
            original.call(this)
        }
    }
}