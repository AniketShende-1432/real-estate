import React, { useState } from 'react'
import Profilenav from '../../profilenav/Profilenav';
import Selldrop from './Selldrop';
import { GiWashingMachine } from "react-icons/gi";
import { GiSofa } from "react-icons/gi";
import { FaBed } from "react-icons/fa";
import { GiElevator } from "react-icons/gi";
import { BiCctv } from "react-icons/bi";
import fridge from "../../../assets/fridge.png";
import aircond from "../../../assets/air-conditioner.png";
import gym from "../../../assets/gym.png";
import garden from "../../../assets/garden.png";
import kidsarea from "../../../assets/kidsarea.png";
import cupboard from "../../../assets/cupboard.png";
import tv from "../../../assets/tv.png";
import geyser from "../../../assets/geyser.png";
import swim from "../../../assets/swim.png";
import water from "../../../assets/water.png";
import "./Sell.css";

const Sell2 = () => {

    const [Beedroom, setBeedroom] = useState('');
    const [Balconies, setBalconies] = useState('');
    const [Bathroom, setBathroom] = useState('');
    const [Floorno, setFloorno] = useState('');
    const [Totalfloor, setTotalfloor] = useState('');
    const [Ageprop, setAgeprop] = useState('');
    const [clickedflat, setClickedflat] = useState({
        wash: false,
        sofa: false,
        fridge: false,
        ac: false,
        bed: false,
        cupboard: false,
        geyser: false,
        tv: false,
    });
    const [clickedsoc, setClickedsoc] = useState({
        lift: false,
        cctv: false,
        garden: false,
        gym: false,
        karea: false,
        swim: false,
        water: false,
    });
    const [images, setImages] = useState([]); // State to store image previews

    const handleFileChange = (event) => {
        const files = Array.from(event.target.files); // Convert FileList to an array
        const previewImages = files.map((file) => URL.createObjectURL(file)); // Create object URLs for preview
        setImages(previewImages); // Update state with image previews
    };

    const bedroomoptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const balconiesoptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const Bathroomoptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const Floornooptions = [];
    const Totalflooroptions = [];
    const Agepropoptions = ['10+'];
    for (let i = 0; i <= 80; i++) {
        Floornooptions.push(i);
        Totalflooroptions.push(i);
    }
    for (let i = 9; i >= 1; i--) {
        Agepropoptions.unshift(i);
    }
    const handleflat = (buttonKey) => {
        setClickedflat((prevState) => ({
            ...prevState,
            [buttonKey]: !prevState[buttonKey], // Toggle the clicked button's style
        }));
    };
    const handlesoc = (buttonKey) => {
        setClickedsoc((prevState) => ({
            ...prevState,
            [buttonKey]: !prevState[buttonKey], // Toggle the clicked button's style
        }));
    };

    return (
        <div className="parent-cont" style={{ backgroundColor: "#FFF5EE" }}>
            <Profilenav select="Sell" />
            <div className='container main-box w-50'>
                <div className='main2-box bg-white p-4'>
                    <div className='sell-head'><h3>Sell Of Property</h3></div>
                    <div className='mt-4'>
                        <div><h5>Property Features</h5></div>
                        <div className='mt-2 d-flex justify-content-around'>
                            <div>
                                <Selldrop
                                    label="Bedroom"
                                    options={bedroomoptions}
                                    value={Beedroom}
                                    onChange={setBeedroom}
                                />
                            </div>
                            <div>
                                <Selldrop
                                    label="Balconies"
                                    options={balconiesoptions}
                                    value={Balconies}
                                    onChange={setBalconies}
                                />
                            </div>
                        </div>
                        <div className='mt-3 d-flex justify-content-around'>
                            <div>
                                <Selldrop
                                    label="Bathroom"
                                    options={Bathroomoptions}
                                    value={Bathroom}
                                    onChange={setBathroom}
                                />
                            </div>
                            <div>
                                <Selldrop
                                    label="Age of Property"
                                    options={Agepropoptions}
                                    value={Ageprop}
                                    onChange={setAgeprop}
                                />
                            </div>
                        </div>
                        <div className='mt-3 d-flex justify-content-around'>
                            <div>
                                <Selldrop
                                    label="Total Floor"
                                    options={Totalflooroptions}
                                    value={Totalfloor}
                                    onChange={setTotalfloor}
                                />
                            </div>
                            <div>
                                <Selldrop
                                    label="Floor no"
                                    options={Floornooptions}
                                    value={Floorno}
                                    onChange={setFloorno}
                                />
                            </div>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <div><h5>Add Amenities</h5></div>
                        <div>
                            <div className='text-secondary'>Flat Furnishing</div>
                            <div className='d-flex flex-wrap justify-content-evenly flat-ament mt-2'>
                                <button className='btn btn-light border' onClick={() => handleflat("wash")}
                                    style={clickedflat.wash ? { border: "1px solid darkorange", backgroundColor: "#FFE5B4" } : {}} ><GiWashingMachine className='mb-1 fs-5 me-2' />Washing Machine</button>
                                <button className='btn btn-light border' onClick={() => handleflat("sofa")}
                                    style={clickedflat.sofa ? { border: "1px solid darkorange", backgroundColor: "#FFE5B4" } : {}} ><GiSofa className='mb-1 fs-5 me-2' />Sofa</button>
                                <button className='btn btn-light border' onClick={() => handleflat("bed")}
                                    style={clickedflat.bed ? { border: "1px solid darkorange", backgroundColor: "#FFE5B4" } : {}} ><FaBed className='mb-1 fs-5 me-2' />Bed</button>
                                <button className='btn btn-light btn-flatimg border' onClick={() => handleflat("fridge")}
                                    style={clickedflat.fridge ? { border: "1px solid darkorange", backgroundColor: "#FFE5B4" } : {}} ><img src={fridge} alt="img" className='h-100 mb-1' />Fridge</button>
                                <button className='btn btn-light border' onClick={() => handleflat("ac")}
                                    style={clickedflat.ac ? { border: "1px solid darkorange", backgroundColor: "#FFE5B4" } : {}} ><img src={aircond} alt="img" className='flat-img' />AC</button>
                                <button className='btn btn-light border d-flex justify-content-center align-items-center' onClick={() => handleflat("cupboard")}
                                    style={clickedflat.cupboard ? { border: "1px solid darkorange", backgroundColor: "#FFE5B4" } : {}} ><img src={cupboard} alt="img" className='flat-img' />Cupboard</button>
                                <button className='btn btn-light border d-flex justify-content-center align-items-center' onClick={() => handleflat("geyser")}
                                    style={clickedflat.geyser ? { border: "1px solid darkorange", backgroundColor: "#FFE5B4" } : {}} ><img src={geyser} alt="img" className='flat-img' />Geyser</button>
                                <button className='btn btn-light border d-flex justify-content-center align-items-center' onClick={() => handleflat("tv")}
                                    style={clickedflat.tv ? { border: "1px solid darkorange", backgroundColor: "#FFE5B4" } : {}} ><img src={tv} alt="img" className='flat-img' />TV</button>
                            </div>
                        </div>
                        <div className='mt-3'>
                            <div className='text-secondary'>Society Amenities</div>
                            <div className='d-flex flex-wrap flat-ament justify-content-evenly mt-2'>
                                <button className='btn btn-light border' onClick={() => handlesoc("lift")}
                                    style={clickedsoc.lift ? { border: "1px solid darkorange", backgroundColor: "#FFE5B4" } : {}} ><GiElevator className='mb-1 fs-5 me-2' />Lift</button>
                                <button className='btn btn-light border' onClick={() => handlesoc("cctv")}
                                    style={clickedsoc.cctv ? { border: "1px solid darkorange", backgroundColor: "#FFE5B4" } : {}} ><BiCctv className='mb-1 fs-5 me-2' />CCTV</button>
                                <button className='btn btn-light border d-flex justify-content-center align-items-center' onClick={() => handlesoc("karea")}
                                    style={clickedsoc.karea ? { border: "1px solid darkorange", backgroundColor: "#FFE5B4" } : {}} ><img src={kidsarea} alt="img" className='flat-img' /><label>Kides Area</label></button>
                                <button className='btn btn-light border d-flex justify-content-center align-items-center' onClick={() => handlesoc("garden")}
                                    style={clickedsoc.garden ? { border: "1px solid darkorange", backgroundColor: "#FFE5B4" } : {}} ><img src={garden} alt="img" className='flat-img' /><label>Garden</label></button>
                                <button className='btn btn-light border' onClick={() => handlesoc("gym")}
                                    style={clickedsoc.gym ? { border: "1px solid darkorange", backgroundColor: "#FFE5B4" } : {}} ><img src={gym} alt="img" className='flat-img' /><label>Gym</label></button>
                                <button className='btn btn-light border d-flex justify-content-center align-items-center' onClick={() => handlesoc("swim")}
                                    style={clickedsoc.swim ? { border: "1px solid darkorange", backgroundColor: "#FFE5B4" } : {}} ><img src={swim} alt="img" className='flat-img' /><label>Swimming Pool</label></button>
                                <button className='btn btn-light border d-flex justify-content-center align-items-center' onClick={() => handlesoc("water")}
                                    style={clickedsoc.water ? { border: "1px solid darkorange", backgroundColor: "#FFE5B4" } : {}} ><img src={water} alt="img" className='flat-img' /><label>Regular Water Supply</label></button>
                            </div>
                        </div>
                    </div>
                    <div className="mt-5">
                        <div><h5>Photos Property</h5></div>
                        <div>
                            <div>
                                <label for="formFileMultiple" class="form-label photo-btn text-white fw-bold text-center mt-2 p-2 w-100" htmlFor='formFileMultiple'>Add Photos Now</label>
                                <input className="form-control" type="file" id="formFileMultiple" multiple style={{ display: 'none' }}
                                    onChange={handleFileChange} />
                            </div>
                            <div className="image-preview-container d-flex flex-wrap">
                                {images.map((src, index) => (
                                    <div key={index} className="m-2">
                                        <img
                                            src={src}
                                            alt={`Preview ${index}`}
                                            className="img-thumbnail"
                                            style={{ maxWidth: "100px", maxHeight: "100px" }}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <button className='sell-btn p-2 w-100 text-white fw-bold mt-3'>Submit Property</button>
                </div>
            </div>
        </div>
    )
}

export default Sell2