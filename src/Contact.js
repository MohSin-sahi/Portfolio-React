import React from "react";

function Contact() {
  return (
    <div className="contactBox">
      <div className="contactCard">
        <h3 className="inTouch">Get in Touch</h3>
        <h1 className="c_Heading">Contact.</h1>
        <form method="POST">
          <label htmlFor="fName" className="c_Label">
            Your Name
          </label>
          <input
            type="text"
            id="fName"
            name="fName"
            className="nameField"
            placeholder="What's Your Name?"
          />
          <label htmlFor="mail" className="c_Label">
            Email
          </label>
          <input
            type="email"
            id="mail"
            name="mail"
            className="nameField"
            placeholder="What's Your Email?"
          />
          <label htmlFor="message" className="c_Label">
            Your Message
          </label>
          <textarea
            rows="7"
            id="message"
            name="mail"
            className="nameField"
            placeholder="What's Your Email?"
          ></textarea>
          <button className="send_btn">
            Send
            <img src="send_button.png" alt="Envelope" className="send_img" />
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
