import React from "react";

const ModuleAndBlog = () => {
  return (
    <>
      <div className="mbcontainer">
        <div className="mcontainer">
          <h1 className="moduleHeading">Latest Modules</h1>
          <div style={{ display: "flex", gap: "10px" }}>
            <div>
              <div
                style={{
                  width: "297px",
                  height: "392px",
                  fontFamily: "poppins",
                  borderRadius: "5px",
                  border: "1px solid #000",
                  padding: "14px",
                  marginBottom: "10px",
                }}
              >
                <div
                  style={{
                    width: "272px",
                    height: "188px",
                    marginBottom: "10px",
                  }}
                >
                  <img
                    src="./moduleAndBlog/ModuleImg1.png"
                    alt="img"
                    style={{
                      width: "272px",
                      height: "188px",
                      boxShadow: "0px 4px 4px rgba(128, 128, 128, .25 )",
                    }}
                  />
                </div>
                <p
                  style={{
                    fontSize: "15px",
                    marginBottom: "10px",
                    fontWeight: "500",
                  }}
                >
                  Module 1: Stock Market Basics
                </p>
                <p
                  style={{
                    fontSize: "14px",
                    color: "#606060",
                    marginBottom: "10px",
                  }}
                >
                  <span style={{ color: "#0D0808" }}>Description:</span> Learn
                  the fundamentals of the stock market and how to start
                  investing.
                </p>
                <p
                  style={{
                    fontSize: "10px",
                    color: "#0D0808",
                    fontWeight: "600",
                    marginBottom: "20px",
                  }}
                >
                  Progress: Beginner | 3/10 Lessons Completed
                </p>
                <p
                  style={{
                    color: "#2F7FFF",
                    fontSize: "10.05px",
                    fontWeight: "500",
                    textAlign: "end",
                  }}
                >
                  Continue Learning{" "}
                  <span
                    style={{
                      fontSize: "20px",
                      position: "relative",
                      top: "4px",
                    }}
                  >
                    &gt;
                  </span>
                </p>
              </div>
            </div>
            <div>
              <div
                style={{
                  width: "297px",
                  height: "392px",
                  fontFamily: "poppins",
                  borderRadius: "5px",
                  border: "1px solid #000",
                  padding: "14px",
                  marginBottom: "10px",
                }}
              >
                <div
                  style={{
                    width: "272px",
                    height: "188px",
                    marginBottom: "10px",
                  }}
                >
                  <img
                    src="./moduleAndBlog/ModuleImg2.png"
                    alt="img"
                    style={{
                      width: "272px",
                      height: "188px",
                      boxShadow: "0px 4px 4px rgba(128, 128, 128, .25 )",
                    }}
                  />
                </div>
                <p
                  style={{
                    fontSize: "15px",
                    marginBottom: "10px",
                    fontWeight: "500",
                  }}
                >
                  Module 1: Understanding Cryptocurrency
                </p>
                <p
                  style={{
                    fontSize: "14px",
                    color: "#606060",
                    marginBottom: "10px",
                  }}
                >
                  <span style={{ color: "#0D0808" }}>Description:</span> Get
                  familiar with crypto concepts and how to invest safely.
                </p>
                <p
                  style={{
                    fontSize: "10px",
                    color: "#0D0808",
                    fontWeight: "600",
                    marginBottom: "20px",
                  }}
                >
                  Progress: Beginner | 5/12 Lessons Completed
                </p>
                <p
                  style={{
                    color: "#2F7FFF",
                    fontSize: "10.05px",
                    fontWeight: "500",
                    textAlign: "end",
                  }}
                >
                  Continue Learning
                  <span
                    style={{
                      fontSize: "20px",
                      position: "relative",
                      top: "4px",
                    }}
                  >
                    &gt;
                  </span>
                </p>
              </div>
            </div>
          </div>
          <p
            style={{
              color: "#2F7FFF",
              fontSize: "10.05px",
              fontWeight: "500",
              textAlign: "end",
              fontFamily: "poppins",
              position: "relative",
              bottom: "10px",
            }}
          >
            See more
            <span
              style={{
                fontSize: "20px",
                position: "relative",
                top: "3px",
                left: "2px",
              }}
            >
              &gt;
            </span>
          </p>
        </div>
        <div className="bcontainer">
          <h1 className="moduleHeading">Latest Blogs</h1>
          <div
            style={{ display: "flex", gap: "28px", flexDirection: "column" }}
          >
            <div
              style={{
                display: "flex",
                gap: "10px",
                padding: "5px",
                border: "1px solid #000",
                borderRadius: "4px",
              }}
            >
              <div
                style={{
                  width: "419px",
                  height: "169px",
                  padding: "10px 16px 10px 10px",
                }}
              >
                <p
                  style={{
                    fontSize: "16px",
                    fontWeight: "bold",
                    marginBottom: "14px",
                  }}
                >
                  How to Create a Personal Budget That Works
                </p>
                <p
                  style={{
                    fontSize: "16px",
                    fontWeight: "500",
                    color: "#6A6A6A",
                    marginBottom: "14px",
                  }}
                >
                  📘 Description: Step-by-step tips to build a budget that helps
                  you manage your finances better.
                </p>
                <p style={{ fontWeight: "500" }}>
                  📅 Author: Emily Smith | Published: Jan 5, 2025
                </p>{" "}
              </div>
              <div
                style={{
                  width: "219",
                  height: "132",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginRight: "12px",
                }}
              >
                <img
                  src="./moduleAndBlog/Blog1.png"
                  alt="img"
                  style={{ borderRadius: "11px" }}
                />
              </div>
            </div>
            <div
              style={{
                display: "flex",
                gap: "10px",
                padding: "5px",
                border: "1px solid #000",
                borderRadius: "4px",
              }}
            >
              <div
                style={{
                  width: "419px",
                  height: "169px",
                  padding: "10px 16px 10px 10px",
                }}
              >
                <p
                  style={{
                    fontSize: "16px",
                    fontWeight: "bold",
                    marginBottom: "14px",
                  }}
                >
                  Stock Market 101: A Beginner’s Guide to Investing
                </p>
                <p
                  style={{
                    fontSize: "16px",
                    fontWeight: "500",
                    color: "#6A6A6A",
                    marginBottom: "14px",
                  }}
                >
                  Learn the basics of the stock market, including key terms and
                  how to get started.
                </p>
                <p style={{ fontWeight: "500" }}>
                  📅 Author: John Doe | Published: Jan 10, 2025
                </p>{" "}
              </div>
              <div
                style={{
                  width: "219",
                  height: "132",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginRight: "12px",
                }}
              >
                <img
                  src="./moduleAndBlog/Blog2.png"
                  alt="img"
                  style={{ borderRadius: "11px" }}
                />
              </div>
            </div>
          </div>
          <p
            style={{
              color: "#2F7FFF",
              fontSize: "10.05px",
              fontWeight: "500",
              textAlign: "end",
              position: "relative",
              right: "52px",
            }}
          >
            See more
            <span
              style={{
                fontSize: "20px",
                position: "relative",
                top: "3px",
                left: "2px",
              }}
            >
              &gt;
            </span>
          </p>
        </div>
      </div>
      ;
    </>
  );
};

export default ModuleAndBlog;
