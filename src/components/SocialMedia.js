import React from 'react'
import { Link } from 'react-router-dom'

function SocialMedia() {
    return (
        <div className="row d-flex justify-content-center" style={{margin:"10px auto"}}>
            <div className="col-sm-3 text-center mb-2">
                <Link to="https://github.com/deleonfrancis" target="_blank" rel="noreferrer" className="link-detail">
                    <i className="fab fa-github fa-2x text-dark px-3"></i> <br/> Github
                </Link>              
            </div>
            <div className="col-sm-3 text-center">
                <Link to="https://www.linkedin.com/in/deleon-francis-9b09291b9/" target="_blank" rel="noreferrer" className="link-detail">
                    <i className="fab fa-linkedin fa-2x px-3 text-primary"></i> <br/> LinkedIn
                </Link>              
            </div>
      </div>
    )
}

export default SocialMedia
