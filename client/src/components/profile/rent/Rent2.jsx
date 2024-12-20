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
import "./Rent.css";

const Rent2 = () => {

    const [Beedroomrent, setBeedroomrent] = useState('');
    const [Balconiesrent, setBalconiesrent] = useState('');
    const [Bathroomrent, setBathroomrent] = useState('');
    const [Floornorent, setFloornorent] = useState('');
    const [Totalfloorrent, setTotalfloorrent] = useState('');
    const [Ageproprent, setAgeproprent] = useState('');
    const [clickedrentperson, setClickedrentperson] = useState({
        family: false,
        men: false,
        women: false,
    });
    const [Duration, setDuration] = useState('select');
    const [clickedflatrent, setClickedflatrent] = useState({
        wash: false,
        sofa: false,
        fridge: false,
        ac: false,
        bed: false,
        cupboard: false,
        geyser: false,
        tv: false,
    });
    const [clickedsocrent, setClickedsocrent] = useState({
        lift: false,
        cctv: false,
        garden: false,
        gym: false,
        karea: false,
        swim: false,
        water: false,
    });
    const [imagesrent, setImagesrent] = useState([]); // State to store image previews
    
    const handleFileChangerent = (event) => {
        const files = Array.from(event.target.files); // Convert FileList to an array
        const previewImages = files.map((file) => URL.createObjectURL(file)); // Create object URLs for preview
        setImagesrent(previewImages); // Update state with image previews
    };

    const bedroomoptionsrent = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const balconiesoptionsrent = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const Bathroomoptionsrent = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const Floornooptionsrent = [];
    const Totalflooroptionsrent = [];
    const Agepropoptionsrent = ['10+'];
    const Durationoptions = ['0 month', '1 month'];
    for (let i = 0; i <= 80; i++) {
        Floornooptionsrent.push(i);
        Totalflooroptionsrent.push(i);
    }
    for (let i = 9; i >= 1; i--) {
        Agepropoptionsrent.unshift(i);
    }
    for (let i = 2; i <= 36; i++) {
        Durationoptions.push(`${i} months`);
    }
    const handlerentperson = (buttonKey) => {
        setClickedrentperson((prevState) => ({
            ...prevState,
            [buttonKey]: !prevState[buttonKey], // Toggle the clicked button's style
        }));
    }
    const changeduardrop = (value) => {
        setDuration(value);
    }
    const handleflatrent = (buttonKey) => {
        setClickedflatrent((prevState) => ({
            ...prevState,
            [buttonKey]: !prevState[buttonKey], // Toggle the clicked button's style
        }));
    };
    const handlesocrent = (buttonKey) => {
        setClickedsocrent((prevState) => ({
            ...prevState,
            [buttonKey]: !prevState[buttonKey], // Toggle the clicked button's style
        }));
    };

    return (
        <div className="parent-cont" style={{ backgroundColor: "#FFF5EE" }}>
            <Profilenav select="Rent" />
            <div className='container main-box w-50'>
                <div className='main2-box bg-white p-4'>
                    <div className='sell-head'><h3>Rent Property</h3></div>
                    <div className='mt-4'>
                        <div><h5>Property Features</h5></div>
                        <div className='mt-2 d-flex justify-content-around'>
                            <div>
                                <Selldrop
                                    label="Bedroom"
                                    options={bedroomoptionsrent}
                                    value={Beedroomrent}
                                    onChange={setBeedroomrent}
                                />
                            </div>
                            <div>
                                <Selldrop
                                    label="Balconies"
                                    options={balconiesoptionsrent}
                                    value={Balconiesrent}
                                    onChange={setBalconiesrent}
                                />
                            </div>
                        </div>
                        <div className='mt-3 d-flex justify-content-around'>
                            <div>
                                <Selldrop
                                    label="Bathroom"
                                    options={Bathroomoptionsrent}
                                    value={Bathroomrent}
                                    onChange={setBathroomrent}
                                />
                            </div>
                            <div>
                                <Selldrop
                                    label="Age of Property"
                                    options={Agepropoptionsrent}
                                    value={Ageproprent}
                                    onChange={setAgeproprent}
                                />
                            </div>
                        </div>
                        <div className='mt-3 d-flex justify-content-around'>
                            <div>
                                <Selldrop
                                    label="Total Floor"
                                    options={Totalflooroptionsrent}
                                    value={Totalfloorrent}
                                    onChange={setTotalfloorrent}
                                />
                            </div>
                            <div>
                                <Selldrop
                                    label="Floor no"
                                    options={Floornooptionsrent}
                                    value={Floornorent}
                                    onChange={setFloornorent}
                                />
                            </div>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <div><h5>Willing to Rent out to</h5></div>
                        <div>
                            <button className='btn btn-light border' onClick={() => handlerentperson("family")}
                                style={clickedrentperson.family ? { border: "1px solid darkorange", backgroundColor: "#FFE5B4" } : {}} >Family</button>
                            <button className='btn btn-light border ms-3' onClick={() => handlerentperson("men")}
                                style={clickedrentperson.men ? { border: "1px solid darkorange", backgroundColor: "#FFE5B4" } : {}}>Single Men</button>
                            <button className='btn btn-light border ms-3' onClick={() => handlerentperson("women")}
                                style={clickedrentperson.women ? { border: "1px solid darkorange", backgroundColor: "#FFE5B4" } : {}} >Single Women</button>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <div><h5>Duration of Agreement</h5></div>
                        <div class="dropdown d-flex rent-drop">
                            <button class="btn btn-secondary dropdown-toggle bg-white text-dark d-flex justify-content-between align-items-center" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <span>{Duration}</span>
                                <span className="dropdown-arrow"></span>
                            </button>
                            <ul class="dropdown-menu rent-drop-menu">
                                {Durationoptions.map((option, index) => (
                                    <li key={index}>
                                        <a class="dropdown-item" onClick={() => changeduardrop(option)} href="#">{option}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <div><h5>Add Amenities</h5></div>
                        <div>
                            <div className='text-secondary'>Flat Furnishing</div>
                            <div className='d-flex flex-wrap justify-content-evenly flat-ament mt-2'>
                                <button className='btn btn-light border' onClick={() => handleflatrent("wash")}
                                    style={clickedflatrent.wash ? { border: "1px solid darkorange", backgroundColor: "#FFE5B4" } : {}} ><GiWashingMachine className='mb-1 fs-5 me-2' />Washing Machine</button>
                                <button className='btn btn-light border' onClick={() => handleflatrent("sofa")}
                                    style={clickedflatrent.sofa ? { border: "1px solid darkorange", backgroundColor: "#FFE5B4" } : {}} ><GiSofa className='mb-1 fs-5 me-2' />Sofa</button>
                                <button className='btn btn-light border' onClick={() => handleflatrent("bed")}
                                    style={clickedflatrent.bed ? { border: "1px solid darkorange", backgroundColor: "#FFE5B4" } : {}} ><FaBed className='mb-1 fs-5 me-2' />Bed</button>
                                <button className='btn btn-light btn-flatimg border' onClick={() => handleflatrent("fridge")}
                                    style={clickedflatrent.fridge ? { border: "1px solid darkorange", backgroundColor: "#FFE5B4" } : {}} ><img src={fridge} alt="img" className='h-100 mb-1' />Fridge</button>
                                <button className='btn btn-light border' onClick={() => handleflatrent("ac")}
                                    style={clickedflatrent.ac ? { border: "1px solid darkorange", backgroundColor: "#FFE5B4" } : {}} ><img src={aircond} alt="img" className='flat-img' />AC</button>
                                <button className='btn btn-light border d-flex justify-content-center align-items-center' onClick={() => handleflatrent("cupboard")}
                                    style={clickedflatrent.cupboard ? { border: "1px solid darkorange", backgroundColor: "#FFE5B4" } : {}} ><img src={cupboard} alt="img" className='flat-img' />Cupboard</button>
                                <button className='btn btn-light border d-flex justify-content-center align-items-center' onClick={() => handleflatrent("geyser")}
                                    style={clickedflatrent.geyser ? { border: "1px solid darkorange", backgroundColor: "#FFE5B4" } : {}} ><img src={geyser} alt="img" className='flat-img' />Geyser</button>
                                <button className='btn btn-light border d-flex justify-content-center align-items-center' onClick={() => handleflatrent("tv")}
                                    style={clickedflatrent.tv ? { border: "1px solid darkorange", backgroundColor: "#FFE5B4" } : {}} ><img src={tv} alt="img" className='flat-img' />TV</button>
                            </div>
                        </div>
                        <div className='mt-3'>
                            <div className='text-secondary'>Society Amenities</div>
                            <div className='d-flex flex-wrap flat-ament justify-content-evenly mt-2'>
                                <button className='btn btn-light border' onClick={() => handlesocrent("lift")}
                                    style={clickedsocrent.lift ? { border: "1px solid darkorange", backgroundColor: "#FFE5B4" } : {}} ><GiElevator className='mb-1 fs-5 me-2' />Lift</button>
                                <button className='btn btn-light border' onClick={() => handlesocrent("cctv")}
                                    style={clickedsocrent.cctv ? { border: "1px solid darkorange", backgroundColor: "#FFE5B4" } : {}} ><BiCctv className='mb-1 fs-5 me-2' />CCTV</button>
                                <button className='btn btn-light border d-flex justify-content-center align-items-center' onClick={() => handlesocrent("karea")}
                                    style={clickedsocrent.karea ? { border: "1px solid darkorange", backgroundColor: "#FFE5B4" } : {}} ><img src={kidsarea} alt="img" className='flat-img' /><label>Kides Area</label></button>
                                <button className='btn btn-light border d-flex justify-content-center align-items-center' onClick={() => handlesocrent("garden")}
                                    style={clickedsocrent.garden ? { border: "1px solid darkorange", backgroundColor: "#FFE5B4" } : {}} ><img src={garden} alt="img" className='flat-img' /><label>Garden</label></button>
                                <button className='btn btn-light border' onClick={() => handlesoc("gym")}
                                    style={clickedsocrent.gym ? { border: "1px solid darkorange", backgroundColor: "#FFE5B4" } : {}} ><img src={gym} alt="img" className='flat-img' /><label>Gym</label></button>
                                <button className='btn btn-light border d-flex justify-content-center align-items-center' onClick={() => handlesocrent("swim")}
                                    style={clickedsocrent.swim ? { border: "1px solid darkorange", backgroundColor: "#FFE5B4" } : {}} ><img src={swim} alt="img" className='flat-img' /><label>Swimming Pool</label></button>
                                <button className='btn btn-light border d-flex justify-content-center align-items-center' onClick={() => handlesocrent("water")}
                                    style={clickedsocrent.water ? { border: "1px solid darkorange", backgroundColor: "#FFE5B4" } : {}} ><img src={water} alt="img" className='flat-img' /><label>Regular Water Supply</label></button>
                            </div>
                        </div>
                    </div>
                    <div className="mt-5">
                        <div><h5>Photos Property</h5></div>
                        <div>
                            <div>
                                <label for="formFileMultiplerent" class="form-label photo-btn text-white fw-bold text-center mt-2 p-2 w-100" htmlFor='formFileMultiplerent'>Add Photos Now</label>
                                <input className="form-control" type="file" id="formFileMultiplerent" multiple style={{ display: 'none' }} 
                                onChange={handleFileChangerent} />
                            </div>
                            <div className="image-preview-container d-flex flex-wrap">
                                {imagesrent.map((src, index) => (
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

export default Rent2