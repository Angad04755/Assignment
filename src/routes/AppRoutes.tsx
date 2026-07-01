import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
const Home = lazy(() => import("../components/home/Home"))
function AppRoutes() {
    return (
        <Suspense>
        <Routes>
            <Route element={<Home/>} path="/"/>
            <Route element={""} path="/users/:id"></Route> 
        </Routes>
        </Suspense>
    )
}
export default AppRoutes;