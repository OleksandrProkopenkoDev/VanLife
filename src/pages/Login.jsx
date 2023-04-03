import { useState } from "react"

export default function Login(){
const [loginFormData, setLoginFormData] = useState(
    {
        email: "",
        password:"",
    }
)

function handleSubmit(e){
    e.preventDefault();
    console.log(loginFormData);
}

function handleChange(e){
    const {name, value } = e.target;
    setLoginFormData(prev => ({
        ...prev,
        [name]:value
    }))
}

    return(<div className="login-container">
        <h1>Sign in your account</h1>
        <form className="login-form" onSubmit={handleSubmit}>
            <input 
            type="email" 
            name="email" 
            onChange={handleChange} 
            placeholder="Email address"
            value={loginFormData.email}
            />
            <input 
            type="password"
            name="password"
            onChange={handleChange}
            placeholder="Password"
            value={loginFormData.password}
            />
            <button>Log in</button>
        </form>
    </div>)
}