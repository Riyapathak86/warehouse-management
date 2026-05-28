import React from "react";

const Shop = () => {
  return (
    <div className="mt-5">
    <div className="container py-5 mt-6">

      <div >
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{
            width: "120%",
            height: "50vh",
            objectFit: "cover",
          }}
        >
          <source src="/heading.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="row g-4 justify-content-center">

        {/* Card 1 */}
        <div className="col-md-6">
          <div className="card shadow border-0 h-100">
            <img
              src="/entrance.jpeg"
              className="card-img-top shop-img"
              alt=""
            />

            <div className="card-body text-center">
              <h4 className="fw-bold">Main Entrance</h4>

              <p className="text-muted">
                Beautiful and welcoming entrance design of our store.
              </p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-md-6">
          <div className="card shadow border-0 h-100">
            <img
              src="/counter.jpeg"
              className="card-img-top shop-img"
              alt=""
            />

            <div className="card-body text-center">
              <h4 className="fw-bold">Billing Counter</h4>

              <p className="text-muted">
                Modern counter setup for smooth customer service.
              </p>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-md-6">
          <div className="card shadow border-0 h-100">
            <img
              src="/openingDay.jpeg"
              className="card-img-top shop-img"
              alt=""
            />

            <div className="card-body text-center">
              <h4 className="fw-bold">Opening Day</h4>

              <p className="text-muted">
                Memorable moments from our grand opening celebration.
              </p>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="col-md-6">
          <div className="card shadow border-0 h-100">
            <img
              src="/int-ext.jpeg"
              className="card-img-top shop-img"
              alt=""
            />

            <div className="card-body text-center">
              <h4 className="fw-bold">Interior & Exterior</h4>

              <p className="text-muted">
                Elegant interior and exterior design view.
              </p>
            </div>
          </div>
        </div>

        {/* Card 5 */}
        <div className="col-md-6">
          <div className="card shadow border-0 h-100">
            <img
              src="/enamel.jpeg"
              className="card-img-top shop-img"
              alt=""
            />

            <div className="card-body text-center">
              <h4 className="fw-bold">Enamel Collection</h4>

              <p className="text-muted">
                Premium quality enamel products available here.
              </p>
            </div>
          </div>
        </div>

        {/* Card 6 */}
        <div className="col-md-6">
          <div className="card shadow border-0 h-100">
            <img
              src="/texture.jpeg"
              className="card-img-top shop-img"
              alt=""
            />

            <div className="card-body text-center">
              <h4 className="fw-bold">Texture Designs</h4>

              <p className="text-muted">
                Stylish texture designs for modern walls and interiors.
              </p>
            </div>
          </div>
        </div>

      </div></div>

      {/* CSS */}
      <style>
        {`
          .shop-img{
            height:400px;
            object-fit:cover;
          }

          .card{
            border-radius:20px;
            overflow:hidden;
            transition:0.3s;
          }

          .card:hover{
            transform:translateY(-5px);
          }

          @media(max-width:768px){

            .shop-img{
              height:250px;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Shop;