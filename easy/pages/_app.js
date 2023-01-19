import { ChakraProvider } from "@chakra-ui/react";
import themes from "@/themes";

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={themes}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
