import { SimpleGrid, useToast } from '@chakra-ui/react'
import React from 'react'
import useSWRInfinite from 'swr/infinite'
import InfiniteScroll from 'react-swr-infinite-scroll'
import Card from '../components/common/Card'
import FilterDrawer from '../components/common/Drawer'
import Empty from '../components/common/Empty'
import Fab from '../components/common/Fab'
import Loading from '../components/common/Loading'
import SModal from '../components/common/Modal'
import { QueryContext, QueryContextType } from '../contexts'
import { Photo } from '../models/types/Photo'

const Main = () => {
  const { getConsumer, getKey, filterData } = React.useContext(QueryContext) as QueryContextType
  const swr = useSWRInfinite(getKey, getConsumer().getData)
  const toast = useToast()
  const id = 'test-toast'
  if (!toast.isActive(id) && swr.error) return toast({ title: "NASA API connection error", status: "error", isClosable: true })
  if (swr.isLoading) return <Loading />
  return (
    <>
      <SModal />
      <FilterDrawer />
      <InfiniteScroll swr={swr} loadingIndicator={<Loading />} endingIndicator={<Empty />} isReachingEnd={(swr) => swr.data?.[0][filterData.camera ? 'photos' : 'latest_photos']?.length === 0 || swr.data?.[swr.data?.length - 1][filterData.camera ? 'photos' : 'latest_photos']?.length < 25} >
        <>
          {swr.data?.map((set: any, index: number) => (
            <SimpleGrid key={index} columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing="30px" width="100%" py={[2, 4]}>
              {set[filterData.camera ? 'photos' : 'latest_photos']?.map((photo: Photo, index: number) => (
                <React.Fragment key={photo.id}>
                  {(index < 24) && <Card {...photo} />}
                </React.Fragment>
              ))}
            </SimpleGrid>
          ))}
        </>
      </InfiniteScroll>
      <Fab />
    </>
  )
}

export default Main