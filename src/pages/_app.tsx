import { ChakraProvider } from "@chakra-ui/react"
import { AppProps } from "next/app"
import { SWRConfig } from "swr"
import GlobalLayout from "../components/layout"
import QueryProvider from "../contexts"

const App: React.FunctionComponent<AppProps> = ({ Component, pageProps }) => {
    return (
        <ChakraProvider>
            <QueryProvider>
                <SWRConfig>
                    <GlobalLayout>
                        <Component {...pageProps} />
                    </GlobalLayout>
                </SWRConfig>
            </QueryProvider>
        </ChakraProvider>
    )
}

export default App