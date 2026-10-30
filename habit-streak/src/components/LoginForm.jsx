import { useState } from "react"
import { BASE_API_URL, LOGIN_API_ROUTE } from "../api-routes"
import { useNavigate } from "react-router-dom"

export default function LoginForm(){
    const [email, setEmail]= useState("")
    const [password, setPassword]= useState("")
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate

    async function onSubmit(e){
        e.preventDefault()
        setError("")

        if(!email.includes("@)")){
            setError("Please enter a valid email")
            return
        }

        setLoading(true)
        try {
            const response = await fetch('${BASE_API_URL}${LOGIN_API_ROUTE}', {
                method: "POST",
                headers: {
                    "Content-Type": "apploication/json"
                },
                body: JSON.stringify({ email, password })
            })

            if (response.ok){
                Navigate("/dashboard")
            }
        } catch (error) {
            setError("There was an error")
        } finally{
            setLoading(false)
        }

        if (password.length < 8){
            setError("Password must be at least 8 characters long")
            return
        }
    }

    return(
        <form className="auth-form">
            <h2>Login</h2>

            <label htmlFor="email">Email</label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />

            <label htmlFor="password">Password</label>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>

            <p className="form-error">{error}</p>

            <button className="btn btn-primary" onClick={onSubmit} disabled={loading}>{loading ? "Logging you in" : "Log in"}</button>
        </form>
    )
}