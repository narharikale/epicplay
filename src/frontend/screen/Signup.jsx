import { Link , useNavigate , useLocation } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../context"
import './Auth.css'
import { AUTH_TOKEN } from "../constants";
import { authService } from "../services/authService";

function Signup() {
    
    const { isAuth , setIsAuth } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const [newUser , setNewUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword :""
    });
    const [isPasswordVisible , setisPasswordVisible ] = useState(false);
    const signUpHandler = async( { firstName , lastName , email , password ,confirmPassword } ) => {
        const response = await authService('post' , '/api/auth/signup', {
            email,
            password,
            firstName,
            lastName,
            confirmPassword
        })
        localStorage.setItem(AUTH_TOKEN ,  response.data.encodedToken);
        setIsAuth({...isAuth , status:true ,  token:response.data.encodedToken});
        navigate(from, { replace: true });
    }

    return ( 
        <div className="auth-form-container">
                <form onSubmit={ (e) => {
                    e.preventDefault()
                    signUpHandler(newUser)
                }}
                 className="auth-form">
                    <h2>Sign Up</h2>
                    <div className="input-container w-100-per">
                        <label htmlFor="signup-firstName">First name</label>
                        <input
                            id="signup-firstName"
                            placeholder="john doe"
                            type="text" 
                            value={newUser.firstName}
                            required
                            onChange={ (e) => setNewUser({...newUser , firstName:e.target.value}) }/>
                    </div>
                    <div className="input-container w-100-per">
                        <label htmlFor="signup-lastName">Last name</label>
                        <input
                            id="signup-lastName"
                            placeholder="john doe"
                            type="text" 
                            value={newUser.lastName}
                            required
                            onChange={ (e) => setNewUser({...newUser , lastName:e.target.value}) }
                            />
                    </div>
                    <div className="input-container w-100-per">
                        <label htmlFor="signup-email">Email address</label>
                        <input
                            id="signup-email"
                            type="email"
                            placeholder="your@mail.com"
                            value={newUser.email}
                            required
                            onChange={ (e) => setNewUser({...newUser , email:e.target.value}) } />
                    </div>
                    <div className="input-container w-100-per">
                        <label htmlFor="signup-password"> Password</label>
                        <input
                            id="signup-password"
                            type={isPasswordVisible ? 'text': 'password'}
                            value={newUser.password}
                            required
                            onChange={ (e) => setNewUser({...newUser , password:e.target.value}) 
                        } />
                        <span 
                        className="material-icons passwordToggle" 
                        onClick={() => setisPasswordVisible(!isPasswordVisible)} >
                            {isPasswordVisible ? 'visibility' : 'visibility_off'}
                        </span>
                    </div>
                    <div className="input-container w-100-per">
                        <label htmlFor="signup-confirm-password">Confirm Password</label>
                        <input
                            id="signup-confirm-password"
                            type="password"
                            value={newUser.confirmPassword}
                            required
                            onChange={ (e) => setNewUser({...newUser , confirmPassword:e.target.value}) } />
                    </div>
                    
                    <button type="submit"  className="auth-btn auth-primary-btn  font-size-regular w-100-per">
                        Create New Account
                    </button> 
                    <Link to='/signin' className="color-gray-500 d-flex gap-sm">
                        Alreday have account<span className="material-icons">login</span>{" "}
                    </Link>
                </form>
            </div>
     );
}

export { Signup } ;