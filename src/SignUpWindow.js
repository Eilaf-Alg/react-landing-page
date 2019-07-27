import React from 'react';

const SignUpWindow = () => {
    return(<div className="SignUpWindow">
        <div className="container">

            <label>Username</label>
            <input type="text" className="form-control" />

            <label>Password</label>
            <input type="text" className="form-control" />

            <label>Email</label>
            <input type="text" className="form-control" />

            <label>Gender</label>
            <input type="text" className="form-control" />
            
            <button className="btn btn-primary">Register</button>
        </div>
    </div>)
}

export default SignUpWindow;