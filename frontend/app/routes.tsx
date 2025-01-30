'use client'
import { BrowserRouter, Route, Routes } from "react-router";

import LandingPage from "./pages/lading_page/page";
import PatientsPage from "./pages/patients_page/page";
import AdminHome from "./pages/admin_home/page";
import PatientInfo from "./pages/patient_infos_page/page";
import PatientInfosEdit from "./pages/patient_infos_edit/page";

export default function RouteProvider(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage/>}/>

                {/* Rotas para o usuário ADM: */}
                <Route path="admin">
                    <Route index element={<AdminHome/>}/>
                        <Route path="home" element={<AdminHome/>}/>
                        <Route path="central" element={<AdminHome/>}/>
                        <Route path="calendar" element={<AdminHome/>}/>
                        <Route path="patients">
                            <Route index element={<PatientsPage/>}/>

                                <Route path=":id">
                                    <Route index element={<PatientInfo/>}/>
                                <Route path="edit" element={<PatientInfosEdit/>}/>
                            </Route>
                        </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}