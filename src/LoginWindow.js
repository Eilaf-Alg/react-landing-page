import React from 'react';

const LoginWindow = () => {

    let email;
    let password;

    return(<div className="LoginWindow">
    <div className="container">

        <label>Email</label>
        <input ref={comp=> email = comp} type="text" className="form-control" />

        <label>Password</label>
        <input ref={comp=> password = comp} type="password" className="form-control" />

        <button className="btn btn-primary">Login</button>
        <button className="btn btn-danger">Cancel</button>
    </div>
</div>)
}

export default LoginWindow;