"use client"

import AdminMenu from "@/app/components/admin_menu";
import { Outlet } from "react-router";

export default function AdminBasePage(){
    return(
        <section className="w-screen h-screen md:flex bg-paraizo-background">
            <AdminMenu/>
            <Outlet/>
        </section>
    )
}