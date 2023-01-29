import { Alert, AlertIcon } from '@chakra-ui/react'
import React from 'react'
type Props = { message: string, type: "warning" | "info" | "success" | "error" | "loading" | undefined }
const SAlert: React.FC<Props> = ({ message, type }) => {
    return (
        <Alert status={type} variant='left-accent' borderRadius={10}>
            <AlertIcon />
            {message}
        </Alert>
    )
}

export default SAlert