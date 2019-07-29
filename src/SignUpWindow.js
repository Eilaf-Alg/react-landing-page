import React, { useContext, useState } from 'react';
import { AppContext } from './Home'; 

const SignUpWindow = () => {

    let name;
    let email;
    let password;
    let gender;

    const [localState, setLocalState] = useState({
        successMessage: false,
        errorMessage: false
    })
    const [state, setState] = useContext(AppContext);

    const registerUser = () => {

        let formData = {
            name: name.value,
            email: email.value,
            password: password.value,
            gender: gender.value
        }
        fetch(
            // URL
            'http://localhost:5000/auth/register', 
            // Data
            {
                method: 'POST',
                body: JSON.stringify(formData),
                headers: {"Content-Type": "application/json"}
            }
        )
        .then(res => {
            if(res.status == "400") {
                // Handle the error
                setLocalState({ ...localState, errorMessage: true})

            } else {
                // Parse json data 
                res.json();

                // Show success message
                setLocalState({ ...localState, successMessage: true})
            }
        }) 
        .catch(err => {
            console.log('err', err);
        })
    }
    const closeSignUp = () => {
        setState({ signUpForm: false })
    }
    return(<div className="SignUpWindow">
        <div className="container">

            <label>Name</label>
            <input ref={comp=> name = comp} type="text" className="form-control"/>

            <label>Password</label>
            <input ref={comp=> password = comp} type="text" className="form-control" />

            <label>Email</label>
            <input ref={comp=> email = comp} type="text" className="form-control" />

            <label>Gender</label>
            <input ref={comp=> gender = comp} type="text" className="form-control" />
            
            <button onClick={registerUser} className="btn btn-primary">Register</button>
            <button onClick={closeSignUp} className="btn btn-danger">Cancel</button>

            {
                localState.successMessage && 
                <div className="alert alert-success">
                    Congratulation! You've been successfully signed up.
                </div>
            }
        </div>
    </div>)
}

export default SignUpWindow;