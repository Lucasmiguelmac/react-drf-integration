import axios from "axios";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useHistory } from "react-router-dom";

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [token, setToken] = useCookies(['loginToken']);
    let history = useHistory();

    useEffect(()=>{
        if (token['loginToken']){
            history.push('/')
        };
    },[token])


    
    const headers = {
        'Content-Type': 'application/json',
    }
    const handleLogin = () => {
        const data = {
            email: email,
            password: password
        };
        axios.post(`http://localhost:8000/api/login/`, data, {"headers": headers})
        .then(response => {
            setToken('loginToken', response.data.key);
            console.log(response.data.key)
        })
        .catch(error => console.log(error))
    };

    return (
        <div style={{width: "100vw", height: "100vh",margin: 0, display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#F5F5F5"}}>
            <div className="card" style={{}}>
                <div className="card-body">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">
                            Email address
                            </label>
                            <input
                            type="email"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            />
                            <div id="emailHelp" className="form-text">
                            We'll never share your email with anyone else.
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">
                            Password
                            </label>
                            <input
                            type="password"
                            className="form-control"
                            id="exampleInputPassword1"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            />
                        </div>
                        <button
                        type="button"
                        className="btn btn-primary"
                        onClick={handleLogin}
                        >
                            Log In
                        </button>
                        <button
                        type="submit"
                        className="btn btn-link"
                        style={{marginLeft: "1rem"}}
                        >
                            Register
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login