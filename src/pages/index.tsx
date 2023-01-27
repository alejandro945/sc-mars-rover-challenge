import {SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import Card from '../components/common/Card'

const Main = () => {
  return (
    <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 4}} spacing='30px' width="100%">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </SimpleGrid>
  )
}

export default Main