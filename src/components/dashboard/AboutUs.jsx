import React from "react";

const AboutUs = () => {
  return (
    <div
      className="w-100 overflow-hidden px-4 py-4 mt-5"
      style={{
        background:
          "linear-gradient(135deg,#2E0854,#4B0082,#6A0DAD)",
        minHeight: "100vh",
      }}
    >
      {/* MAIN SECTION */}
      <section className="text-white py-5">

        <div className="container">

          {/* TOP HEADING */}
          <div className="text-center mb-5">

            <h5
              className="text-uppercase fw-bold"
              style={{
                letterSpacing: "2px",
                color: "#FFD700",
              }}
            >
              Satkar Enterprises
            </h5>

            <h1
              className="fw-light mt-3"
              style={{
                fontSize: "4rem",
                lineHeight: "1.2",
              }}
            >
              Complete Berger Paint <br />
              Solutions For Every Budget
            </h1>

            <p
              className="mt-4 mx-auto"
              style={{
                maxWidth: "850px",
                color: "#EAEAEA",
                fontSize: "1.1rem",
              }}
            >
              Satkar Enterprises is a trusted Berger Paints dealer
              providing premium paint products, waterproofing solutions,
              designer textures, wall finishes, primers, enamels,
              and professional paint guidance for homes, offices,
              shops, and commercial spaces.
            </p>

          </div>

          {/* SECTION 1 */}
          <div
            className="row align-items-center mb-5 p-4 rounded-4"
            style={{
              background: "rgba(255,255,255,0.05)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(255,215,0,0.25)",
              boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
            }}
          >

            <div className="col-lg-6 mb-4 mb-lg-0">

              <img
                src="https://images.unsplash.com/photo-1523413651479-597eb2da0ad6"
                alt="paint colours"
                className="img-fluid rounded-4 shadow-lg w-50"
              />

            </div>

            <div className="col-lg-6">

              <h2
                className="fw-bold mb-4"
                style={{ color: "#FFD700" }}
              >
                Premium Colour Collection
              </h2>

              <p
                style={{
                  color: "#EAEAEA",
                  fontSize: "1.1rem",
                }}
              >
                Explore beautiful Berger Paint colour collections with
                modern shades, elegant textures, and premium wall finishes
                specially designed to transform every interior and exterior space.
              </p>

            </div>

          </div>          {/* SECTION 2 */}
          <div
            className="row align-items-center flex-lg-row-reverse mb-5 p-4 rounded-4"
            style={{
              background: "rgba(255,255,255,0.05)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(255,215,0,0.25)",
              boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
            }}
          >

            <div className="col-lg-6 mb-4 mb-lg-0">

              <img
                src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
                alt="paint range"
                className="img-fluid rounded-4 shadow-lg"
              />

            </div>

            <div className="col-lg-6">

              <h2
                className="fw-bold mb-4"
                style={{ color: "#FFD700" }}
              >
                Paints For Every Price Range
              </h2>

              <p
                style={{
                  color: "#EAEAEA",
                  fontSize: "1.1rem",
                }}
              >
                Satkar Enterprises provides every paint category from
                low-budget economy paints to premium luxury paint solutions.
              </p>

            </div>

          </div>

          {/* SECTION 3 */}
          <div
            className="row align-items-center mb-5 p-4 rounded-4"
            style={{
              background: "rgba(255,255,255,0.05)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(255,215,0,0.25)",
              boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
            }}
          >

            <div className="col-lg-6 mb-4 mb-lg-0">

              <img
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85"
                alt="inspection"
                className="img-fluid rounded-4 shadow-lg w-100"
              />

            </div>

            <div className="col-lg-6">

              <h2
                className="fw-bold mb-4"
                style={{ color: "#FFD700" }}
              >
                Free Site Inspection Service
              </h2>

              <p
                style={{
                  color: "#EAEAEA",
                  fontSize: "1.1rem",
                }}
              >
                We also provide free site inspection services.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* FOUNDER SECTION */}
      <section className="py-5 text-white">

        <div className="container">

          <div
            className="p-5 rounded-4 text-center"
            style={{
              background: "rgba(255,255,255,0.05)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(255,215,0,0.25)",
              boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
            }}
          >

            <h5
              className="text-uppercase fw-bold mb-3"
              style={{
                color: "#FFD700",
                letterSpacing: "2px",
              }}
            >
              Leadership Team
            </h5>

            <h1
              className="fw-bold mb-4"
              style={{
                fontSize: "3.5rem",
                lineHeight: "1.2",
              }}
            >
              Meet The People Behind <br />
              Satkar Enterprises
            </h1>

            <p
              className="mx-auto"
              style={{
                maxWidth: "800px",
                color: "#EAEAEA",
                fontSize: "1.1rem",
              }}
            >
              Satkar Enterprises proudly stands as a trusted name
              in the paint industry, delivering premium Berger Paints
              products, professional customer service, and expert paint
              guidance for every type of project.
            </p>

            <div className="row mt-5">

              {/* FOUNDER */}
              <div className="col-md-6 mb-4">

                <div
                  className="p-4 rounded-4 h-100"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,215,0,0.25)",
                  }}
                >

                  <h2 className="fw-bold">
                    Palak Chawla
                  </h2>

                  <h5
                    className="mb-3"
                    style={{ color: "#FFD700" }}
                  >
                    Founder & Owner
                  </h5>

                  <p
                    style={{
                      color: "#EAEAEA",
                      fontSize: "1rem",
                    }}
                  >
                    Palak Chawla leads Satkar Enterprises with dedication,
                    professionalism, and a strong commitment to customer
                    satisfaction.
                  </p>

                </div>

              </div>

              {/* SALESMAN */}
              <div className="col-md-6 mb-4">

                <div
                  className="p-4 rounded-4 h-100"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,215,0,0.25)",
                  }}
                >

                  <h2 className="fw-bold">
                    Md Talha
                  </h2>

                  <h5
                    className="mb-3"
                    style={{ color: "#FFD700" }}
                  >
                    Salesman & Inspection Guide
                  </h5>

                  <p
                    style={{
                      color: "#EAEAEA",
                      fontSize: "1rem",
                    }}
                  >
                    Md Talha provides expert product guidance,
                    free site inspection services, colour consultation,
                    and professional support.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* COLOUR SECTION */}
      <section
        className="text-white d-flex align-items-center rounded-4"
        style={{
          backgroundImage:
            "linear-gradient(rgba(46,8,84,0.88),rgba(75,0,130,0.88)), url('https://images.unsplash.com/photo-1523413651479-597eb2da0ad6')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
        }}
      >

        <div className="container">

          <div className="row">

            <div className="col-lg-6">

              <h1
                className="fw-light"
                style={{
                  fontSize: "5rem",
                  lineHeight: "1.1",
                }}
              >
                2500+ Unique <br />
                Paint Colours
              </h1>

              <a
                href="https://www.bergerpaints.com/colour/colour-catalogue"
                target="_blank"
                rel="noreferrer"
                className="btn btn-lg px-5 py-3 mt-5 fw-bold"
                style={{
                  background: "#FFD700",
                  color: "#2E0854",
                  border: "none",
                  borderRadius: "50px",
                }}
              >
                Explore Now
              </a>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
};

export default AboutUs;