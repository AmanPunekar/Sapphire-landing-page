import React from "react";
import InfoCard from "./gateway-prop";

const Gateway = () => {
  return (
    <>
      <div
        className="gatewayContainer"
        style={{
          width: "85%",
          height: "908px",
          margin: "0 auto",
          marginTop: "32px",
        }}
      >
        <div>
          <center>
            <h2
              style={{
                fontFamily: "Inter",
                fontSize: "36px",
                fontWeight: "600",
              }}
            >
              Your Gateway to Smart Investing
            </h2>
            <p
              style={{
                fontFamily: "lexend",
                fontSize: "24px",
                marginTop: "16px",
                marginBottom: "64px",
              }}
            >
              Highlighted features that simplify and enhance the investing
              experience.
            </p>
          </center>
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: "200px",
          }}
        >
          <InfoCard
            iconSrc="./gatwayImg/stocks.png"
            heading="Stocks"
            description="Trade seamlessly and build your portfolio with confidence."
          />
          <InfoCard
            iconSrc="./gatwayImg/mutual.png"
            heading="Mutual Fund"
            description="Smart investments for every financial goal."
          />
          <InfoCard
            iconSrc="./gatwayImg/fando.png"
            heading="F&O"
            description="Maximize profits with advanced trading options."
          />
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: "200px",
            marginTop: "70px",
          }}
        >
          <InfoCard
            iconSrc="./gatwayImg/commoodity.png"
            heading="Commodities"
            description="Diversify with gold, silver, oil, and more."
          />
          <InfoCard
            iconSrc="./gatwayImg/ipo.png"
            heading="IPO"
            description="Invest early in tomorrow’s market leaders."
          />
          <InfoCard
            iconSrc="./gatwayImg/usstock.png"
            heading="US Stocks"
            description="Own shares in the world’s top companies."
          />
        </div>
      </div>
    </>
  );
};

export default Gateway;
