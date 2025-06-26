import React from "react";
import {Route, Routes} from "react-router-dom";
import {SearchPage} from "../features/search/presentation/page/SearchPage.tsx";
import {LoginPage} from "../features/auth/presentation/page/LoginPage.tsx";
import {SignupPage} from "../features/auth/presentation/page/SignupPage.tsx";

export const AppRouter: React.FC = ()=>{
    return (
        <Routes>
            <Route path={''} element={<SearchPage/>}/>
            <Route path={'login'} element={<LoginPage/>}/>
            <Route path={'signup'} element={<SignupPage/>}/>
        </Routes>
    )
}
