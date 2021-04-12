import React from 'react'

function ProjectDetailsSm({name, detail, repo, website}) {
    return (
        <div className="col-12">
              <h6 className="project-title pt-1">{name}</h6>
              <p className="project-detail-mobile">{detail}</p>
              <div
                className="btn-block "
                style={{ width: "75%", margin: "0 auto 5px" }}
              >
                <a
                  href={repo}
                  target="_blank"
                  rel="noreferrer"
                  className="to-site-btn btn-block text-bg"
                >
                  Repository
                </a>
              </div>
              <div
                className="btn-block"
                style={{ width: "75%", margin: "0 auto 5px" }}
              >
                <a
                  href={website}
                  target="_blank"
                  rel="noreferrer"
                  className="to-site-btn btn-block text-bg"
                >
                  Website
                </a>
              </div>
              <hr className="mt-4" style={{ width: "100%" }} />
            </div>
    )
}

export default ProjectDetailsSm