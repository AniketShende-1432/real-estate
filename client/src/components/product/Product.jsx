import React, { useEffect } from 'react'
import './Product.css'
import build from "../../assets/building.jpg";
import { FaPhoneAlt } from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";
import { GiFamilyHouse } from "react-icons/gi";
import furni from "../../assets/furniture.png";
import area from "../../assets/area.png";
import earth from "../../assets/earth.png";
import build1 from "../../assets/building1.jpg";
import build2 from "../../assets/building2.webp";

const Product = () => {
  useEffect(() => {
    const navbar = document.getElementById('navbar');
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        // Scrolling down, hide the navbar
        navbar.classList.remove('show');
      } else {
        // Scrolling up, show the navbar
        navbar.classList.add('show');
      }

      lastScrollY = currentScrollY;
    };

    const handleMouseMove = (e) => {
      if (e.clientY <= 110) {
        // Cursor near the top of the screen, show navbar
        navbar.classList.add('show');
      } else {
        // Cursor away from the top, hide navbar
        navbar.classList.remove('show');
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  return (
    <div style={{ backgroundColor: "aliceblue" }}>
      <div className='container-fluid pro-nav-cont' id='navbar'>
        <div className='d-flex p-3 pb-0'>
          <div className='me-3 fs-5 fw-bold'>₹ 10.5 Cr</div>
          <div className='ps-3 pt-1 pro-head'>3 BHK (3Baths) 1800 sqft (167sqm) For Sale Chembur East, Mumbai</div>
        </div>
        <div>
          <nav class="navbar navbar-expand-lg bg-wite">
            <div class="container-fluid pro-cont">
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav product-nav">
                  <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="#overid">Overview</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#detailid">More Details</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#societyid">Society</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#recommid">Recommendation</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
      <div className='container d-flex pro-main'>
        <div>
          <div className='card1 d-flex mt-4 bg-white' id="overid">
            <div className='item-box1'>
              <img src={build} alt="image" className='s-img' />
            </div>
            <div className='item-box2 p-3'>
              <div className='card-head d-flex flex-column'>
                <div className='d-flex'>
                  <label className='head'>Chembur East, Mumbai</label>
                </div>
                <label className='head2'>3 BHK Flat in Chembur, Mumbai</label>
              </div>
              <div className='mt-2 d-flex'>
                <div className='d-flex flex-column m-3 ms-0'>
                  <label className='fw-bold fs-5'>₹ 10.5 Cr</label>
                  <label className='price'>₹ 77,777/sqft</label>
                </div>
                <div className='d-flex flex-column m-3 ms-0 ps-3 item-bd'>
                  <label className='fw-bold fs-6'>1800 sqft (167sqm)</label>
                  <label>Super Build-up Area</label>
                </div>
                <div className='d-flex flex-column m-3 ms-0 ps-3 item-bd'>
                  <label className='fw-bold fs-6'>3 BHK (3Baths)</label>
                  <label>Ready To Move</label>
                </div>
                <div className='d-flex flex-column m-3 ms-0 ps-3 item-bd'>
                  <label className='fw-bold fs-6'>Developer</label>
                  <label>L & T Realty</label>
                </div>
              </div>
              <div className='d-flex pro-status'>
                <div className='d-flex flex-column'>
                  <label className='fw-bold fs-6'><img src={furni} alt="img" className='pro-img me-1 pb-1' />Furnished Status</label>
                  <label>Unfurnished</label>
                </div>
                <div className='d-flex flex-column'>
                  <label className='fw-bold fs-6'>Age of Construction</label>
                  <label>Ready To Move</label>
                </div>
              </div>
              <div className='mt-3'>
                <button className='btn view-btn me-2'>Get Phone No.</button>
                <button className='btn c-btn'><FaPhoneAlt /> Contact Agent</button>
              </div>
            </div>
          </div>
          <div className='pro-detail p-3 mt-3 bg-white' id="detailid">
            <h4>More Details</h4>
            <div className='row mt-3'>
              <div className='col-4 fw-light fs-5'>Price Breakup</div>
              <div className='col-8 fw-bold fs-5'>₹ 10.5 Cr</div>
            </div>
            <div className='row mt-3'>
              <div className='col-4 fw-light fs-5'>Address</div>
              <div className='col-8 fw-bold fs-5'>Chembur East, Mumbai, Maharashtra</div>
            </div>
            <div className='row mt-3'>
              <div className='col-4 fw-light fs-5'>Furnishing</div>
              <div className='col-8 fw-bold fs-5'>Unfurnished</div>
            </div>
            <div className='row mt-3'>
              <div className='col-4 fw-light fs-5'>Age of Construction</div>
              <div className='col-8 fw-bold fs-5'>Ready To Move</div>
            </div>
            <button className='btn c-btn mt-3'>Contact Agent</button>
          </div>
          <div className='pro-society bg-white mt-3 p-3' id='societyid'>
            <h4>Society</h4>
            <div className='soc-text'>Shamik Nirmaya CHS</div>
            <ul className='d-flex mt-2'>
              <li>
                <div><img src={area} alt="img" className='pro-img me-1 pb-1' />Total Occupied Area</div>
                <div className='fw-bold'>0.2 Acres</div>
              </li>
              <li>
                <div className='d-flex'>
                  <div className='me-1'><GiFamilyHouse /></div><div className='soc-icon-list'>Project Details</div>
                </div>
                <div className='fw-bold'>1 Tower, 28 Units</div>
                <div className='fw-bold'>11 Floors</div>
              </li>
              <li>
                <div><img src={earth} alt="img" className='pro-img me-1 pb-1' />Configuration</div>
                <div className='fw-bold'>3 BHK</div>
              </li>
              <li>
                <div className='d-flex'>
                  <div className='me-1'><FaHouse /></div><div className='soc-icon-list'>Property types</div>
                </div>
                <div className='fw-bold'>Apartment</div>
              </li>
            </ul>
          </div>
          <div className='mt-4' id='recommid'>
            <h5>Similar Properties</h5>
            <div id="carouselExample" class="carousel carousel-dark slide">
            <div class="carousel-inner p-3">
              <div class="carousel-item active">
                <div className='card-wrapper d-flex'>
                  <div className="card recomm-card" style={{ width: "18rem" }}>
                    <img src={build1} className="card-img-top h-50" alt="img" />
                    <div className="card-body">
                      <h5 className="card-title">₹ 2.5 Cr, 2BHK</h5>
                      <div className='fw-bold'>Om Palace</div>
                      <div>Vile Parle East, Mumbai</div>
                      <a href="#" className="btn view-btn mt-2">Enquire Now</a>
                    </div>
                  </div>
                  <div className="card recomm-card" style={{ width: "18rem" }}>
                    <img src={build2} className="card-img-top h-50" alt="img" />
                    <div className="card-body">
                      <h5 className="card-title">₹ 2.5 Cr, 2BHK</h5>
                      <div className='fw-bold'>Om Palace</div>
                      <div>Vile Parle East, Mumbai</div>
                      <a href="#" className="btn  view-btn mt-2">Enquire Now</a>
                    </div>
                  </div>
                  <div className="card recomm-card me-0" style={{ width: "18rem" }}>
                    <img src={build1} className="card-img-top h-50" alt="img" />
                    <div className="card-body">
                      <h5 className="card-title">₹ 2.5 Cr, 2BHK</h5>
                      <div className='fw-bold'>Om Palace</div>
                      <div>Vile Parle East, Mumbai</div>
                      <a href="#" className="btn  view-btn mt-2">Enquire Now</a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
              <div className='card-wrapper d-flex'>
                  <div className="card recomm-card" style={{ width: "18rem" }}>
                    <img src={build1} className="card-img-top h-50" alt="img" />
                    <div className="card-body">
                      <h5 className="card-title">₹ 2.5 Cr, 2BHK</h5>
                      <div className='fw-bold'>Om Palace</div>
                      <div>Vile Parle East, Mumbai</div>
                      <a href="#" className="btn  view-btn mt-2">Enquire Now</a>
                    </div>
                  </div>
                  <div className="card recomm-card" style={{ width: "18rem" }}>
                    <img src={build2} className="card-img-top h-50" alt="img" />
                    <div className="card-body">
                      <h5 className="card-title">₹ 2.5 Cr, 2BHK</h5>
                      <div className='fw-bold'>Om Palace</div>
                      <div>Vile Parle East, Mumbai</div>
                      <a href="#" className="btn  view-btn mt-2">Enquire Now</a>
                    </div>
                  </div>
                  <div className="card recomm-card me-0" style={{ width: "18rem" }}>
                    <img src={build1} className="card-img-top h-50" alt="img" />
                    <div className="card-body">
                      <h5 className="card-title">₹ 2.5 Cr, 2BHK</h5>
                      <div className='fw-bold'>Om Palace</div>
                      <div>Vile Parle East, Mumbai</div>
                      <a href="#" className="btn  view-btn mt-2">Enquire Now</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
          </div>
        </div>
        <div className='pt-2'>
          <div className='pro-contact d-flex flex-column p-3 mt-3 bg-white'>
            <label className='fw-bold fs-5'>Contact Agent</label>
            <label className='pro-no mt-2'>+91-98XXXXXXXX</label>
            <button className='btn c-btn mt-2'>Get Phone No.</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product