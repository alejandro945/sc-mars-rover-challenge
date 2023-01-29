import React from 'react'
import { Box, Container } from '@chakra-ui/react'
import NavBar from './NavBar'

const GlobalLayout: React.FC<{ children: React.ReactElement }> = ({ children }) => {
    return (
        <Box>
            <NavBar />
            <Container flexGrow={1} maxW='8xl' height="100vh" pt={40}>
                {children}
            </Container>
        </Box>
    )
}

export default GlobalLayout