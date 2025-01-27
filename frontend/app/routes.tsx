'use client'
import { BrowserRouter, Route, Routes } from "react-router";
import LandingPage from "./pages/lading_page/page";
import PatientsPage from "./pages/patients_page/page";

export default function RouteProvider(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage/>}/>
                <Route path="/admin" element={<PatientsPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}