import { Box, SimpleGrid, Skeleton, SkeletonCircle, SkeletonText, Stack } from '@chakra-ui/react'
import React from 'react'

const Loading = () => {
    return (
        <SimpleGrid key={Date.now()} columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing="30px" width="100%" py={[2, 4]}>
            {[...Array(20)].map((_, index) => (
                <Box key={index} padding='6' bg='white' maxW={'445px'} boxShadow="2xl" rounded={'md'}>
                    <Skeleton height="200px" />
                    <SkeletonText my='2' noOfLines={4} spacing='2' skeletonHeight='4' />
                    <Box display="flex">
                        <SkeletonCircle size='8' />
                        <SkeletonText noOfLines={2} spacing='1' skeletonHeight='4' />
                    </Box>
                </Box>
            ))}
        </SimpleGrid>
    )
}

export default Loading