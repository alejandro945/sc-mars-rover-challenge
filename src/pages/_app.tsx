import { ChakraProvider } from "@chakra-ui/react"
import { AppProps } from "next/app"
import GlobalLayout from "../components/layout"

const App: React.FunctionComponent<AppProps> = ({ Component, pageProps }) => {
    return (
        <ChakraProvider>
            <GlobalLayout>
                <Component {...pageProps} />
            </GlobalLayout>
        </ChakraProvider>
    )
}

export default App