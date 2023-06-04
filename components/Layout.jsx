import React from "react"
import { Outlet } from "react-router-dom"
import Header from './Header'
import Footer from "./Footer"

export default function Layout() {
    /**
     * Challenge: get the Header working again
     */
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}