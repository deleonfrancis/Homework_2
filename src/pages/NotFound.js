import React from "react";
import FadeIn from "../components/FadeIn";
import LinkButtons from "../components/LinkButtons";

const NotFound = () => {
  return (
    <FadeIn>
      <section className="flex-fill p-3 py-5 bg-light shadow-lg" style={{width:"90%", margin: " 20px auto"}}>
        <h1>Page Not Found</h1>
        <hr style={{ width: "100%", margin:"0 0 10px 0"}}/>
        <LinkButtons about="px-2 text-link" portfolio="px-2 text-link" resume="px-2 text-link" />
        This page does not exist.
      </section>
    </FadeIn>
  );
};

export default NotFound;