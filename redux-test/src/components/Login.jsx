import { useState } from "react";
import { login } from "../app/loginSlice"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";


const Login=()=>{
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const isAuthenticated = useSelector((state) => state.login.value);

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    console.log(username, password)

    console.log(isAuthenticated)

    const handleLogin=()=>{
        dispatch(login());
        navigate("/dashboard")
    }
    return(
        <div style={{display: "flex", justifyContent:"center", alignItems: "center", height: "100vh", width: "100vw"}}>
        <div style={{ display: "flex", flexDirection: "column", width: "100%", height: "100vh", justifyContent:"center", alignItems: "center"}}>
            Username<input value={username} onChange={(e)=>setUsername(e.target.value)}></input>
            Password<input value={password} onChange={(e)=>setPassword(e.target.value)}></input>
            <button onClick={handleLogin} disabled={!username || !password}>Login</button>
        </div>
        </div>
        
    )
}

export default Login