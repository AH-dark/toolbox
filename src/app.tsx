import React, { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./pages/Index";
import Js from "./pages/Compress/Js";

const APP: FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Index />} />
                <Route path={"/compress/js"} element={<Js />} />
            </Routes>
        </BrowserRouter>
    );
};

export default APP;
