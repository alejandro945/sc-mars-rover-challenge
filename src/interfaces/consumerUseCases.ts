export interface ConsumerUseCases<T> {
    getData: (query: string) => Promise<T[]>
}