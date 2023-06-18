import React from 'react'
import { useLoaderData, useActionData, useNavigation, redirect, Form } from 'react-router-dom'
import { loginUser } from "../api"

export function loader({ request }) {
    return new URL(request.url).searchParams.get("message")
}

export async function action({ request }) {
    const formData = await request.formData()
    const email = formData.get("email")
    const password = formData.get("password")
    const path = new URL(request.url).searchParams.get("?redirectTo") || "/host"
    try{
        await loginUser({ email, password })
        localStorage.setItem("isLoggedIn", true)
        return redirect(path)
    } catch(err) {
        return err
    }
}

export default function Login() {
    const message = useLoaderData()
    const error = useActionData()
    const navigation = useNavigation()

    /* Keeping this around for future reference

    function handleSubmit(e) {
        e.preventDefault()
        setStatus("submitting")
        setError(null)
        loginUser(loginFormData)
            .then(data => console.log(data))
            .catch(err => setError(err))
            .finally(() => setStatus("idle"))
    }
    
    function handleChange(e) {
        const { name, value } = e.target
        setLoginFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }
    */

    return (
        <div className="login-container">
            <h1>Sign in to your account</h1>
            {message && <h3 className='red'>{message}</h3>}
            {error && <h3 className='red'>{error.message}</h3>}
            <Form 
                className="login-form"
                method='post'>
                <input
                    name="email"
                    type="email"
                    placeholder="Email address"
                />
                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                />
                <button disabled={navigation.state === "submitting"}>
                    {navigation.state === "submitting"
                        ? "Logging in"
                        : "Log in"}
                </button>
            </Form>
        </div>
    )
}