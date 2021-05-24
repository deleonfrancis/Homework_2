import React from "react";

function ProjectDetailsHover({ repo, website }) {
  return (
    <ul style={{ listStyleType: "none", padding: "0", margin: "0" }}>
      <li>
        <a
          href={repo}
          target="_blank"
          rel="noreferrer"
          className="to-site-btn btn-block text-bg"
          style={{ width: "75%", margin: "0 auto 5px" }}
        >
          Repository
        </a>
      </li>
      {website !== "n/a" && (
        <li>
          <a
            href={website}
            target="_blank"
            rel="noreferrer"
            className="to-site-btn btn-block text-bg"
            style={{ width: "75%", margin: "0 auto 5px" }}
          >
            Website
          </a>
        </li>
      )}
    </ul>
  );
}

export default ProjectDetailsHover;
