import { Photo } from '@/src/models/types/Photo';
import { CalendarIcon } from '@chakra-ui/icons';
import { Avatar, Badge, Box, Center, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'

const Card: React.FC<Photo> = ({ id, img_src, rover, camera, sol, earth_date }) => {
    return (
        <Center >
            <Box maxW={'445px'} w={'full'} bg={'white'} boxShadow={'2xl'} rounded={'md'} p={6} overflow={'hidden'}>
                <Box h={'200px'} bg={'gray.100'} mt={-6} mx={-6} mb={6} pos={'relative'}>
                    <Image src={img_src} alt={"Image"} objectFit={'cover'} height={200} width="100%" />
                </Box>
                <Stack>
                    <Stack direction="row" justifyContent="space-between">
                        <Text color={'orange.500'} textTransform={'uppercase'} fontWeight={800} fontSize={'sm'} letterSpacing={1.1}>
                            {rover.name}
                        </Text>
                        <Badge rounded="full" colorScheme={'orange'}>{` ${rover.status} `}</Badge>
                    </Stack>
                    <Heading color={'gray.700'} fontSize={'2xl'} fontFamily={'body'}>
                        {camera.name}
                    </Heading>
                    <Text color={'gray.500'}>
                        {camera.full_name}
                    </Text>
                </Stack>
                <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
                    <Avatar bg="orange.500" icon={<CalendarIcon />}/>
                    <Stack direction={'column'} spacing={0} fontSize={'sm'}>
                        <Text color={'gray.500'}> <b>Earth :</b> {`${earth_date}`}</Text>
                        <Text color={'gray.500'}> <b>Sol :</b> {`${sol}`}</Text>
                    </Stack>
                </Stack>
            </Box>
        </Center>
    )
}

export default Card