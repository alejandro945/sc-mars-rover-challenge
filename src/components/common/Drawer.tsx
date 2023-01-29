import { QueryContext, QueryContextType } from '@/src/contexts'
import { cameras } from '@/src/models/constants/CameraType'
import { RoverType } from '@/src/models/enums/RoverType'
import { Query } from '@/src/models/types/Query'
import { DeleteIcon, StarIcon } from '@chakra-ui/icons'
import { Box, Button, Divider, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, FormControl, FormHelperText, FormLabel, IconButton, Input, Select, useToast } from '@chakra-ui/react'
import React from 'react'
import SAlert from './Alert'

const FilterDrawer = () => {
    const { getStorage, handleComplete, handleChange, setModalOpen, isDrawerOpen, setDrawerOpen, query } = React.useContext(QueryContext) as QueryContextType
    const toast = useToast()
    return (
        <Drawer isOpen={isDrawerOpen} placement="right" onClose={() => setDrawerOpen(false)}>
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader color="gray.500">Settings</DrawerHeader>
                <Divider />
                <DrawerBody>

                    <Box border="1px dashed rgba(145, 158, 171, 0.5)" borderRadius={5} my={4} p={4} display="flex" alignItems="center">
                        <FormControl>
                            <FormLabel>Bookmarks</FormLabel>
                            <Select value={query?.id} onChange={({ target }) => handleComplete(getStorage().get().find(val => val.id === Number(target.value)) as Query)} variant='filled' placeholder='Select bookmark'>
                                {getStorage().get().map((key: Query, index: number) => (<option key={index} value={key.id}>{key.name}</option>))}
                            </Select>
                        </FormControl>
                        <IconButton onClick={() => { if (query?.name != undefined && query.name !== "") { getStorage().delete(query.id); toast({ title: "Bookmark successfully deleted", status: "info", isClosable: true }); setDrawerOpen(false) } }} ml={2} alignSelf="flex-end" aria-label='delete' colorScheme="red" icon={<DeleteIcon />} />
                    </Box>

                    <form onSubmit={(e) => { e.preventDefault(); setModalOpen(true) }}>
                        <Box border="1px dashed rgba(145, 158, 171, 0.5)" borderRadius={5} p={4} sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                            <SAlert message='Search Section' type='warning' />
                            <FormControl isRequired>
                                <FormLabel>Rover</FormLabel>
                                <Select name='rover' value={query?.rover} onChange={handleChange} placeholder='Select rover'>
                                    {Object.values(RoverType).map((key, index) => (<option key={index}>{key}</option>))}
                                </Select>
                            </FormControl>

                            <FormControl>
                                <FormLabel>Camera</FormLabel>
                                <Select name='camera' value={query?.camera} onChange={handleChange} placeholder='Select camera'>
                                    {cameras.get(query?.rover)?.map((key, index) => (<option key={index}>{key}</option>))}
                                </Select>
                                <FormHelperText>Cameras already attached to a rover</FormHelperText>
                            </FormControl>

                            <FormControl>
                                <FormLabel>Date Filter</FormLabel>
                                <Select name='dateFilter' value={query?.dateFilter} onChange={handleChange} variant='outline' placeholder='Date type'>
                                    <option value={"earth_date"}>Earth date</option>
                                    <option value={"sol"}>Sol</option>
                                </Select>
                                <FormHelperText>Select your date filter</FormHelperText>
                            </FormControl>

                            {(query?.dateFilter == "earth_date" || !query?.dateFilter) && <FormControl>
                                <FormLabel>Earth date</FormLabel>
                                <Input type="date" name="dateValue" value={query?.dateValue ?? ""} onChange={handleChange} />
                                <FormHelperText>Corresponding date on earth for the given sol</FormHelperText>
                            </FormControl>}

                            {(query?.dateFilter == "sol") && <FormControl>
                                <FormLabel>Sol date</FormLabel>
                                <Input type="number" name="dateValue" placeholder='0' value={query?.dateValue ?? 0} onChange={handleChange} />
                                <FormHelperText> Ranges from 0 to max found in endpoint </FormHelperText>
                            </FormControl>}

                            <Button variant='outline' type="submit" colorScheme="orange" leftIcon={<StarIcon />}>Add</Button>
                        </Box>
                    </form>

                </DrawerBody>
                <DrawerFooter borderTopWidth='1px' />
            </DrawerContent>

        </Drawer>
    )
}

export default FilterDrawer