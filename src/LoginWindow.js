import React, { useContext, useState } from 'react';
import { AppContext } from './App'; 

const LoginWindow = () => {

    let email;
    let password;

    const [state, setState] = useContext(AppContext);

    const closeWindow = () => {
        setState({ signUpForm: false })
    }

    const [localState, setLocalState] = useState({
        successMessage: false,
        errorMessage: false
    })

    const loginUser = () => {

        let formData = {
            email: email.value,
            password: password.value
        }
        // Use fetch retrieve JWT
        fetch(
            'http://localhost:5000/auth/login', 
            {
                method: 'POST',
                body: JSON.stringify(formData),
                headers: {"Content-Type": "application/json"}
            }
        ).then(async res=>{
            if(res.status === "400") {
                setLocalState({ 
                    ...localState, 
                    successMessage: false, 
                    errorMessage: true 
                })
            } else {
                let userInfo = await res.json();
                console.log(userInfo)

                setLocalState({ 
                    ...localState, 
                    successMessage: true, 
                    errorMessage: false 
                })
            }
        })

        // Store the JTW in localStorage
    }

    return(<div className="LoginWindow">
    <div className="container">

        <label>Email</label>
        <input ref={comp=> email = comp} type="text" className="form-control" />

        <label>Password</label>
        <input ref={comp=> password = comp} type="password" className="form-control" />

        <button onClick={loginUser} className="btn btn-primary">Login</button>
        <button onClick={closeWindow} className="btn btn-danger">Cancel</button>

        {
            localState.successMessage && 
            <div className="alert alert-success">
                Congratulations! You've been successfully logged up.
            </div>
        }

        {
            localState.errorMessage && 
            <div className="alert alert-danger">
                Sorry! No user with email or password exists.
            </div>
        }
    </div>
</div>)
}

export default LoginWindow;