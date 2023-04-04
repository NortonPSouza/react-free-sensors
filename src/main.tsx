import "./styles/index.css";
import {theme} from "./styles/theme";
import React from 'react';
import ReactDOM from 'react-dom/client';
import {RouterProvider} from "~@Routes/index";
import {ChakraProvider, ColorModeScript} from "@chakra-ui/react";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <ChakraProvider theme={theme}>
            <ColorModeScript initialColorMode={"dark"}/>
            <RouterProvider/>
        </ChakraProvider>
    </React.StrictMode>
);
