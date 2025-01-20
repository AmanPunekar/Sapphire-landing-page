import React from "react";
import InfoCard from "./pricing-prop";

const cardsDataOne = [
  {
    title: "Account Opening",
    icon: "bank.png",
    btn: "Opening",
    price: "99*",
    description: ".    ",
    link: "Get Started  >",
  },
  {
    title: "for all trades",
    icon: "handshake.png",
    btn: "Brokerage",
    price: "20*",
    description: "Enjoy flat brokerage on every order with no hidden costs.",
    link: "View Brokerage Plans  >",
  },
];

const cardsDataTwo = [
  {
    title: "Maintenance",
    icon: "financeman.png",
    btn: "Maintenance",
    price: "0*",
    description: "Say goodbye to annual fees and maintenance charges.",
    link: "Learn More  >",
  },
  {
    title: "Hidden Charges",
    icon: "funds.png",
    btn: "Security",
    price: "0",
    description:
      "Trade with confidence knowing there are no extra fees or hidden charges.",
    link: "Learn About Our Policies  >",
  },
];

const Pricing = () => {
  return (
    <>
      <div className="pricing">
        <div className="left-pricing">
          <div>
            <img src="money.png" alt="money img" />
          </div>
          <div className="price-txt">
            <h1 className="ptext">
              Transparent Pricing With
              <span className="highlight"> No Hidden Charges</span>
            </h1>
            <p>Place trades at just &#8377;20 per order</p>
            <button className="Vprice"> View Pricing</button>
          </div>
        </div>
        <div className="right-pricing">
          <div className="card-container">
            {cardsDataOne.map((card, index) => (
              <InfoCard
                key={index}
                title={card.title}
                icon={card.icon}
                styl={"18px"}
                btn={card.btn}
                price={card.price}
                description={card.description}
                link={card.link}
              />
            ))}
          </div>
          <div className="card-container cardContainerTwo">
            {cardsDataTwo.map((card, index) => (
              <InfoCard
                key={index}
                styl={"24px"}
                title={card.title}
                btn={card.btn}
                icon={card.icon}
                price={card.price}
                description={card.description}
                link={card.link}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;
