import { Box, ChakraProvider, theme } from "@chakra-ui/react";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      My homepage!
    </Box>
  </ChakraProvider>
);
