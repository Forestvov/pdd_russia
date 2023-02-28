import {Route, Routes} from "react-router-dom";

import CategoryList from "@/pages/category-list";

// const HomePage = lazy(() => import("./category-list"));

export const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<CategoryList/>}/>
            <Route path="/history" element={<div>history</div>}/>
        </Routes>
    );
}