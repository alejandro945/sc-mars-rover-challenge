import { Box, IconButton } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import React from 'react'
import { QueryContext, QueryContextType } from '@/src/contexts'

const Fab = () => {
    const { setDrawerOpen } = React.useContext(QueryContext) as QueryContextType
    return (
        <Box position="fixed" bottom="24px" boxShadow="rgb(99 115 129 / 36%) -12px 12px 32px -4px" borderRadius="50%" backdropFilter="blur(6px)" backgroundColor="gray.50" right="24px" zIndex={1000}>
            <IconButton size="lg" aria-label='Filter' borderRadius="50%" onClick={() => setDrawerOpen(true)} variant="ghost" color="orange.400" icon={<SearchIcon />} />
        </Box>
    )
}

export default Fab