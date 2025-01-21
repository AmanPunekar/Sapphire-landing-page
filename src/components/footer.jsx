import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#064D51",
        color: "#fff",
        fontFamily: "Inter",
        paddingTop: "30px",
      }}
    >
      <div style={{ maxWidth: "1340px", margin: "0 auto", padding: "0 20px" }}>
        {/* Top Section */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "36px",
          }}
        >
          {/* Legal Name */}
          <div style={{ flex: "1 1 251px" }}>
            <h4
              style={{
                position: "relative",
                right: "20px",
                fontFamily: "inter",
                fontSize: "21px",
                color: "#ffffff",
                fontWeight: "500",
                display: "flex",
                alignItems: "center",
              }}
            >
              <img
                src="logo.png"
                alt=""
                style={{ filter: "invert()", margin: "0px" }}
              />
              Legal Name{" "}
            </h4>
            <p
              style={{
                fontFamily: "Poppins",
                fontSize: "16px",
                fontWeight: "400",
              }}
            >
              Plot No. 33, Kotwal Nagar, Khamla, Nagpur (MH) <br />
              Pincode: 440025 <br />
              info@sapphirebroking.com <br />
              www.sapphirebroking.com
            </p>
          </div>
          {/* Company */}
          <div style={{ flex: "1 1 200px" }}>
            <h4
              style={{
                color: "#ffffff",
                fontSize: "18px",
                fontWeight: "300",
                marginBottom: "20px",
                fontFamily: "lexend",
              }}
            >
              Company
            </h4>
            <ul
              style={{
                fontFamily: "poppins",
                fontWeight: "300",
                listStyle: "none",
                padding: 0,
                fontSize: "16px",
                lineHeight: "1.6",
              }}
            >
              <li>About Us</li>
              <li>Company Info</li>
              <li>Pricing</li>
              <li>Referral Programme</li>
              <li>Become a Partner</li>
              <li>Careers</li>
            </ul>
          </div>
          {/* Support */}
          <div style={{ flex: "1 1 200px" }}>
            <h4
              style={{
                color: "#ffffff",
                fontSize: "18px",
                fontWeight: "300",
                marginBottom: "20px",
                fontFamily: "lexend",
              }}
            >
              Support
            </h4>
            <ul
              style={{
                ontFamily: "poppins",
                fontWeight: "300",
                listStyle: "none",
                padding: 0,
                fontSize: "16px",
                lineHeight: "1.6",
              }}
            >
              <li>Contact Us</li>
              <li>Support Portal</li>
              <li>Blog</li>
              <li>Charges & Pricing</li>
              <li>Downloads</li>
              <li>Videos</li>
              <li>
                How to raise a <br />
                Complaint?
              </li>
            </ul>
          </div>
          {/* Account */}
          <div style={{ flex: "1 1 200px" }}>
            <h4
              style={{
                color: "#ffffff",
                fontSize: "18px",
                fontWeight: "300",
                marginBottom: "20px",
                fontFamily: "lexend",
              }}
            >
              Account
            </h4>
            <ul
              style={{
                ontFamily: "poppins",
                fontWeight: "300",
                listStyle: "none",
                padding: 0,
                fontSize: "16px",
                lineHeight: "1.6",
              }}
            >
              <li>Open an Account</li>
              <li>Bank Details</li>
              <li>Account Closure</li>
              <li>Collateral Haircut</li>
              <li>Risk Disclosure</li>
            </ul>
          </div>
          {/* Social Media */}
          <div
            style={{ flex: "1 1 300px", position: "relative", left: "26px" }}
          >
            <h4
              style={{
                color: "#ffffff",
                fontSize: "18px",
                fontWeight: "300",
                marginBottom: "10px",
                fontFamily: "lexend",
              }}
            >
              Follow us:
            </h4>
            <div>
              <i class="fab fa-whatsapp" style={{ margin: "0 5px 0 0" }}></i>
              <i className="fab fa-facebook" style={{ margin: "0 8px" }}></i>
              <i className="fab fa-linkedin" style={{ margin: "0 8px" }}></i>
              <i className="fab fa-telegram" style={{ margin: "0 8px" }}></i>
              <i className="fab fa-instagram" style={{ margin: "0 8px" }}></i>
              <i className="fab fa-youtube" style={{ margin: "0 8px" }}></i>
              <i className="fab fa-x-twitter" style={{ margin: "0 8px" }}></i>
            </div>
            <h4
              style={{
                color: "#ffffff",
                fontSize: "18px",
                fontWeight: "300",
                margin: "20px 0px 16px 0px",
                fontFamily: "lexend",
              }}
            >
              Download Our App
            </h4>
            <div style={{ marginTop: "10px" }}>
              <img
                src="apple.png"
                alt="App Store"
                style={{ width: "120px", marginRight: "10px" }}
              />
              <img
                src="google.png"
                alt="Play Store"
                style={{ width: "120px" }}
              />
            </div>
          </div>
        </div>

        {/* Middle Section */}
        <div
          style={{
            width: "1280px",
            fontSize: "16px",
            lineHeight: "1.6",
            marginTop: "30px",
            fontFamily: "Inter",
            fontWeight: "400",
          }}
        >
          <p>
            <span style={{ fontWeight: "bold" }}>
              [Legal Name](Trading as Sapphire Broking):
            </span>{" "}
            Registered Office: [Registered Address]. CIN: [CIN]. SEBI
            Registration No.: [SEBI Registration No.] – Member of NSE, BSE, MCX,
            and NCDEX. Depository Participant: CDSL Registration No.: [DP
            Registration No.]. Compliance Officer: [Name of Compliance Officer],
            Tel: [Phone Number], Email:{" "}
            <span style={{ fontWeight: "bold" }}>
              compliance@sapphirebroking.com.
            </span>
          </p>
          <br />
          <p>
            {" "}
            <span style={{ fontWeight: "bold" }}>Grievance Redressal:</span> For
            complaints related to broking services, email us at{" "}
            <span style={{ fontWeight: "bold" }}>
              {" "}
              support@sapphirebroking.com.
            </span>{" "}
            For depository-related issues, email dp@sapphirebroking.com. To
            escalate unresolved issues, contact our Grievance Redressal Officer:
            [Name], Mobile: [Mobile Number]. Alternatively, file complaints on
            the SEBI SCORES portal by registering with mandatory details like
            Name, PAN, Address, Mobile Number, and Email ID.
          </p>
          <br />
          <p>
            <span style={{ fontWeight: "bold" }}>Cybersecurity Issues: </span>
            Report cybersecurity concerns to
            <span style={{ fontWeight: "bold" }}>
              support@sapphirebroking.com
            </span>{" "}
            or call us at{" "}
            <span style={{ fontWeight: "bold" }}>
              [Cybersecurity Contact Number].
            </span>
          </p>{" "}
          <br />
          <p>
            {" "}
            <span style={{ fontWeight: "bold" }}>
              Regulatory Compliance:
            </span>{" "}
            Investments in the securities market are subject to market risks.
            Please read all related documents carefully before investing.
            Brokerage will not exceed the SEBI-prescribed limit. <br />
            Communication Policy: By sharing your contact details, you consent
            to receive communication from us via Call/SMS/Email for a period of
            12 months, even if registered under DND. We use your information for
            legitimate business purposes only and do not sell or rent your
            contact details to third parties.
          </p>{" "}
          <br />
          <p>
            <span style={{ fontWeight: "bold" }}>Attention Investors:</span>{" "}
            <br />
            <p>
              1. Always update your mobile number and email ID with your broker
              and depository participant to receive OTPs and alerts directly
              from the depository.
            </p>
            <p>
              2. Check your securities/mutual funds/bonds in the monthly
              Consolidated Account Statement issued by CDSL.
            </p>
            <p>
              3. Prevent unauthorized transactions in your trading and demat
              accounts by safeguarding your credentials and being vigilant
              against unsolicited tips or schemes.
            </p>
            <p>
              4. For IPO applications, use ASBA for payment, eliminating the
              need for cheques.
            </p>
          </p>
          <br />
          <p>
            <span style={{ fontWeight: "bold" }}>ODR Portal:</span> Resolve
            disputes efficiently using SEBI’s Online Dispute Resolution Portal:
            [https://smartodr.in/login].
          </p>
        </div>

        {/* Bottom Section */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "20px",
            paddingTop: "20px",
          }}
        >
          <div style={{ display: "flex", gap: "20px" }}>
            <span style={{ color: "#959090" }}>NSE</span>
            <span>|</span>
            <span style={{ color: "#959090" }}>BSE</span>
            <span>|</span>
            <span style={{ color: "#959090" }}>MCX</span>
            <span>|</span>
            <span style={{ color: "#959090" }}>NCDEX</span>
          </div>
        </div>
      </div>
      <center>
        <p
          style={{
            fontSize: "16px",
            fontFamily: "Inter",
            fontWeight: "400",
            padding: "12px 0px ",
            marginTop: "26px",
            backgroundColor: "#152F46",
          }}
        >
          Copyright © 2025 Sapphire, All rights reserved.
        </p>
      </center>
    </footer>
  );
};

export default Footer;
