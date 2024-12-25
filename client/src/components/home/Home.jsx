import React, { useState, useEffect, useRef } from 'react'
import './Home.css'
import Navbar from '../navbar/Navbar';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import build1 from "../../assets/building1.jpg";
import build2 from "../../assets/building2.webp";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'; // Autoplay styles
import { Pagination, Autoplay } from 'swiper/modules';

const Home = () => {

    const location = useLocation();
    const [selectedTab, setSelectedTab] = useState('buy');
    const [Input1, setInput1] = useState("Navi Mumbai");
    const navigate = useNavigate();

    useEffect(() => {
        if (location.state?.tab) {
            setSelectedTab(location.state.tab);
        }
    }, [location]);

    const change1 = (value) => {
        setInput1(value);
    }

    const sellnav = () => {
        navigate('/profile', { state: { tab: 'Sell' } })
    }

    return (
        <>
            <Navbar back="profile-bg" />
            <div className='d-flex'>
                <div style={{width:"78%"}}>
                    <div id="carouselExampleAutoplaying" className="carousel slide h-adv-cont" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="https://housing-images.n7net.in/3a1452c5/69b1a317abbdcf1e6f1072386dc28707/v0/banner.jpg" className="d-block w-100 h-adv-image" alt="img" />
                            </div>
                            <div className="carousel-item">
                                <img src="https://i.pinimg.com/originals/c2/52/d7/c252d7160599e5d0683c65f968bd103b.jpg" className="d-block w-100 h-adv-image" alt="img" />
                            </div>
                            <div className="carousel-item">
                                <img src="https://png.pngtree.com/thumb_back/fh260/background/20220405/pngtree-real-estatebright-colorful-tone-concept-dispossession-foreclosure-exterior-photo-image_16921278.jpg" className="d-block w-100 h-adv-image" alt="img" />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                    <div className='s-cont d-flex justify-content-center'>
                        <div className='s-cont-box'>
                            <div className='s-cont-box1 d-flex'>
                                <div onClick={() => setSelectedTab('buy')}
                                    className={`s-itm ${selectedTab === 'buy' ? 's-itmcol' : ''}`}>Buy</div>
                                <div onClick={sellnav}
                                    className={`s-itm ${selectedTab === 'Sell' ? 's-itmcol' : ''}`} >Sell</div>
                                <div onClick={() => setSelectedTab('Rent')}
                                    className={`s-itm ${selectedTab === 'Rent' ? 's-itmcol' : ''}`}>Rent</div>
                                <div onClick={() => setSelectedTab('Plot/Land')}
                                    className={`s-itm ${selectedTab === 'Plot/Land' ? 's-itmcol' : ''}`}>Plot/Land</div>
                                <div onClick={() => setSelectedTab('PG')}
                                    className={`s-itm ${selectedTab === 'PG' ? 's-itmcol' : ''}`}>PG</div>
                                <div onClick={() => setSelectedTab('Commercial')}
                                    className={`s-itm ${selectedTab === 'Commercial' ? 's-itmcol' : ''}`}>Commercial</div>
                            </div>
                            <div className='s-cont-sbox d-flex p-2'>
                                <form className='d-flex align-items-center justify-content-start ms-2'>
                                    <div class="dropdown d-flex loc-dropdown">
                                        <button class="btn btn-secondary dropdown-toggle bg-white text-dark p-2 loc-drop" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            {Input1}
                                        </button>
                                        <ul class="dropdown-menu">
                                            <li><a class="dropdown-item" onClick={() => change1("Mumbai")} href="#">Mumbai</a></li>
                                            <li><a class="dropdown-item" onClick={() => change1("Western Mumbai")} href="#">Western Mumbai</a></li>
                                            <li><a class="dropdown-item" onClick={() => change1("Central Mumbai")} href="#">Central Mumbai</a></li>
                                            <li><a class="dropdown-item" onClick={() => change1("Navi Mumbai")} href="#">Navi Mumbai</a></li>
                                            <li><a class="dropdown-item" onClick={() => change1("Thane")} href="#">Thane</a></li>
                                            <li><a class="dropdown-item" onClick={() => change1("Beyond Thane")} href="#">Beyond Thane</a></li>
                                            <li><a class="dropdown-item" onClick={() => change1("Pune")} href="#">Pune</a></li>
                                            <li><a class="dropdown-item" onClick={() => change1("Nashik")} href="#">Nashik</a></li>
                                        </ul>
                                    </div>
                                    <input type="text" className="s-cont-input" placeholder='Location' />
                                </form>
                                <div className='d-flex align-items-center s-drop'>
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Property Type
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Flat</a></li>
                                        <li><a className="dropdown-item" href="#">1 bhk</a></li>
                                        <li><a className="dropdown-item" href="#">2 bhk</a></li>
                                    </ul>
                                </div>
                                <div className='d-flex align-items-center ms-auto'>
                                    <button className='btn search-btn text-white' ><Link className="nav-link active small" aria-current="page" to="/search">Search</Link></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='advbox'>
                    <Swiper
                        direction={'vertical'} // Enables vertical direction
                        pagination={{
                            clickable: true, // Pagination dots will be clickable
                        }}
                        autoplay={{
                            delay: 2000, // Time in milliseconds before the next slide
                            disableOnInteraction: false, // Autoplay will continue even after user interaction
                          }}
                          modules={[Pagination, Autoplay]}  // Include the Pagination module
                        className="mySwiper"
                        style={{
                            height: '400px', // Set the height of the carousel container
                            width: '300px',  // Set the width of the carousel container
                        }}
                    >
                        {/* Slides */}
                        <SwiperSlide style={{ display: 'flex', flexDirection: "column" }}>
                            <div className="card text-bg-dark adv-card" >
                                <img src="https://www.iccsafe.org/wp-content/uploads/bsj/GettyImages-851924668.jpg" className="card-img advbox-img" alt="img" />
                                <div className="card-img-overlay d-flex align-items-end">
                                    <div>
                                        <h5 className="card-title advbox-txt">Silicon Hofe</h5>
                                        <p className="card-text advbox-txt mb-0">Tilak Nagar, Mumbai</p>
                                        <p className="card-text advbox-txt">₹ 25.0 L - 50.0 L</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card text-bg-dark adv-card" >
                                <img src="https://www.footanstey.com/wp-content/uploads/2021/10/office-flats-hotel-buidling-1024x682.jpg" className="card-img advbox-img" alt="img" />
                                <div className="card-img-overlay d-flex align-items-end">
                                    <div>
                                        <h5 className="card-title advbox-txt">Dynamix Group</h5>
                                        <p className="card-text advbox-txt mb-0">Andheri East, Mumbai</p>
                                        <p className="card-text advbox-txt">₹ 1.25 Cr - 2.5 Cr</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide style={{ display: 'flex', flexDirection: "column" }}>
                        <div className="card text-bg-dark adv-card" >
                                <img src="https://www.footanstey.com/wp-content/uploads/2021/10/office-flats-hotel-buidling-1024x682.jpg" className="card-img advbox-img" alt="img" />
                                <div className="card-img-overlay d-flex align-items-end">
                                    <div>
                                        <h5 className="card-title advbox-txt">Dynamix Group</h5>
                                        <p className="card-text advbox-txt mb-0">Andheri East, Mumbai</p>
                                        <p className="card-text advbox-txt">₹ 1.25 Cr - 2.5 Cr</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card text-bg-dark adv-card" >
                                <img src="https://www.iccsafe.org/wp-content/uploads/bsj/GettyImages-851924668.jpg" className="card-img advbox-img" alt="img" />
                                <div className="card-img-overlay d-flex align-items-end">
                                    <div>
                                        <h5 className="card-title advbox-txt">Silicon Hofe</h5>
                                        <p className="card-text advbox-txt mb-0">Tilak Nagar, Mumbai</p>
                                        <p className="card-text advbox-txt">₹ 25.0 L - 50.0 L</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
            <div className='container' style={{ marginTop: "8rem" }}>
                <div className='mb-4'><h4>Projects On High Demand</h4></div>
                <div className='d-flex' style={{ gap: "1rem" }}>
                    <div className="card" style={{ width: "18rem" }}>
                        <img src={build1} className="card-img-top" alt="img" />
                        <div className="card-body">
                            <h6 className='fw-bold mb-0'>Sidhivinayak City</h6>
                            <div className='shead'>by Sidhivinayak Homes</div>
                            <div className='body1'>1,2 BHK Apatments</div>
                            <div className='body2'>Taloja, Navi Mumbai</div>
                            <div className='fw-bold fs-5 mt-2'>₹ 25.0 L - 50.0 L</div>
                        </div>
                    </div>
                    <div className="card" style={{ width: "18rem" }}>
                        <img src={build2} className="card-img-top h-75" alt="img" />
                        <div className="card-body">
                            <h6 className='fw-bold mb-0'>Sidhivinayak City</h6>
                            <div className='shead'>by Sidhivinayak Homes</div>
                            <div className='body1'>1,2 BHK Apatments</div>
                            <div className='body2'>Taloja, Navi Mumbai</div>
                            <div className='fw-bold fs-5 mt-2'>₹ 25.0 L - 50.0 L</div>
                        </div>
                    </div>
                    <div className="card" style={{ width: "18rem" }}>
                        <img src={build1} className="card-img-top" alt="img" />
                        <div className="card-body">
                            <h6 className='fw-bold mb-0'>Sidhivinayak City</h6>
                            <div className='shead'>by Sidhivinayak Homes</div>
                            <div className='body1'>1,2 BHK Apatments</div>
                            <div className='body2'>Taloja, Navi Mumbai</div>
                            <div className='fw-bold fs-5 mt-2'>₹ 25.0 L - 50.0 L</div>
                        </div>
                    </div>
                    <div className="card" style={{ width: "18rem" }}>
                        <img src={build2} className="card-img-top h-75" alt="img" />
                        <div className="card-body">
                            <h6 className='fw-bold mb-0'>Sidhivinayak City</h6>
                            <div className='shead'>by Sidhivinayak Homes</div>
                            <div className='body1'>1,2 BHK Apatments</div>
                            <div className='body2'>Taloja, Navi Mumbai</div>
                            <div className='fw-bold fs-5 mt-2'>₹ 25.0 L - 50.0 L</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home