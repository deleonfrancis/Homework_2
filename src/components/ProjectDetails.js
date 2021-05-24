import React, {useEffect, useRef} from "react";

function ProjectDetails({ repo, website }) {

  const anchorRef = useRef(null)
  const anchorRefTwo = useRef(null)

const handleKeyDown = (e) => {
    if (e.keyCode === 40) {
      // Down arrow
      e.preventDefault();
      anchorRef.current?.blur()
      anchorRefTwo.current?.focus()
      console.log("down key pressed!");

    } else if (e.keyCode === 38) {
      // Up arrow
      e.preventDefault();
      anchorRefTwo.current?.blur()
      anchorRef.current?.focus()
      console.log("up key pressed!");
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