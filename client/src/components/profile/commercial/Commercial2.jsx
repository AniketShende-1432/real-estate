import React, { useState } from 'react'
import Profilenav from '../../profilenav/Profilenav';
import Selldrop from '../sell/Selldrop';
import { GiElevator } from "react-icons/gi";
import water from "../../../assets/storage.png";
import rain from "../../../assets/rain.png";
import vastu from "../../../assets/vastu.png";
import waste from "../../../assets/waste.png";
import { BiCctv } from "react-icons/bi";
import { FaShoppingCart } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa";
import { GiPowerGenerator } from "react-icons/gi";
import { FaRoad } from "react-icons/fa";

const Commercial2 = () => {

    const [Bathroomcomm, setBathroomcomm] = useState('');
    const [Floornocomm, setFloornocomm] = useState('');
    const [Totalfloorcomm, setTotalfloorcomm] = useState('');
    const [Agepropcomm, setAgepropcomm] = useState('');
    const [clickedamenitycomm, setClickedamenitycomm] = useState({
        lift: false,
        water: false,
        electric: false,
        vastu: false,
    });
    const [clickedcomm, setClickedcomm] = useState({
        shop: false,
        cctv: false,
        grade: false,
        power: false,
        road: false,
    });
     const [imagescomm, setImagescomm] = useState([]); // State to store image previews

    const Bathroomoptionscomm = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const Floornooptionscomm = [];
    const Totalflooroptionscomm = [];
    const Agepropoptionscomm = ['10+'];
    for (let i = 0; i <= 80; i++) {
        Floornooptionscomm.push(i);
        Totalflooroptionscomm.push(i);
    }
    for (let i = 9; i >= 1; i--) {
        Agepropoptionscomm.unshift(i);
    }
    const handleamenitycomm = (buttonKey) => {
        setClickedamenitycomm((prevState) => ({
            ...prevState,
            [buttonKey]: !prevState[buttonKey], // Toggle the clicked button's style
        }));
    };
    const handlecomm = (buttonKey) => {
        setClickedcomm((prevState) => ({
            ...prevState,
            [buttonKey]: !prevState[buttonKey], // Toggle the clicked button's style
        }));
    };
    const handleFileChangecomm = (event) => {
        const files = Array.from(event.target.files); // Convert FileList to an array
        const previewImages = files.map((file) => URL.createObjectURL(file)); // Create object URLs for preview
        setImagescomm(previewImages); // Update state with image previews
    };
    
    return (
        <div className="rent-cont" style={{ backgroundColor: "#FFF5EE" }}>
            <Profilenav select="Commercial" />
            <div className='container rent-main-box w-50'>
                <div className='rent-main2-box bg-white p-4'>
                    <div className='rent-head'><h3>Commercial Property</h3></div>
                    <div className='mt-4'>
                        <div><h5>Property Features</h5></div>
                        <div className='mt-3 d-flex justify-content-around'>
                            <div>
                                <Selldrop
                                    label="Washroom"
                                    options={Bathroomoptionscomm}
                                    value={Bathroomcomm}
                                    onChange={setBathroomcomm}
                                />
                            </div>
                            <div>
                                <Selldrop
                                    label="Age of Property"
                                    options={Agepropoptionscomm}
                                    value={Agepropcomm}
                                    onChange={setAgepropcomm}
                                />
                            </div>
                        </div>
                        <div className='mt-3 d-flex justify-content-around'>
                            <div>
                                <Selldrop
                                    label="Total Floor"
                                    options={Totalflooroptionscomm}
                                    value={Totalfloorcomm}
                                    onChange={setTotalfloorcomm}
                                />
                            </div>
                            <div>
                                <Selldrop
                                    label="Floor no/ Room no"
                                    options={Floornooptionscomm}
                                    value={Floornocomm}
                                    onChange={setFloornocomm}
                                />
                            </div>
                        </div>
                    </div>
                    <div className='mt-4'>
                        <div><h5>Add Amenities</h5></div>
                        <div>
                            <div className='text-secondary'>Amenities</div>
                            <div className='d-flex flex-wrap justify-content-start flat-ament mt-2'>
                                <button className='btn btn-light btn-flatimg border' onClick={() => handleamenitycomm("electric")}
                                    style={clickedamenitycomm.electric ? { border: "1px solid darkorange", backgroundColor: "#FFE5B4" } : {}} ><img src={rain} alt="img" className='flat-img' />Rain Water Harvesting</button>
                                <button className='btn btn-light border d-flex justify-content-center align-items-center' onClick={() => handleamenitycomm("water")}
                                    style={clickedamenitycomm.water ? { border: "1px solid darkorange", backgroundColor: "#FFE5B4" } : {}} ><img src={water} alt="img" className='flat-img' />Water Storage</button>
                                <button className='btn btn-light border' onClick={() => handleamenitycomm("lift")}
                                    style={clickedamenitycomm.lift ? { border: "1px solid darkorange", backgroundColor: "#FFE5B4" } : {}} ><GiElevator className='mb-1 fs-5 me-2' />Lift</button>
                                <button className='btn btn-light border d-flex justify-content-center align-items-center' onClick={() => handleamenitycomm("vastu")}
                                    style={clickedamenitycomm.vastu ? { border: "1px solid darkorange", backgroundColor: "#FFE5B4" } : {}} ><img src={waste} alt="img" className='flat-img' />Waste Disposal</button>
                                <button className='btn btn-light border' onClick={() => handleamenitycomm("vastu")}
                                    style={clickedamenitycomm.vastu ? { border: "1px solid darkorange", backgroundColor: "#FFE5B4" } : {}} ><img src={vastu} alt="img" className='flat-img' />Vaastu Compliant</button>
                            </div>
                        </div>
                        <div className='mt-3'>
                            <div className='text-secondary'>Building/Society Feature</div>
                            <div className='d-flex flex-wrap flat-ament justify-content-start mt-2'>
                                <button className='btn btn-light border d-flex justify-content-center align-items-center' onClick={() => handlecomm("shop")}
                                    style={clickedcomm.shop ? { border: "1px solid darkorange", backgroundColor: "#FFE5B4" } : {}} ><FaShoppingCart className='fs-5 me-2' /><label>Shooping Centre</label></button>
                                <button className='btn btn-light border d-flex justify-content-center align-items-center' onClick={() => handlecomm("grade")}
                                    style={clickedcomm.grade ? { border: "1px solid darkorange", backgroundColor: "#FFE5B4" } : {}} ><FaBuilding className='fs-5 me-2'/><label>Grade A Building</label></button>
                                <button className='btn btn-light border d-flex justify-content-center align-items-center' onClick={() => handlecomm("power")}
                                    style={clickedcomm.power ? { border: "1px solid darkorange", backgroundColor: "#FFE5B4" } : {}} ><GiPowerGenerator className='fs-5 me-2' /><label>Power Backup</label></button>
                                <button className='btn btn-light border d-flex justify-content-center align-items-center' onClick={() => handlecomm("road")}
                                    style={clickedcomm.road ? { border: "1px solid darkorange", backgroundColor: "#FFE5B4" } : {}} ><FaRoad className='fs-5 me-2 mt-1' /><label>Main Road</label></button>
                                <button className='btn btn-light border d-flex justify-content-center align-items-center' onClick={() => handlecomm("cctv")}
                                    style={clickedcomm.cctv ? { border: "1px solid darkorange", backgroundColor: "#FFE5B4" } : {}} ><BiCctv className='fs-5 me-2' /><label>CCTV</label></button>
                            </div>
                        </div>
                        <div className="mt-5">
                            <div><h5>Photos Property</h5></div>
                            <div>
                                <div>
                                    <label for="formFileMultiplecomm" class="form-label photo-btn text-white fw-bold text-center mt-2 p-2 w-100" htmlFor='formFileMultiplecomm'>Add Photos Now</label>
                                    <input className="form-control" type="file" id="formFileMultiplecomm" multiple style={{ display: 'none' }}
                                        onChange={handleFileChangecomm} />
                                </div>
                                <div className="image-preview-container d-flex flex-wrap">
                                    {imagescomm.map((src, index) => (
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
        </div>
    )
}

export default Commercial2