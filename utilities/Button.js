import React from 'react';

const Button = ({ children }) => {
    return (
        <div>
            <button className='btn-style'>{children}</button>

        </div>
    );
};

export default Button;