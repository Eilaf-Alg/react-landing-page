import React from 'react';

const Button = (prop) => {
    return (
        <button className="btn btn-primary">{prop.children}</button>
    )
}

export default Button;