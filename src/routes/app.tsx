import {memo, ReactNode} from 'react';

type AppProps = {
    children: ReactNode | JSX.Element
}
export const App = memo(({ children }: AppProps) =>
    <div className="app">
        <h1>app</h1>
        {children}
    </div>
);