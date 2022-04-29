import { Link, useNavigate, useLocation } from "react-router-dom";
import './Auth.css';
import { useAuth } from '../../context'
import { useState } from "react";
import { AUTH_TOKEN } from '../../constants/'
import { axiosService } from "../../services/axiosService";


function Signin() {
    
     
    const { isAuth , setIsAuth , authErr } = useAuth();
    const [user, setUser] = useState({
        'email': "",
        'password': "",
    });
    const [ isPasswordVisible , setisPasswordVisible ] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const signinHandler = async( email , password ) => {
        const response = await axiosService('post' , '/api/auth/login', {
            email,
            password
        })
        localStorage.setItem(AUTH_TOKEN ,  response.data.encodedToken);
        setIsAuth({...isAuth , status:true ,  token:response.data.encodedToken});
        navigate(from, { replace: true });
    }
    
    return (
        <>

            <div className="auth-form-container">
                <form className="auth-form" onSubmit={(e) =>{ 
                    e.preventDefault() 
                    signinHandler( user.email, user.password )
                    }}>
                    <h2 className="m-0">Sign in</h2>
                    <div className="input-container w-100-per">
                        <label htmlFor="login-email">Email address*</label>
                        <input
                            id="login-email"
                            type="email"
                            placeholder="your@mail.com"
                            value={ user.email }
                            onChange={(e) => setUser({ ...user, email: e.target.value })}
                            required />
                    </div>
                    <div className="input-container w-100-per">
                        <label htmlFor="login-password">Password*</label>
                        <input
                            id="login-password"
                            type={ isPasswordVisible ? 'text': 'password'}
                            onChange={(e) => setUser({ ...user, password: e.target.value })}
                            required />
                         <span 
                        className="material-icons passwordToggle" 
                        onClick={() => setisPasswordVisible( !isPasswordVisible )} >
                            { isPasswordVisible ? 'visibility' : 'visibility_off'}
                        </span>
                    </div>
                    { authErr ? <small className="color-red-600 bg-red-200 p-alert w-100-per">&#9888; Some error occurred </small> :null }

                    <div className="d-flex w-100-per justify-between">
                        <label htmlFor="rememberMe">
                            <input
                                id="rememberMe"
                                type="checkbox"/>
                                Remember me
                        </label>
                    </div>

                    <button
                        type="submit"
                        className="auth-btn auth-primary-btn font-size-regular w-100-per"
                        >Sign in</button>
                    <button
                        className="auth-btn auth-secondary-btn font-size-regular w-100-per"
                        onClick={(e) => signinHandler('adarshbalika@gmail.com', 'adarshBalika123')} >
                        Login as a Guest</button>
                    <Link to='/signup' className="color-gray-500 d-flex gap-sm">
                        Create new account<span className="material-icons">arrow_forward</span>
                    </Link>
                </form>
            </div>
        </>
    );
}

export { Signin }