/**
 * @author Andrii Volynets
 * @project mindlens
 * @license APGL
 * @version 0.0.0
 * @file Lazy.ts
 * @module lib\common
 * @since 0.0.0
 * @date 2025-07-01
 */

/** 
* Lazy initialization utility class.
* It allows you to create a value that is initialized only when it is first accessed.
* This can be useful for performance optimization, especially for expensive computations or resource loading.
*
* @template T - The type of the value to be lazily initialized.
* @class Lazy
* @property {T} value - The lazily initialized value. It is computed only when accessed for the first time.    
*/
class Lazy<T> {
    private _value?: T;
    private _initialized = false;

    constructor(private readonly _init: () => T) { }

    get value(): T {
        if (!this._initialized) {
            this._value = this._init();
            this._initialized = true;
        }
        return this._value!;
    }

    reset(): void {
        this._value = undefined;
        this._initialized = false;
    }

    get isInitialized(): boolean {
        return this._initialized;
    }
}

export function makeLazy<T>(init: () => T): Lazy<T> {
    return new Lazy(init);
}

export default Lazy;
