import React from 'react';
import {Link} from 'react-router-dom'

const Unauthorize = () => {
    return (
        <div className='p-5'>
            You Are Not Unauthorize
            <br />
            <Link to="/login">Login</Link>
        </div>
    )
}

export default Unauthorize;