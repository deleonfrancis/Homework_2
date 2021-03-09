import React from 'react'

function Contact() {
    return (
        <section className="p-3 py-5 mt-1">
          <div className="p-4 center-this bg-white col-lg-4 col-md-6 col-sm-12">
            <h1 className="font-weight-bold text-green pt-3 mb-0">
                Contact
            </h1>
            <hr />
            <form name="contact" method="POST" data-netlify="true">
                <div className="pl-3">
                    
                    {/* Name Input */}
                    <div className="form-group">
                      <label for="exampleFormControlInput1">Name</label>
                      <input type="text" name="name" className="form-control col-lg-9" id="exampleFormControlInput1" placeholder="Enter Name" />
                    </div>
                    
                    {/* Email Input */}
                    <div className="form-group">
                      <label for="exampleFormControlInput1">Email address</label>
                      <input type="email" name="email" className="form-control col-lg-9" id="exampleFormControlInput1" placeholder="Enter Email" />
                    </div>
                    
                    {/* Message Input*/}
                    <div className="form-group">
                      <label for="exampleFormControlTextarea1">Message</label>
                      <textarea className="form-control col-lg-9" id="exampleFormControlTextarea1" placeholder="Message" rows="3"></textarea>
                    </div>
                </div>

               {/* Submit Button */}
                <button type="submit" id="submit">Submit</button>
            </form>
          </div>
      </section>    
    )
}

export default Contact