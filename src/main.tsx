import "./styles/index.css";
import {theme} from "./styles/theme";
import React from 'react';
import ReactDOM from 'react-dom/client';
import {ChakraProvider, ColorModeScript} from "@chakra-ui/react";
import {App} from "~@Routes/app";
import {HashRouter, Route, Routes} from "react-router-dom";
import {Dashboard} from "~@Pages/screens/dashboard";
import {Actions} from "~@Pages/screens/actions";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <ChakraProvider theme={theme}>
            <ColorModeScript initialColorMode={"dark"}/>
            <HashRouter>
                <Routes>
                    <Route path="/" element={<App/>}>
                        <Route index element={<Dashboard/>}/>
                        <Route path="/actions" element={<Actions/>}/>
                    </Route>
                </Routes>
            </HashRouter>
        </ChakraProvider>
    </React.StrictMode>
);
