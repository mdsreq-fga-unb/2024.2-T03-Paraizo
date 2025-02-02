'use client'
import { BrowserRouter, Route, Routes } from "react-router";
import LandingPage from "./features/lading_page/page";
import AdminBasePage from "./features/admin_pages/pages";
import AdminHome from "./features/admin_pages/pages/admin_home/page";
import PatientsPage from "./features/admin_pages/pages/patients_page/page";
import PatientInfo from "./features/admin_pages/pages/patient_infos_page/page";
import PatientInfosEdit from "./features/admin_pages/pages/patient_infos_edit/page";
import PatientDocsPage from "./features/admin_pages/pages/patient_docs_page/page";


export default function RouteProvider(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage/>}/>

                {/* Rotas para o usuário ADM: */}
                <Route path="admin" element={<AdminBasePage/>}>
                    <Route index element={<AdminHome/>}/>
                        <Route path="central" element={<AdminHome/>}/>
                        <Route path="calendar" element={<AdminHome/>}/>
                        <Route path="patients">
                            <Route index element={<PatientsPage/>}/>
                                <Route path=":id">
                                    <Route index element={<PatientInfo/>}/>
                                    <Route path="edit" element={<PatientInfosEdit/>}/>
                                    <Route path="docs/:id" element={<PatientDocsPage/>}/>
                            </Route>
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}