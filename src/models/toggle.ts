import { logClass, logMethod } from "../utils/logger"
import { selected } from "../utils/selected"

@logClass
export class Toggle {
    private _count:number
    private _selected: boolean
    
    constructor() {
        this._count = 0
        this._selected= false
    }

    @logMethod()
    @selected()
    click() {
        if (this._selected) {
            this._count += 1
        } else {
            this._count -= 1
        }
    }

    selected() {
        this._selected = !this._selected
    }

    get status() {
        return `this._count: ${this._count} this._selected: ${this._selected}`
    }
}

