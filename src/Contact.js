import React from "react";

const Contact = () => {
  return (
    <section className="contact_section" id="contact">
      <h1 className="heading1">Contact</h1>
      <form className="form">
        <div className="form_group">
          <input
            type="text"
            className="inHover"
            title="Please fill out this field."
            required
          />
          <span className="borBot"></span>
          <span className="borBotHov"></span>
          <label>Name</label>
        </div>
        <div className="form_group">
          <input
            type="email"
            className="inHover"
            title="Please fill out this field."
            required
          />
          <span className="borBot"></span>
          <span className="borBotHov"></span>
          <label>Email</label>
        </div>
        <div className="form_group">
          <textarea
            rows="7"
            className="inHover"
            title="Please fill out this field."
            required
          ></textarea>
          <span className="borBot"></span>
          <span className="borBotHov"></span>
          <label>Message</label>
        </div>
        <div>
          <button className="btn form_btn">
            <span>send message</span>
            <img src="img/footer/paper-plane.png" alt="plane" />
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
