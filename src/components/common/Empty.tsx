import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'

const Empty = () => {
    return (
        <Box textAlign="center" py={8} mx={6} width="82vw" display="flex" justifyContent="center">
            <Box>
                <Heading display="inline-block" as="h4" size="lg" bgGradient="linear(to-r, orange.400, orange.600)" backgroundClip="text">
                No photos
                </Heading>
                <Text color={'gray.500'}>
                    NASA API resources have run out. Hopefully soon we can consume more.
                </Text>
            </Box>
        </Box>
    )
}

export default Empty