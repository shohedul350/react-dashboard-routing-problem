import React from 'react'
import {Link} from 'react-router-dom'

export default function login() {
    return (
        <div>
            <h1>Login page</h1>
            
            <Link to='/dashboard'>click for login</Link>
            
        </div>
    )
}
