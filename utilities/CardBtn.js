import React from 'react';

const CardBtn = ({ children }) => {
    return (
        <div>
            <button className='card-btn'>{children}</button>
        </div>
    );
};

export default CardBtn;