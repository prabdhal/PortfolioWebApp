import React from 'react';

const ContactForm = () => {
  return (
    <>
      <form className="mx-auto" style={{ maxWidth: "700px" }}>
      <h3>Message me</h3>
        <div className="form-group">
          <input
            type="text"
            placeholder="Name"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Subject"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <textarea
            type="text"
            placeholder="Message"
            rows={5}
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">Send</button>
      </form>
    </>
  );
}

export default ContactForm;