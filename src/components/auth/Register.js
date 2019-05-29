import React from 'react'

const Register = () => {
  return (

    <section className="section">
      <div className="container">
        <h2 className="title">Register </h2>

        <div className="columns">
          <div className="column">
            <div className="field">
              <label className="label">Username</label>
              <div className="control">
                <input
                  className="input"
                  name="username"
                  placeholder="Mrs Jones"
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Name</label>
              <div className="control">
                <input
                  className="input"
                  name="firstName"
                  placeholder="Mrs Jones"
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Email</label>
              <div className="control">
                <input
                  className="input"
                  name="email"
                  placeholder="mrsjones@gmail.com"
                />
              </div>
            </div>

            <div className="field">
              <label className="label">Password</label>
              <div className="control">
                <input
                  className="input"
                  name="password"
                  type="password"
                  placeholder="eg: ••••••••"
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Password Confirmation</label>
              <div className="control">
                <input
                  className="input"
                  name="passwordConfirmation"
                  type="password"
                  placeholder="eg: ••••••••"
                />
              </div>
            </div>
            <button className="buttonNew">Submit</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Register
