import React from "react";

function Wrapper(props) {
  return <main className="wrapper flex-fill p-3 py-5 mt-1">{props.children}</main>;
}

export default Wrapper;
