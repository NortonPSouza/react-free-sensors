import {App} from 'src/routes/app';
import {FunctionComponent, ReactNode} from "react";
import {PRIVATE_ROUTES, ROUTES} from '~@Pages/paths';
import {HashRouter, Route, Routes} from "react-router-dom";

type SwitchRoutesProps = {
    children: ReactNode | ReactNode[]
}

type RenderRoutesProps = {
    token: string;
}

type RoutesProps = {
    path: string;
    Component: FunctionComponent
}
export function RouterProvider(): JSX.Element {
    const token = '#';

    const SwitchRoutes = ({ children }: SwitchRoutesProps) =>
        <HashRouter>
            <Routes>
                {children}
            </Routes>
        </HashRouter>

    const RenderRoutes = ({ token }: RenderRoutesProps): JSX.Element => {
        if(token) {
            return (
                <App>
                    <SwitchRoutes>
                        {PRIVATE_ROUTES.map(({ path, Component }: RoutesProps, i) =>
                            <Route key={i} index={path === '/'} element={<Component/>}/>
                        )}
                    </SwitchRoutes>
                </App>
            )
        }
        return (
            <SwitchRoutes>
                {ROUTES.map(({ path, Component }: RoutesProps, i)  =>
                    <Route key={i} index={path === '/'} element={<Component/>}/>
                )}
            </SwitchRoutes>
        )
    };

    return <RenderRoutes token={token}/>;
}
