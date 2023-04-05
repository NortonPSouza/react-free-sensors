import "../styles/index.css";
import {memo, ReactNode} from 'react';

type AppProps = {
    children: ReactNode | JSX.Element
}
export const App = memo(({ children }: AppProps) =>
    <div id="app">
        {children}
    </div>
);