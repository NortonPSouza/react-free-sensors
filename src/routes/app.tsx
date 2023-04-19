import "../styles/index.css";

import {Outlet} from "react-router-dom";
import {memo} from 'react';

import {SideMenu} from "~@Components/template/sideMenu";

export const App = memo(() =>
    <div id="app"
         style={{
             display: "flex",
             alignItems: "flex-start",
             justifyContent: "flex-start",
         }}
    >
        <SideMenu/>
        <Outlet/>
    </div>
);