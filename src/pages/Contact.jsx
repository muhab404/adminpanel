import React, { useState } from "react";
import { FaRegAddressCard } from "react-icons/fa";
import { RiPhoneFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import Map from "../components/Map";

const Contact = () => {
  const [data, setdata] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const getData = (e) => {
    let myData = { ...data };
    myData[e.target.name] = e.target.value;
    setdata(myData);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };
  return (
    <div className="mt-5 container-lg">
      <div class="text-center">
        <h3 class="text-info">How Can We Help You?</h3>
      </div>
      <div className="row d-flex">
        <div className="bg-white col-12 col-md-6 align-items-center ">
          {/* <form onSubmit={handleSubmit} className="p-4 rounded shadow-md">
            <h1 className="my-4 fw-bolder text-center text-md-start">
              Contact Us
            </h1>
            <div>
              <label for="name" className="form-label">
                Your Name
              </label>
              <input
                onChange={getData}
                type="text"
                name="name"
                className="form-control"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="mt-3">
              <label for="email" className="form-label">
                Your Email
              </label>
              <input
                onChange={getData}
                type="text"
                name="email"
                className="form-control"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="mt-3">
              <label for="subject" className="form-label">
                Subject
              </label>
              <input
                onChange={getData}
                type="text"
                name="subject"
                className="form-control"
                placeholder="Subject"
                required
              />
            </div>
            <div className="mt-3 mb-3">
              <label for="message" className="form-label">
                Message
              </label>
              <textarea
                onChange={getData}
                name="message"
                cols="20"
                rows="6"
                className="form-control"
                placeholder="message"
              ></textarea>
            </div>
            <button className="btn btn-success">Submit Form</button>
          </form> */}
          <br />
          <br />
          <div>
            <h1>
              <strong>You Can Contact us Throught Whatsapp</strong>
            </h1>
            <h3>+20 01*****</h3>
            <h3>+20 01*****</h3>
            <h3>+20 01*****</h3>
            <h3>+20 01*****</h3>
          </div>
        </div>
        <div className="p-4 col-12 col-md-6 text-md-start text-center">
          <h1 className="my-4 fw-bolder ">Get Office Info</h1>
          <p className="lh-lg">Please Contact us if you have any concerns</p>
          <div className=" d-flex m-1 justify-content-start align-items-center border-top py-4 px-2">
            <FaRegAddressCard className="text-success" />
            <p className="my-0 mx-3">
              Address : 77 El Nasr Street Maadi, Egypt
            </p>
          </div>
          <div className="d-flex m-1 justify-content-start align-items-center border-top py-4 px-2">
            <RiPhoneFill className="text-success" />
            <p className="my-0 mx-3">Phone Number :+048 000000</p>
          </div>
          <div className="d-flex m-1 justify-content-start align-items-center border-top py-4 px-2">
            <MdEmail className="text-success" />
            <p className="my-0 mx-3">Email Address : info@example.com</p>
          </div>
        </div>
      </div>
      <div className="my-3">
        <Map />
      </div>
    </div>
  );
};
export default Contact;
