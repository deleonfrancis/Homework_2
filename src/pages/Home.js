import React from "react";

function Home() {
  return (
    <section className="flex-fill p-3 py-5 mt-1">
      <div className="bg-white center-this col-lg-8 col-md-12 col-sm-12 shadow-lg">
        <h1 className="text-green pt-3 mb-0">About Me</h1>
        <hr />

        <div className="row">
          <div className="col-md-12">
            <div className="float-left pr-4">
              <img className="rounded-circle"
                src="/images/my_picture/xavier_picture.jpeg"
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
                In 2004 I graduated from Edgewater H.S. in Orlando, Florida.
                After completing some classes in Aeronautical Engineering, I
                pivoted my studies and obtain a certificate from the Federal
                Aviation Administration to be a certified Airframe & Powerplant
                Mechanic. Upon completion of this certificate, I worked for
                various companies until the global financial downturn of the
                aviation industry in 2020. It was at this juncture that decided
                to pursue something that gave me great interest, and that could
                fulfill my creating personality. This soul searching and self
                analyst led me to Web Development.
              </p>
              <br />
              <p>
                Currently, I'm enrolled in the University of Central Florida's
                Coding Bootcamp. This program has been a enormous challenge, but
                i'm loving the process of learning something worthwhile and
                fulfilling. It's only been a few weeks, but in this short time
                we've learnt some HTML, CSS, JavaScript, Bootstrap, APIs and
                more. I hope to one day partner with a company and gain some
                experience. Perhaps enough experience to one day be a Senior Web
                Developer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
