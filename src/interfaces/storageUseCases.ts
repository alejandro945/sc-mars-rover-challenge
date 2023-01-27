export interface StorageUseCases<T> {
    get: () => T[]
    add: (item: T) => void
    delete: (id: string) => void
}