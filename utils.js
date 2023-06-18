import { redirect } from "react-router-dom"

export async function requireAuth(request) {
    // const isLoggedIn = true
    const url = new URL(request.url).pathname
    console.log(url)
    const isLoggedIn = localStorage.getItem("isLoggedIn")
    
    if (!isLoggedIn) {
        throw redirect(`/login?message=You must log in first.&redirectTo=${url}`)
    }
}