import React from "react";

const Contact = () => {
  const onHover = function () {
    alert("this");
  };
  return (
    <section className="contact_section">
      <h1 className="heading1">Contact</h1>
      <form className="form">
        <div className="form_group">
          <label>Name</label>
          <input
            type="text"
            className="inHover"
            title="Please fill out this field."
            required
            onClick={() => onHover()}
          />
          <span className="borBot"></span>
          <span className="borBotHov"></span>
        </div>
        <div className="form_group">
          <label>Email</label>
          <input
            type="email"
            className="inHover"
            title="Please fill out this field."
            required
          />
          <span className="borBot"></span>
          <span className="borBotHov"></span>
        </div>
        <div className="form_group">
          <label>Message</label>
          <textarea
            rows="7"
            className="inHover"
            title="Please fill out this field."
            required
          ></textarea>
          <span className="borBot"></span>
          <span className="borBotHov"></span>
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
