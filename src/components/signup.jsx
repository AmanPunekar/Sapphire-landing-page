import React from "react";

const SignUp = () => {
  return (
    <div className="signup-container">
      <div className="compactbox">
        <div className="signup-box">
          <div className="signup-text">
            <h1 className="heading">
              Redefining How You <span className="highlight">Invest</span>
            </h1>
            <p className="description">
              Real-time trading, insightful analytics, and unmatched
              support—your portfolio deserves it.
            </p>
            <div className="input-container">
              <div className="country-code">
                <img src="flag.png" alt="country flag" />
                <span>+91</span>
                <input
                  type="text"
                  placeholder="Enter your mobile number"
                  className="input-field"
                />
              </div>
              <button className="signup-button">SIGNUP NOW</button>
            </div>
            <p className="login-text">
              Already have an account? <a href="#login">Login Here</a>
            </p>
          </div>
        </div>
        <div className="signup-image">
          <img src="img1.png" alt="Illustration" />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
