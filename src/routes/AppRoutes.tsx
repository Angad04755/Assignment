import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
const Home = lazy(() => import("../components/home/Home"));
const User = lazy(() => import("../components/user/User"));
function AppRoutes() {
    return (
        <Suspense>
        <Routes>
            <Route element={<Home/>} path="/"/>
            <Route element={<User/>} path="/users/:id"></Route> 
        </Routes>
        </Suspense>
    )
}
export default AppRoutes;