import { Toggle } from "../models/toggle"

export const logClass = (constructor: Function) => {
    console.log('create extension')
}

export const logMethod  = () => {
    return function (this: any, target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const original = descriptor.value
        descriptor.value = function() {
            console.log(propertyKey, (this as Toggle).status)
            original.call(this)
        }
    }
}

