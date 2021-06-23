import React from 'react'

function SocialMedia() {
    return (
        <div className="row d-flex justify-content-center"
        >
            <div className="col-sm-6 col-md-4 text-center mb-2">
                <a href="https://github.com/deleonfrancis" target="_blank" rel="noreferrer" className="link-detail">
                    <i className="fab fa-github fa-2x text-dark px-3"></i> <br/> Github
                </a>              
            </div>
            <div className="col-sm-6 col-md-4 text-center">
                <a href="https://www.linkedin.com/in/deleon-francis-9b09291b9/" target="_blank" rel="noreferrer" className="link-detail">
                    <i className="fab fa-linkedin fa-2x px-3 text-primary"></i> <br/> LinkedIn
                </a>              
            </div>
      </div>
    )
}

export default SocialMedia