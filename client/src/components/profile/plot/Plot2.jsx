import React, { useState } from 'react'
import Profilenav from '../../profilenav/Profilenav';
import water from "../../../assets/water.png";
import storage from "../../../assets/storage.png";
import rain from "../../../assets/rain.png";
import electric from "../../../assets/electric.png";
import vastu from "../../../assets/vastu.png";
import gym from "../../../assets/gym.png";
import park from "../../../assets/garden.png";
import pool from "../../../assets/swim.png";
import { FaRoad } from "react-icons/fa";
import { MdOutlineSportsCricket } from "react-icons/md";

const Plot2 = () => {

    const [clickedamenity, setClickedamenity] = useState({
        store: false,
        water: false,
        rain: false,
        electric: false,
        vastu: false,
    });
    const [clickedover, setClickedover] = useState({
        pool: false,
        park: false,
        club: false,
        gym: false,
        road: false,
    });
    const [imagesplot, setImagesplot] = useState([]); // State to store image previews

    const handleFileChangeplot = (event) => {
        const files = Array.from(event.target.files); // Convert FileList to an array
        const previewImages = files.map((file) => URL.createObjectURL(file)); // Create object URLs for preview
        setImagesplot(previewImages); // Update state with image previews
    };
    const handleamenity = (buttonKey) => {
        setClickedamenity((prevState) => ({
            ...prevState,
            [buttonKey]: !prevState[buttonKey], // Toggle the clicked button's style
        }));
    };
    const handleover = (buttonKey) => {
        setClickedover((prevState) => ({
            ...prevState,
            [buttonKey]: !prevState[buttonKey], // Toggle the clicked button's style
        }));
    };

    return (
        <div className="parent-cont" style={{ backgroundColor: "#FFF5EE" }}>
            <Profilenav select="Plot/Land" />
            <div className='container main-box w-50'>
                <div className='main2-box bg-white p-4'>
                    <div className='sell-head'><h3>Sell Of Plot/Land Property</h3></div>
                    <div className='mt-4'>
                        <div><h5>Add Amenities</h5></div>
                        <div>
                            <div className='text-secondary'>Amenities</div>
                            <div className='d-flex flex-wrap justify-content-start flat-ament mt-2'>
                                <button className='btn btn-light border' onClick={() => handleamenity("store")}
                                    style={clickedamenity.store ? { border: "1px solid darkorange", backgroundColor: "#FFE5B4" } : {}} ><img src={storage} alt="img" className='flat-img' />Water Storage</button>
                                <button className='btn btn-light border' onClick={() => handleamenity("water")}
                                    style={clickedamenity.water ? { border: "1px solid darkorange", backgroundColor: "#FFE5B4" } : {}} ><img src={water} alt="img" className='flat-img' />Water Supply</button>
                                <button className='btn btn-light border' onClick={() => handleamenity("vastu")}
                                    style={clickedamenity.vastu ? { border: "1px solid darkorange", backgroundColor: "#FFE5B4" } : {}} ><img src={vastu} alt="img" className='flat-img' />Vastu Compliant</button>
                                <button className='btn btn-light border' onClick={() => handleamenity("rain")}
                                    style={clickedamenity.rain ? { border: "1px solid darkorange", backgroundColor: "#FFE5B4" } : {}} ><img src={rain} alt="img" className='flat-img' />Rain Water Harvesting</button>
                                <button className='btn btn-light btn-flatimg border' onClick={() => handleamenity("electric")}
                                    style={clickedamenity.electric ? { border: "1px solid darkorange", backgroundColor: "#FFE5B4" } : {}} ><img src={electric} alt="img" className='flat-img' />Electricity Supply</button>
                            </div>
                        </div>
                        <div className='mt-3'>
                            <div className='text-secondary'>Overlooking</div>
                            <div className='d-flex flex-wrap flat-ament justify-content-start mt-2'>
                                <button className='btn btn-light border d-flex justify-content-center align-items-center' onClick={() => handleover("pool")}
                                    style={clickedover.pool ? { border: "1px solid darkorange", backgroundColor: "#FFE5B4" } : {}} ><img src={pool} alt="img" className='flat-img' /><label>Pool</label></button>
                                <button className='btn btn-light border d-flex justify-content-center align-items-center' onClick={() => handleover("park")}
                                    style={clickedover.park ? { border: "1px solid darkorange", backgroundColor: "#FFE5B4" } : {}} ><img src={park} alt="img" className='flat-img' /><label>Park/Garden</label></button>
                                <button className='btn btn-light border d-flex justify-content-center align-items-center' onClick={() => handleover("gym")}
                                    style={clickedover.gym ? { border: "1px solid darkorange", backgroundColor: "#FFE5B4" } : {}} ><img src={gym} alt="img" className='flat-img' /><label>Gym</label></button>
                                <button className='btn btn-light border d-flex justify-content-center align-items-center' onClick={() => handleover("road")}
                                    style={clickedover.road ? { border: "1px solid darkorange", backgroundColor: "#FFE5B4" } : {}} ><FaRoad className='fs-5 me-2 mt-1' /><label>Main Road</label></button>
                                <button className='btn btn-light border d-flex justify-content-center align-items-center' onClick={() => handleover("club")}
                                    style={clickedover.club ? { border: "1px solid darkorange", backgroundColor: "#FFE5B4" } : {}} ><MdOutlineSportsCricket className='fs-5 me-2' /><label>Club</label></button>
                            </div>
                        </div>
                        <div className="mt-5">
                            <div><h5>Photos Property</h5></div>
                            <div>
                                <div>
                                    <label for="formFileMultipleplot" class="form-label photo-btn text-white fw-bold text-center mt-2 p-2 w-100" htmlFor='formFileMultipleplot'>Add Photos Now</label>
                                    <input className="form-control" type="file" id="formFileMultipleplot" multiple style={{ display: 'none' }}
                                        onChange={handleFileChangeplot} />
                                </div>
                                <div className="image-preview-container d-flex flex-wrap">
                                    {imagesplot.map((src, index) => (
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

export default Plot2