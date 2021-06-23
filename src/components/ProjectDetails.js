import React, {useEffect, useRef} from "react";

function ProjectDetails({ repo, website }) {

  const anchorRef = useRef(null)
  const anchorRefTwo = useRef(null)

const handleKeyDown = (e) => {
    // Down arrow
    if (e.keyCode === 40) {
      e.preventDefault();
      anchorRef.current?.blur()
      anchorRefTwo.current?.focus()

    } 
    // Up arrow
    else if (e.keyCode === 38) {
      e.preventDefault();
      anchorRefTwo.current?.blur()
      anchorRef.current?.focus()
    }
  }

    useEffect(() => {
      anchorRef.current.focus()
    }, [])

  return (
    <ul style={{ listStyleType: "none", padding:"0", margin:"0" }}
   >
      <li>
        <a
          href={repo}
          target="_blank"
          rel="noreferrer"
          className="to-site-btn btn-block text-bg"
          style={{ width: "75%", margin: "0 auto 5px" }}
          ref={anchorRef}
          onKeyDown={handleKeyDown}    
        >
          Repository
        </a>
      </li>
      {website !== "n/a" && (<li>
        <a
          href={website}
          target="_blank"
          rel="noreferrer"
          className="to-site-btn btn-block text-bg"
          style={{ width: "75%", margin: "0 auto 5px" }}
          ref={anchorRefTwo}
          onKeyDown={handleKeyDown}
        >
          Website
        </a>
      </li>)}
    </ul>
  );
}

export default ProjectDetails;