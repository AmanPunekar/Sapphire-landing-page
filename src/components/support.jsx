import React from "react";

const Support = () => {
  return (
    <>
      <div
        style={{
          height: "206px",
          backgroundImage:
            "linear-gradient(to bottom, #ffffff 22%, #B9DEDC , #83C5BE)",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "20px 64px",
          }}
        >
          <div>
            <img src="support.png" alt="img" />
          </div>
          <div>
            <h1 style={{ fontFamily: "Inter", fontSize: "36px" }}>
              Get Support Anytime, Anywhere
            </h1>
            <p
              style={{
                fontFamily: "Poppins",
                color: "#808080",
                fontSize: "15px",
                fontWeight: "500",
                margin: "20px 0px",
              }}
            >
              We’re just a call, email, or message away to help you with your
              trading journey.
            </p>
            <p style={{ fontFamily: "Lexend", fontSize: "18px" }}>
              Have any queries?{" "}
              <span style={{ color: "#2F7FFF" }}>Contact Support</span>
              <span style={{ marginLeft: "10px" }}>
                <img src="blueArrow.png" alt="" />
              </span>
            </p>
          </div>
          <button className="connectBtn">Let's Connect</button>
        </div>
      </div>
    </>
  );
};

export default Support;
