'use client'
import { BrowserRouter, Route, Routes } from "react-router";
import LandingPage from "./pages/lading_page/page";
import PatientsPage from "./pages/patients_page/page";
import AdminHome from "./pages/admin_home/page";
import PatientInfo from "./pages/patient_infos_page/page";

export default function RouteProvider(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage/>}/>
                <Route path="admin">
                    <Route index element={<AdminHome/>}/>
                    <Route path="patients">
                        <Route index element={<PatientsPage/>}/>
                        <Route path=":id" element={<PatientInfo/>}/>
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}