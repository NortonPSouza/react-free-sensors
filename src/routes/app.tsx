import "../styles/index.css";
import {memo, ReactNode} from 'react';

import {SideMenu} from "~@Components/template/sideMenu";

type AppProps = {
    children: ReactNode | JSX.Element
}
export const App = memo(({children}: AppProps) =>
    <div id="app"
         style={{
             display: "flex",
             alignItems: "flex-start",
             justifyContent: "flex-start",
         }}
    >
        <SideMenu/>
        {children}
    </div>
);