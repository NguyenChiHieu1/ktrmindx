import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../component/Home";

const Routing = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
};
export default Routing;
