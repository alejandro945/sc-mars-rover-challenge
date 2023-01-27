import { StorageUseCases } from "../interfaces/storageUseCases";

export class LocalStorage<T extends { id: string }> implements StorageUseCases<T>{
    constructor(private key: string) { }

    get() {
        return JSON.parse(localStorage.getItem(this.key) || '[]') as T[]
    }

    add(value: T) {
        localStorage.setItem(this.key, JSON.stringify(this.get().push(value)))
    }

    delete(id: string) {
        localStorage.setItem(this.key, JSON.stringify(this.get().filter(value => value.id !== id)))
    }

}