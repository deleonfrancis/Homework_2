import React from 'react'

function Contact() {
    return (
        <main className="p-3 py-5 mt-1">
          <section className="p-4 center-this bg-white col-lg-4 col-md-6 col-sm-12">
            <h1 className="font-weight-bold text-green pt-3 mb-0">
                Contact
            </h1>
            <hr />
            <form>
                <div className="pl-3">
                    
                    {/* Name Input */}
                    <div className="form-group">
                      <label for="exampleFormControlInput1">Name</label>
                      <input type="email" className="form-control col-lg-9" id="exampleFormControlInput1" placeholder="Name" />
                    </div>
                    
                    {/* Email Input */}
                    <div className="form-group">
                      <label for="exampleFormControlInput1">Email address</label>
                      <input type="email" className="form-control col-lg-9" id="exampleFormControlInput1" placeholder="Email" />
                    </div>
                    
                    {/* Message Input*/}
                    <div className="form-group">
                      <label for="exampleFormControlTextarea1">Message</label>
                      <textarea className="form-control col-lg-9" id="exampleFormControlTextarea1" placeholder="Message" rows="3"></textarea>
                    </div>
                </div>

               {/* Submit Button */}
                <button id="submit">Submit</button>
            </form>
          </section>
      </main>    
    )
}

export default Contact
