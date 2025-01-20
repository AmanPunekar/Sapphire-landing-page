import "../pricingprop.css";

const InfoCard = ({ title, icon, price, description, link, btn, styl }) => {
  return (
    <div className="info-card">
      <div style={{ position: "relative", top: "15%" }}>
        <div className="icon-container">
          <button className="Vprice">{btn}</button>
          <img src={icon} alt={`${title} icon`} className="icon" />
        </div>
        <div
          style={{
            width: "300px",
            height: "64px",
            fontFamily: "poppins",
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-end",
          }}
        >
          <h2 className="price">
            &#8377;
            <span style={{ fontSize: "64px", fontWeight: 400 }}>{price}</span>
          </h2>
          <h3
            className="title"
            style={{ fontSize: styl, position: "relative", right: "10px" }}
          >
            {title}
          </h3>
        </div>
        <center>
          <p
            className="description"
            style={{
              fontFamily: "poppins",
              fontWeight: "500",
              fontSize: "9.89px",
              color: "#666666",
              width: "214px",
              textAlign: "start",
            }}
          >
            {description}
          </p>
        </center>

        <div className="link-container">
          <a
            href={link}
            className="link"
            style={{ position: "relative", top: "10px" }}
          >
            {link}
          </a>
        </div>
      </div>
    </div>
  );
};
export default InfoCard;
