import { Badge, Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'

const NavBar = () => {
    return (
        <Box py={3} textAlign="center" bg="gray.50" color="gray.700" position="fixed" width="100%" fontSize={['sm', 'md', 'lg', 'xl']} zIndex={100}>
            <Heading bgGradient='linear(to-l, red.500, yellow.500)' bgClip='text' fontWeight='extrabold' mb={2} >
                Mars Rovers Challenge
            </Heading>
            <Text color={'gray.500'}>
                This application is intended to build an application that will consume the
                <Badge ml='1' colorScheme='orange'>
                    NASA API
                </Badge>
                , where image data has been collected by NASA's Curiosity, Opportunity and Spirit rovers on Mars.
            </Text>
        </Box>
    )
}

export default NavBar