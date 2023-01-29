import { SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import Card from '../components/common/Card'
import FilterDrawer from '../components/common/Drawer'
import Fab from '../components/common/Fab'
import SModal from '../components/common/Modal'
import { QueryContext, QueryContextType } from '../contexts'
import { Photo } from '../models/types/Photo'

const Main = () => {
  const { getConsumer, getPhotos, setDrawerOpen } = React.useContext(QueryContext) as QueryContextType
  const { data, isLoading, error, size, setSize } = getPhotos(getConsumer())
  return (
    <>
      <SModal />
      <FilterDrawer />
      <InfiniteScroll dataLength={data?.length ?? 0} next={() => setSize(size + 1)} hasMore={false} loader={<p>Loading...</p>}>
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing='30px' width="100%">
          <Card {...{} as Photo} />
          <Card {...{} as Photo} />
          <Card {...{} as Photo} />
          <Card {...{} as Photo} />
          <Card {...{} as Photo} />
          <Card {...{} as Photo} />
        </SimpleGrid>
      </InfiniteScroll>
      <Fab handleClick={() => setDrawerOpen(true)} />
    </>

  )
}

export default Main