import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import * as React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Homepage } from "./Homepage";
import { extendedTheme } from "./style/theme";

const App = () => (
  <React.StrictMode>
    <ColorModeScript />
    <ChakraProvider theme={extendedTheme}>
      <BrowserRouter>
        <Homepage />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);

ReactDOM.render(<App />, document.getElementById("root"));
