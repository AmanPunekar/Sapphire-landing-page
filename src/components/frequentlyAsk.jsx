import React from "react";
import FAQComp from "./faqComp";

const FrequentlyAsk = () => {
  return (
    <>
      <div
        style={{
          width: "1440px",
          height: "630px",
          backgroundColor: "#fff",
          fontFamily: "lexend",
        }}
      >
        <div>
          <h1
            style={{
              fontFamily: "Inter",
              fontSize: "36px",
              fontWeight: "600",
              color: "#064D51",
              textAlign: "center",
            }}
          >
            Frequently Asked Questions (FAQs)
          </h1>
          <p
            style={{ textAlign: "center", color: "#B0B0B0", marginTop: "10px" }}
          >
            Your Guide to Understanding Our Stock Brokerage Services
          </p>
        </div>

        <FAQComp />
        <center>
          <button className="Vprice" style={{ marginTop: "32px" }}>
            {" "}
            View More
          </button>
        </center>
      </div>
    </>
  );
};

export default FrequentlyAsk;
