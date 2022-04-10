import React, { FC }                    from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "antd/dist/antd.css";

import Index                            from "./pages/Index";
import Js                               from "./pages/Compress/Js";
import Css                              from "./pages/Compress/Css";

const APP: FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Index />} />
                <Route path={"/compress/js"} element={<Js />} />
                <Route path={"/compress/css"} element={<Css />} />
            </Routes>
        </BrowserRouter>
    );
};

export default APP;
