import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'shared/ui/PageLoader/ui/PageLoader';

export function AppRouter() {
    return (
        <Suspense fallback={<PageLoader/>}>
            <Routes>
                {Object.values(routeConfig).map(({ element, ...route }) => (
                    <Route
                        key={route.path}
                        {...route}
                        element={<div className="page-wrapper">{element}</div>}
                    />
                ))}
            </Routes>
        </Suspense>
    );
}
