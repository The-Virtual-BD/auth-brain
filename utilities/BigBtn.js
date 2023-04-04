import React from 'react';

const BigBtn = ({children}) => {
    return (
        <div>
             <button className=' btn-bigbtn'>{children}</button>
        </div>
    );
};

export default BigBtn;