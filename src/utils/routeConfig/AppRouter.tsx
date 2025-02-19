import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { MoonLoader } from 'react-spinners';
import { routeConfig } from './routeConfig.tsx';

const AppRouter = () => (
    <Suspense
        fallback={
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100vh',
                    width: '100%',
                }}
            >
                <MoonLoader />
            </div>
        }
    >
        <Routes>
            {routeConfig.map(({ path, element, children }) => (
                <Route key={path} path={path} element={element}>
                    {children?.map(
                        ({ index, path: childPath, element: childElement }) =>
                            index ? (
                                <Route
                                    key="index"
                                    index
                                    element={childElement}
                                />
                            ) : (
                                <Route
                                    key={childPath}
                                    path={childPath}
                                    element={childElement}
                                />
                            )
                    )}
                </Route>
            ))}
        </Routes>
    </Suspense>
);

export default AppRouter;
