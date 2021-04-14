import React from 'react';

const ContactForm = () => {
  return (
    <>
      <form style={{ maxWidth: "700px" }}>
        <h4>Leave A Message</h4>
        <div className="form-group">
          <input
            type="text"
            placeholder="Name"
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Subject"
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <textarea
            type="text"
            placeholder="Message"
            rows={5}
            className="form-control"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Send</button>
      </form>
    </>
  );
}

export default ContactForm;