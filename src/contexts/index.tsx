import React from "react";
import { Query } from "../models/types/Query";
import { Photo } from "../models/types/Photo";
import { ConsumerUseCases } from "../interfaces/consumerUseCases";
import { LocalStorage } from "../storage/LocalStorage";
import { StorageUseCases } from "../interfaces/storageUseCases";
import { AxiosConsumer } from "../consumers/axiosConsumer";

export type QueryContextType = { getStorage: () => StorageUseCases<Query>, getConsumer: () => ConsumerUseCases<Photo>, getKey: (pageIndex: number) => string, handleComplete: (bookmark: Query | undefined) => void, handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>, cleareble?: boolean) => void, setModalOpen: React.Dispatch<React.SetStateAction<boolean>>, isModalOpen: boolean, setFilterData: React.Dispatch<React.SetStateAction<Query>>, setDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>, isDrawerOpen: boolean, filterData: Query, query: Query }
export const QueryContext = React.createContext<QueryContextType | null>(null)
type Props = { children: React.ReactElement }
const QueryProvider: React.FC<Props> = ({ children }) => {
    let storageStrategy: StorageUseCases<Query>;
    let consumerStrategy: ConsumerUseCases<Photo>;
    const [query, setQuery] = React.useState<Query>({} as Query)
    const [isDrawerOpen, setDrawerOpen] = React.useState<boolean>(false)
    const [isModalOpen, setModalOpen] = React.useState<boolean>(false)
    const [filterData, setFilterData] = React.useState<Query>({} as Query)

    /**
     * Auxiliar function that takes the actual query context state and return it`s
     * corresponding string representation of the object
     * @returns string != ""
     */
    const fromQueryToString = () => {
        let stringKey = "photos?"
        const { id, name, rover, ...newQuery } = filterData
        if (newQuery.camera) stringKey += 'camera=' + newQuery.camera
        if (newQuery.dateValue) stringKey += '&' + newQuery.dateFilter + '=' + newQuery.dateValue
        if (stringKey == 'photos?') stringKey = 'latest_photos?' // case where user just selected the rover
        return stringKey
    }

    /**
     * Auxiliar function to get the SWR key of each page, its return value will be accepted by `fetcher`.
     * If `null` is returned, the request of that page won't start (Reached the end).
     * @param pageIndex the index of the new page
     * @param previousPageData the previous page data
     * @returns the SWR key of a page
     */
    const getKey = (pageIndex: number) => {
        if (!filterData.rover) return `curiosity/latest_photos?&page=${pageIndex + 1}` // default case without search parameters
        return `${filterData.rover}/${fromQueryToString()}&page=${pageIndex + 1}`
    }

    const getStorage = () => {
        if (!storageStrategy) storageStrategy = new LocalStorage<Query>("photos")
        return storageStrategy;
    };

    const getConsumer = () => {
        if (!consumerStrategy) consumerStrategy = new AxiosConsumer()
        return consumerStrategy;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>, cleareble = false) => {
        const { value, name } = e.target
        cleareble ? setQuery({ ...query, [name]: value, dateValue: '', name: '', id: 0 } as Query) : setQuery({ ...query, [name]: value, name: '', id: 0 } as Query)
    }

    const handleComplete = (bookmark: Query | undefined) => {
        setQuery(bookmark ?? { rover: '', dateFilter: '' } as unknown as Query)
    }

    return <QueryContext.Provider value={{ getStorage, getConsumer, getKey, handleComplete, handleChange, isModalOpen, setModalOpen, isDrawerOpen, setDrawerOpen, setFilterData, filterData, query }}>{children}</QueryContext.Provider>;
}

export default QueryProvider;