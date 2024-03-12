import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

import App from "./App.tsx";
import "./index.css";

const theme = extendTheme({
  fonts: {
    heading: `'Inter', Helvetica, sans-serif`,
    body: `'Inter', Helvetica, sans-serif`,
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
