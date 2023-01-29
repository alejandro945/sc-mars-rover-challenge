import { StorageUseCases } from "../interfaces/storageUseCases";

export class LocalStorage<T extends { id: number }> implements StorageUseCases<T>{
    constructor(private key: string) { }

    get() {
        return (typeof window !== 'undefined') ? JSON.parse(localStorage?.getItem(this.key) || '[]') as T[] : []
    }

    add(value: T) {
        let array: T[] = this.get()
        array.push(value)
        localStorage.setItem(this.key, JSON.stringify(array))
    }

    delete(id: number) {
        let array: T[] = this.get()
        let newArray = array.filter(value => value.id != id)
        localStorage.setItem(this.key, JSON.stringify(newArray))
    }

}