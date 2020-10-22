import React from 'react';

export default () => {

  const
  handleChange = () => {

  },
  handleSubmit = () => {

  };

  return (
    <section
    className="accent-bottom center-content panel">
      <h2>Email Me</h2>
      <form
      onSubmit={handleSubmit}
      style={{ marginTop: "2rem" }}>
        <div className="input-field">
          <input
            id="name"
            onChange={handleChange}
            type="text"
          />
          <label htmlFor="name">Your Name</label>
        </div>
        <div className="input-field">
          <input
            id="email"
            onChange={handleChange}
            type="email"
          />
          <label htmlFor="email">Your Email</label>
        </div>
        <div className="input-field">
          <input
            id="subject"
            onChange={handleChange}
            type="text"
          />
          <label htmlFor="subject">Subject</label>
        </div>
        <div className="input-field">
          <label htmlFor="text">Text</label>
          <textarea
          id="text"
          className="materialize-textarea" />
        </div>
        <div className="input-field">
          <button
          className="btn waves-effect waves-light"
          type="submit"
          name="action">
            Submit
            <i className="material-icons right">send</i>
          </button>
        </div>
      </form>
    </section>
  );
};