import React from "react";

const Financial = () => {
  return (
    <div style={{ height: "645px", backgroundColor: "#DAEAEB" }}>
      <div style={{ paddingTop: "32px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            maxWidth: "1440px",
          }}
        >
          <center>
            <div style={{ paddingLeft: "160px" }}>
              <h2
                style={{
                  fontFamily: "Inter",
                  fontSize: "48px",
                  fontWeight: "bold",
                }}
              >
                How-to Guides for
                <span style={{ color: "#064D51" }}> Financial Success</span>
              </h2>
              <p
                style={{
                  fontFamily: "Inter",
                  fontSize: "28px",
                  marginTop: "16px",
                  marginBottom: "64px",
                  fontWeight: "500",
                  color: "#5B5B5B",
                }}
              >
                Learn at your own pace with beginner to expert resources.
              </p>
            </div>
          </center>
          {/* Image Section */}
          <div>
            <img
              src="financeSec.png"
              alt="img"
              style={{
                width: "150px",
                height: "auto",
              }}
            />
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "76px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "385px",
            height: "230px",
            backgroundImage: "linear-gradient(to bottom, #064D51, #0EAEB7)",
            borderRadius: "23px",
          }}
        >
          <div style={{ color: "#fff" }}>
            <h3
              style={{
                fontFamily: "inter",
                fontSize: "28px",
                fontWeight: "500",
              }}
            >
              How to <img src="arrow.png" alt="" />
            </h3>
            <p style={{ fontFamily: "poppins", fontSize: "18px" }}>
              Create a Budget
            </p>
            <button
              style={{
                fontFamily: "poppins",
                fontSize: "15px",
                borderRadius: "33px",
                padding: "0 35px 0 30px",
                fontWeight: "400",
                backgroundColor: "#152F46",
                color: "#fff",
              }}
            >
              Beginner
            </button>
            <img
              src="play.png"
              alt=""
              style={{ position: "relative", bottom: "36px", left: "26px" }}
            />
          </div>
          <div
            style={{
              width: "97px",
              height: "95px",
              borderRadius: "17px",
              backgroundColor: "#FFC300",
              padding: "24.25px 20.21px",
            }}
          >
            <img src="check.png" alt="" />
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "385px",
            height: "230px",
            backgroundImage: "linear-gradient(to bottom, #064D51, #0EAEB7)",
            borderRadius: "23px",
          }}
        >
          <div style={{ color: "#fff", position: "relative", top: "14px" }}>
            <h3
              style={{
                fontFamily: "inter",
                fontSize: "28px",
                fontWeight: "500",
              }}
            >
              How to <img src="arrow.png" alt="" />
            </h3>
            <p style={{ fontFamily: "poppins", fontSize: "18px" }}>
              Understand <br />
              Credit Scores
            </p>
            <button
              style={{
                fontFamily: "poppins",
                fontSize: "15px",
                borderRadius: "33px",
                padding: "0 35px 0 30px",
                fontWeight: "400",
                backgroundColor: "#152F46",
                color: "#fff",
                position: "relative",
                bottom: "26px",
              }}
            >
              Beginner
            </button>
            <img
              src="play.png"
              alt=""
              style={{ position: "relative", bottom: "66px", left: "26px" }}
            />
          </div>
          <div
            style={{
              width: "97px",
              height: "95px",
              borderRadius: "17px",
              backgroundColor: "#FFC300",
              padding: "24.25px 20.21px",
            }}
          >
            <img src="check.png" alt="" />
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "385px",
            height: "230px",
            backgroundImage: "linear-gradient(to bottom, #064D51, #0EAEB7)",
            borderRadius: "23px",
          }}
        >
          <div style={{ color: "#fff", position: "relative", top: "14px" }}>
            <h3
              style={{
                fontFamily: "inter",
                fontSize: "28px",
                fontWeight: "500",
              }}
            >
              How to <img src="arrow.png" alt="" />
            </h3>
            <p style={{ fontFamily: "poppins", fontSize: "18px" }}>
              Start investing in <br /> Stocks
            </p>
            <button
              style={{
                fontFamily: "poppins",
                fontSize: "15px",
                borderRadius: "33px",
                padding: "0 35px 0 30px",
                fontWeight: "400",
                backgroundColor: "#152F46",
                color: "#fff",
                position: "relative",
                bottom: "26px",
              }}
            >
              Beginner
            </button>
            <img
              src="play.png"
              alt=""
              style={{ position: "relative", bottom: "66px", left: "22px" }}
            />
          </div>
          <div
            style={{
              width: "97px",
              height: "95px",
              borderRadius: "17px",
              backgroundColor: "#FFC300",
              padding: "24.25px 20.21px",
            }}
          >
            <img src="check.png" alt="" />
          </div>
        </div>
      </div>
      <div style={{ width: "632px", margin: "20px 68px" }}>
        <p
          style={{ fontSize: "16px", fontFamily: "poppins", fontWeight: "500" }}
        >
          Want to explore more insights?
        </p>
        <p
          style={{
            fontSize: "14px",
            fontFamily: "poppins",
            fontWeight: "400",
            color: "#858585",
          }}
        >
          Watch our complete video library for market trends, financial tips,
          and product tutorials.
        </p>
        <p
          style={{
            fontSize: "15px",
            fontFamily: "poppins",
            fontWeight: "500",
            color: "#2F7FFF",
          }}
        >
          Explore More Videos{" "}
          <span style={{ fontSize: "26px", position: "relative", top: "4px" }}>
            {" "}
            &gt;
          </span>
        </p>
      </div>
    </div>
  );
};

export default Financial;
