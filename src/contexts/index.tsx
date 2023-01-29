import React from "react";
import { Query } from "../models/types/Query";
import useSWRInfinite from 'swr/infinite'
import { Photo } from "../models/types/Photo";
import { ConsumerUseCases } from "../interfaces/consumerUseCases";
import { LocalStorage } from "../storage/LocalStorage";
import { StorageUseCases } from "../interfaces/storageUseCases";
import { AxiosConsumer } from "../consumers/axiosConsumer";

export type QueryContextType = { getStorage: () => StorageUseCases<Query>, getConsumer: () => ConsumerUseCases<Photo>, getPhotos: (consumer: ConsumerUseCases<Photo>) => any,handleComplete: (bookmark: Query) => void, handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void, setModalOpen: React.Dispatch<React.SetStateAction<boolean>>, isModalOpen: boolean, setDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>, isDrawerOpen: boolean, query: Query }
export const QueryContext = React.createContext<QueryContextType | null>(null)
type Props = { children: React.ReactElement }
const QueryProvider: React.FC<Props> = ({ children }) => {
    let storageStrategy: StorageUseCases<Query>;
    let consumerStrategy: ConsumerUseCases<Photo>;
    const [query, setQuery] = React.useState<Query>({} as Query)
    const [isDrawerOpen, setDrawerOpen] = React.useState<boolean>(false)
    const [isModalOpen, setModalOpen] = React.useState<boolean>(false)

    const getPhotos = (consumer: ConsumerUseCases<Photo>) => {
        const { data, error, isLoading, size, setSize } = useSWRInfinite((pageIndex: number, previosData: Photo[]) => "", consumer.getData)
        return { data, error, isLoading, size, setSize }
    }

    const getStorage = () => {
        if (!storageStrategy) storageStrategy = new LocalStorage<Query>("photos")
        return storageStrategy;
    };

    const getConsumer = () => {
        if (!consumerStrategy) consumerStrategy = new AxiosConsumer()
        return consumerStrategy;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { value, name } = e.target
        setQuery({ ...query, [name]: value } as Query)
    }

    const handleComplete = (bookmark: Query) => {
        setQuery(bookmark)
    }

    return <QueryContext.Provider value={{ getStorage, getConsumer, getPhotos,handleComplete, handleChange, isModalOpen, setModalOpen, isDrawerOpen, setDrawerOpen, query }}>{children}</QueryContext.Provider>;
}

export default QueryProvider;