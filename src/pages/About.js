import React, { Fragment } from "react";
import Navbar from "../components/Navbar";
import xavier_picture from "../images/my_picture/xavier_picture.jpeg";

function About() {
  return (<Fragment>
<Navbar />

    <section id="about-section" className="flex-fill p-3 py-5 bg-light">
      <h1 className="mb-0">About Me</h1>
      <hr />
      <div className="bg-white center-this col-lg-8 col-md-12 col-sm-12 shadow-lg">
        <div className="row">
          <div className="col-md-12">
            <div className="float-left pr-4">
              <img
                className="rounded-circle"
                src={xavier_picture}
                alt="Photograph of Xavier"
                height={150}
                width={150}
              />
            </div>
            <div className="text-justify">
              <p>
                Hello, I’m Xavier. I believe greatness comes from within, and
                every living person can experience fullness of life. I was born
                in Jamaica, and moved to the United States at twelve years old.
                In 2004, I graduated from Edgewater H.S. in Orlando, Florida and
                went on to study Aeronautical Engineering at Oakwood University
                and Valencia CC. After completing some courses, I pivoted my
                studies and obtain a licence from the Federal Aviation
                Administration to be a certified Aircraft Mechanic. Upon
                completion of this licence, I worked for various companies until
                the global financial downturn of the aviation industry in 2020.
                It was at this juncture that decided to pursue something that
                gave me great interest, and that could fulfill my creating
                personality. This soul searching and self analyst led me to Web
                Development.
              </p>
              <br />
              <p>
                My goal and desire to be a web developer led me to the
                University of Central Florida's Coding Bootcamp. This program
                was an enormous challenge, but I loved the process of learning
                something worthwhile and fulfilling. In this bootcamp, we
                studied and learned a host of technologies not limited to but
                including React, JavaScript, Express, Node, MongoDB, Mongoose,
                Bootstrap, CSS, and HTML. I hope to one day partner with a
                company that would afford me the opportunity to gain some
                experience. Perhaps enough experience to one day be a Senior
                Full Stack Developer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </Fragment>
  );
}

export default About;
