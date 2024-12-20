import React, { useState } from 'react'
import Profilenav from '../../profilenav/Profilenav';
import Selldrop from '../sell/Selldrop';
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
import "../sell/Sell.css";

const PG2 = () => {
    const [Beedroompg, setBeedroompg] = useState('');
    const [Balconiespg, setBalconiespg] = useState('');
    const [Bathroompg, setBathroompg] = useState('');
    const [Floornopg, setFloornopg] = useState('');
    const [Totalfloorpg, setTotalfloorpg] = useState('');
    const [Ageproppg, setAgeproppg] = useState('');
    const [clickedflatpg, setClickedflatpg] = useState({
        wash: false,
        sofa: false,
        fridge: false,
        ac: false,
        bed: false,
        cupboard: false,
        geyser: false,
        tv: false,
    });
    const [clickedsocpg, setClickedsocpg] = useState({
        lift: false,
        cctv: false,
        garden: false,
        gym: false,
        karea: false,
        swim: false,
        water: false,
    });
    const [imagespg, setImagespg] = useState([]); // State to store image previews

    const handleFileChangepg = (event) => {
        const files = Array.from(event.target.files); // Convert FileList to an array
        const previewImages = files.map((file) => URL.createObjectURL(file)); // Create object URLs for preview
        setImagespg(previewImages); // Update state with image previews
    };
    const bedroomoptionspg = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const balconiesoptionspg = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const Bathroomoptionspg = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const Floornooptionspg = [];
    const Totalflooroptionspg = [];
    const Agepropoptionspg = ['10+'];
    for (let i = 0; i <= 80; i++) {
        Floornooptionspg.push(i);
        Totalflooroptionspg.push(i);
    }
    for (let i = 9; i >= 1; i--) {
        Agepropoptionspg.unshift(i);
    }
    const handleflatpg = (buttonKey) => {
        setClickedflatpg((prevState) => ({
            ...prevState,
            [buttonKey]: !prevState[buttonKey], // Toggle the clicked button's style
        }));
    };
    const handlesocpg = (buttonKey) => {
        setClickedsocpg((prevState) => ({
            ...prevState,
            [buttonKey]: !prevState[buttonKey], // Toggle the clicked button's style
        }));
    };

    return (
        <div className="parent-cont" style={{ backgroundColor: "#FFF5EE" }}>
            <Profilenav select="Sell" />
            <div className='container main-box w-50'>
                <div className='main2-box bg-white p-4'>
                    <div className='sell-head'><h3>PG Property</h3></div>
                    <div className='mt-4'>
                        <div><h5>Property Features</h5></div>
                        <div className='mt-2 d-flex justify-content-around'>
                            <div>
                                <Selldrop
                                    label="Bedroom"
                                    options={bedroomoptionspg}
                                    value={Beedroompg}
                                    onChange={setBeedroompg}
                                />
                            </div>
                            <div>
                                <Selldrop
                                    label="Balconies"
                                    options={balconiesoptionspg}
                                    value={Balconiespg}
                                    onChange={setBalconiespg}
                                />
                            </div>
                        </div>
                        <div className='mt-3 d-flex justify-content-around'>
                            <div>
                                <Selldrop
                                    label="Bathroom"
                                    options={Bathroomoptionspg}
                                    value={Bathroompg}
                                    onChange={setBathroompg}
                                />
                            </div>
                            <div>
                                <Selldrop
                                    label="Age of Property"
                                    options={Agepropoptionspg}
                                    value={Ageproppg}
                                    onChange={setAgeproppg} pg
                                />
                            </div>
                        </div>
                        <div className='mt-3 d-flex justify-content-around'>
                            <div>
                                <Selldrop
                                    label="Total Floor"
                                    options={Totalflooroptionspg}
                                    value={Totalfloorpg}
                                    onChange={setTotalfloorpg}
                                />
                            </div>
                            <div>
                                <Selldrop
                                    label="Floor no"
                                    options={Floornooptionspg}
                                    value={Floornopg}
                                    onChange={setFloornopg}
                                />
                            </div>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <div><h5>Add Amenities</h5></div>
                        <div>
                            <div className='text-secondary'>Flat Furnishing</div>
                            <div className='d-flex flex-wrap justify-content-evenly flat-ament mt-2'>
                                <button className='btn btn-light border' onClick={() => handleflatpg("wash")}
                                    style={clickedflatpg.wash ? { border: "1px solid darkorange", backgroundColor: "#FFE5B4" } : {}} ><GiWashingMachine className='mb-1 fs-5 me-2' />Washing Machine</button>
                                <button className='btn btn-light border' onClick={() => handleflatpg("sofa")}
                                    style={clickedflatpg.sofa ? { border: "1px solid darkorange", backgroundColor: "#FFE5B4" } : {}} ><GiSofa className='mb-1 fs-5 me-2' />Sofa</button>
                                <button className='btn btn-light border' onClick={() => handleflatpg("bed")}
                                    style={clickedflatpg.bed ? { border: "1px solid darkorange", backgroundColor: "#FFE5B4" } : {}} ><FaBed className='mb-1 fs-5 me-2' />Bed</button>
                                <button className='btn btn-light btn-flatimg border' onClick={() => handleflatpg("fridge")}
                                    style={clickedflatpg.fridge ? { border: "1px solid darkorange", backgroundColor: "#FFE5B4" } : {}} ><img src={fridge} alt="img" className='h-100 mb-1' />Fridge</button>
                                <button className='btn btn-light border' onClick={() => handleflatpg("ac")}
                                    style={clickedflatpg.ac ? { border: "1px solid darkorange", backgroundColor: "#FFE5B4" } : {}} ><img src={aircond} alt="img" className='flat-img' />AC</button>
                                <button className='btn btn-light border d-flex justify-content-center align-items-center' onClick={() => handleflatpg("cupboard")}
                                    style={clickedflatpg.cupboard ? { border: "1px solid darkorange", backgroundColor: "#FFE5B4" } : {}} ><img src={cupboard} alt="img" className='flat-img' />Cupboard</button>
                                <button className='btn btn-light border d-flex justify-content-center align-items-center' onClick={() => handleflatpg("geyser")}
                                    style={clickedflatpg.geyser ? { border: "1px solid darkorange", backgroundColor: "#FFE5B4" } : {}} ><img src={geyser} alt="img" className='flat-img' />Geyser</button>
                                <button className='btn btn-light border d-flex justify-content-center align-items-center' onClick={() => handleflatpg("tv")}
                                    style={clickedflatpg.tv ? { border: "1px solid darkorange", backgroundColor: "#FFE5B4" } : {}} ><img src={tv} alt="img" className='flat-img' />TV</button>
                            </div>
                        </div>
                        <div className='mt-3'>
                            <div className='text-secondary'>Society Amenities</div>
                            <div className='d-flex flex-wrap flat-ament justify-content-evenly mt-2'>
                                <button className='btn btn-light border' onClick={() => handlesocpg("lift")}
                                    style={clickedsocpg.lift ? { border: "1px solid darkorange", backgroundColor: "#FFE5B4" } : {}} ><GiElevator className='mb-1 fs-5 me-2' />Lift</button>
                                <button className='btn btn-light border' onClick={() => handlesocpg("cctv")}
                                    style={clickedsocpg.cctv ? { border: "1px solid darkorange", backgroundColor: "#FFE5B4" } : {}} ><BiCctv className='mb-1 fs-5 me-2' />CCTV</button>
                                <button className='btn btn-light border d-flex justify-content-center align-items-center' onClick={() => handlesocpg("karea")}
                                    style={clickedsocpg.karea ? { border: "1px solid darkorange", backgroundColor: "#FFE5B4" } : {}} ><img src={kidsarea} alt="img" className='flat-img' /><label>Kides Area</label></button>
                                <button className='btn btn-light border d-flex justify-content-center align-items-center' onClick={() => handlesocpg("garden")}
                                    style={clickedsocpg.garden ? { border: "1px solid darkorange", backgroundColor: "#FFE5B4" } : {}} ><img src={garden} alt="img" className='flat-img' /><label>Garden</label></button>
                                <button className='btn btn-light border' onClick={() => handlesocpg("gym")}
                                    style={clickedsocpg.gym ? { border: "1px solid darkorange", backgroundColor: "#FFE5B4" } : {}} ><img src={gym} alt="img" className='flat-img' /><label>Gym</label></button>
                                <button className='btn btn-light border d-flex justify-content-center align-items-center' onClick={() => handlesocpg("swim")}
                                    style={clickedsocpg.swim ? { border: "1px solid darkorange", backgroundColor: "#FFE5B4" } : {}} ><img src={swim} alt="img" className='flat-img' /><label>Swimming Pool</label></button>
                                <button className='btn btn-light border d-flex justify-content-center align-items-center' onClick={() => handlesocpg("water")}
                                    style={clickedsocpg.water ? { border: "1px solid darkorange", backgroundColor: "#FFE5B4" } : {}} ><img src={water} alt="img" className='flat-img' /><label>Regular Water Supply</label></button>
                            </div>
                        </div>
                    </div>
                    <div className="mt-5">
                        <div><h5>Photos Property</h5></div>
                        <div>
                            <div>
                                <label for="formFileMultiplepg" class="form-label photo-btn text-white fw-bold text-center mt-2 p-2 w-100" htmlFor='formFileMultiplepg'>Add Photos Now</label>
                                <input className="form-control" type="file" id="formFileMultiplepg" multiple style={{ display: 'none' }}
                                    onChange={handleFileChangepg} />
                            </div>
                            <div className="image-preview-container d-flex flex-wrap">
                                {imagespg.map((src, index) => (
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

export default PG2