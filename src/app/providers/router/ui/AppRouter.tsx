import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routeConfig } from "shared/config/routeConfig/routeConfig";

export function AppRouter() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {Object.values(routeConfig).map(({element, ...route}) => (
          <Route key={route.path} {...route} element={<div className="page-wrapper">{element}</div>}/>
        ))}
      </Routes>
    </Suspense>
  );
}
