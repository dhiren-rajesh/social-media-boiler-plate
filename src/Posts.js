import React from 'react'
import './Posts.css'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

export default function Posts() {
    return (
        <div className="post">
            <div className="header">
                <AccountCircleIcon style={{fontSize: "2.5rem"}} className="avatar"/>
                <h2>Name</h2>
            </div>
            <div className="main-post">
                This is the Main Post.
            </div>
        </div>
    )
}
