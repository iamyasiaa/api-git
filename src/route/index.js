import React from 'react';
import { Routes, Route } from "react-router-dom";

import Main from "../pages/Main";
import Description from "../pages/Description";
import {ROUTES} from "../utils/const";

export default function MainRoute() {
    return (
        <Routes>
            <Route exact path={ROUTES.main} element={<Main />} />
            <Route exact path={ROUTES.description} element={<Description />} />
        </Routes>
    );
}