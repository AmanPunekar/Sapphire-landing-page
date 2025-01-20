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
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div>
              <div>
                <p>Module 1: Stock Market Basics</p>
                <p>
                  Description: Learn the fundamentals of the stock market and
                  how to start investing.
                </p>
                <p>Progress: Beginner | 3/10 Lessons Completed</p>{" "}
                <div>
                  <img src="./moduleAndBlog/ModuleImg1.png" alt="img" />
                </div>
              </div>
            </div>
            <div>
              <div>
                <p>Module 1: Stock Market Basics</p>
                <p>
                  Description: Learn the fundamentals of the stock market and
                  how to start investing.
                </p>
                <p>📅 Progress: Beginner | 3/10 Lessons Completed</p>{" "}
                <div>
                  <img src="./moduleAndBlog/ModuleImg1.png" alt="img" />
                </div>
              </div>
            </div>
          </div>
          <p>See more &gt;</p>
        </div>
      </div>
      ;
    </>
  );
};

export default ModuleAndBlog;
