
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

const Login = ({ user }) => {
    const [Email, setEmail] = useState("");
    const [password, setpassword] = useState("");
    const navigate = useNavigate();

    const loginHandler = () => {
        if (Email === "" || password === "") {
            alert("All fields are required.");
        }
        else if (user.Email === Email) {
            if (user.password === password) {
                navigate("/dashboard");
            } else {
                alert("Incorrect password.");
            }
        }
        else {
            alert("User does not exist.");
        }
    };

    return (
        <div>
            <h1>Login page</h1>

            <input
                type="email"
                placeholder="Enter Email"
                value={Email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <br /><br />

            <input
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setpassword(e.target.value)}
            />

            <br /><br />

            <button onClick={loginHandler}>LOGIN</button>
        </div>
    );
};

export default Login;
