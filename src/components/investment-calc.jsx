import React from "react";

const Investment = () => {
  return (
    <div
      style={{
        height: "293px",
        width: "100%",
        backgroundColor: "#DAEAEB",
        fontFamily: "Poppins, sans-serif",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {/* Left Section */}
      <div style={{ width: "741px", textAlign: "left" }}>
        <h2
          style={{
            fontFamily: "Inter",
            fontSize: "27px",
            fontWeight: "bold",
            marginBottom: "30px",
          }}
        >
          Simplify your investments with our smart calculators!
        </h2>
        <div
          style={{
            display: "flex",
            height: "53px",
            marginBottom: "20px",
            width: "728px",
          }}
        >
          <button className="investBtn">
            SIP Calculator <span style={{ fontSize: "24px" }}>&gt;</span>
          </button>
          <button className="investBtn">
            Margin Calculator <span style={{ fontSize: "24px" }}>&gt;</span>
          </button>
          <button className="investBtn">
            Brokerage Calculator <span style={{ fontSize: "24px" }}>&gt;</span>
          </button>
        </div>
        <br />
        <a
          href="#"
          style={{
            fontSize: "15px",
            color: "#2F7FFF",
            fontWeight: 500,
            textDecoration: "none",
          }}
        >
          EXPLORE CALCULATORS <span style={{ fontSize: "20px" }}>&gt;</span>
        </a>
      </div>

      {/* Right Section */}
      <div>
        <img
          src="calc.png"
          alt="Investment Calculators Illustration"
          style={{ maxHeight: "293px", objectFit: "contain" }}
        />
      </div>
    </div>
  );
};

export default Investment;
