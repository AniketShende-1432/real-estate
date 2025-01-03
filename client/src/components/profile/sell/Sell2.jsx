import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import Profilenav from '../../profilenav/Profilenav';
import Selldrop from './Selldrop';
import axios from "axios";
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
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Sell.css";

const Sell2 = () => {

    const location = useLocation();
    const formData = location.state;
    const [formdata, setformdata] = useState(formData);
    const [images, setImages] = useState([]); // State to store image previews
    const [selectImage, setselectImage] = useState([]);

    const handleFileChange = (event) => {
        const files = Array.from(event.target.files); // Convert FileList to an array
        const previewImages = files.map((file) => URL.createObjectURL(file)); // Create object URLs for preview
        setImages(previewImages); // Update state with image previews
        setselectImage(files);
    };
    const [errors, setErrors] = useState({
        developer:'',
    });
    console.log(errors);
    const bedroomoptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const balconiesoptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const Bathroomoptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const Floornooptions = [];
    const Totalflooroptions = [];
    const Agepropoptions = [];
    for (let i = 0; i <= 80; i++) {
        Floornooptions.push(i);
        Totalflooroptions.push(i);
    }
    for (let i = 20; i >= 0; i--) {
        Agepropoptions.unshift(i);
    }
    const handleflat = (amenity) => {
        // Check if the amenity is already in the array
        setformdata((prevState) => {
            const amenities = [...prevState.amenities];

            // If the amenity is not in the array, add it
            if (!amenities.includes(amenity)) {
                amenities.push(amenity);
            } else {
                // If it's already in the array, remove it (toggle effect)
                const index = amenities.indexOf(amenity);
                amenities.splice(index, 1);
            }

            return { ...prevState, amenities };
        });
    };
    const handlesoc = (amenity) => {
        // Check if the amenity is already in the array
        setformdata((prevState) => {
            const amenities = [...prevState.amenities];

            // If the amenity is not in the array, add it
            if (!amenities.includes(amenity)) {
                amenities.push(amenity);
            } else {
                // If it's already in the array, remove it (toggle effect)
                const index = amenities.indexOf(amenity);
                amenities.splice(index, 1);
            }

            return { ...prevState, amenities };
        });
    };
    const handleFeaturesChange = (field, value) => {
        setformdata((prevState) => ({
            ...prevState,
            features: {
                ...prevState.features,
                [field]: value === '' ? '' : parseInt(value, 10), // Dynamically update the field based on the 'field' argument
            },
        }));
    };
    const handleformdevChange = (e) => {
        setformdata({ ...formdata, developer: e.target.value });
    };
    const handlesocietyAreaInput = (event) => {
        const value = event.target.value;
        setformdata((prevState) => ({
            ...prevState,
            societyArea: value === '' ? '' : parseFloat(value),
        }));
    };
    const changearea = (e, value) => {
        e.preventDefault();
        setformdata((prevState) => ({
            ...prevState,
            societyAreaUnit: value, // Update formData with the selected unit
        }));
    }
    const handlePSubmit = async (e) => {
        e.preventDefault();
        let formErrors={};
        const ranges = {
            bedrooms: { min: 1, max: 10 },
            balconies: { min: 1, max: 10 },
            bathrooms: { min: 1, max: 10 },
            ageOfProperty: { min: 0, max: 100 },
            totalFloors: { min: 1, max: 80 },
            floorNumber: { min: 1, max: 80 },
        };
        const { features } = formdata;
        let count = 0;
        const isValidNumber = (value, field) => {
            const num = parseInt(value, 10);  // 1. Parse the value to an integer
            return !isNaN(num) && num >= ranges[field].min && num <= ranges[field].max;  // 2. Check if it's a valid number within the range
        };
        Object.keys(features).forEach((field) => {
            if (features[field] === '' || features[field] === null || features[field] === undefined) {
                return;
            }
            if (!isValidNumber(features[field], field)) {
                count += 1;
            }
        });
        if (count > 0) {
            toast.error("Please Enter a Valid Number in Property Features");
            return;
        }
        const namepattern = /^[A-Za-z\s]+$/; 
        if (!namepattern.test(formdata.developer)) {
            formErrors.developer = 'Please enter a valid Developer';
        }
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            return; // Stop the form submission if there are errors
        }
        try {
            const userId = sessionStorage.getItem("id");
            const base_url = import.meta.env.VITE_BASE_URL;
            const fdata = { ...formdata, id: userId, type: "sell" };
            const frmData = new FormData();
            for (let [key, value] of Object.entries(fdata)) {
                if (Array.isArray(value)) {
                    // If the value is an array (like amenities or images), append each item
                    value.forEach((item) => frmData.append(key, item));
                } else if (typeof value === "object" && value !== null) {
                    // If the value is an object (like features), append each property of the object
                    for (const [subKey, subValue] of Object.entries(value)) {
                        frmData.append(`${key}[${subKey}]`, subValue);
                    }
                } else {
                    // For other simple data types, append directly
                    frmData.append(key, value);
                }
            }
            selectImage.forEach((image) => frmData.append("images", image))
            if (userId) {
                await axios.post(`${base_url}/api/v2/sellproperty`, frmData)
                    .then((response) => {
                        if (response.data.message === "Error posting property") {
                            toast.error(response.data.message);
                        } else {
                            toast.success(response.data.message);
                            setformdata({
                                price: '', propertyType: '', city: '', locality: '', society: '', bhk: '', furnishedType: '',
                                carpetArea: '', carpetAreaUnit: '', superArea: '', superAreaUnit: '', possessionStatus: '',
                                 developer:'', societyArea:'',societyAreaUnit:'', amenities: [],
                                features: {
                                    bedrooms: '',
                                    bathrooms: '',
                                    balconies: '',
                                    floorNumber: '',
                                    totalFloors: '',
                                    ageOfProperty: '',
                                }
                            });
                        }
                    });
            }
            else {
                toast.error("Please Login First !!");
            }
        } catch (error) {
            toast.error("Something went wrong. Please try again.");
            console.log(error);
        }
    }

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
                                    value={formdata.features.bedrooms}
                                    onChange={(value) => handleFeaturesChange("bedrooms", value)}
                                />
                            </div>
                            <div>
                                <Selldrop
                                    label="Balconies"
                                    options={balconiesoptions}
                                    value={formdata.features.balconies}  // Bind to formData.features.balconies
                                    onChange={(value) => handleFeaturesChange('balconies', value)}  // Pass field name and value
                                />
                            </div>
                        </div>
                        <div className='mt-3 d-flex justify-content-around'>
                            <div>
                                <Selldrop
                                    label="Bathroom"
                                    options={Bathroomoptions}
                                    value={formdata.features.bathrooms}  // Bind to formData.features.bathrooms
                                    onChange={(value) => handleFeaturesChange('bathrooms', value)}
                                />
                            </div>
                            <div>
                                <Selldrop
                                    label="Age of Property"
                                    options={Agepropoptions}
                                    value={formdata.features.ageOfProperty}  // Bind to formData.features.ageOfProperty
                                    onChange={(value) => handleFeaturesChange('ageOfProperty', value)}
                                />
                            </div>
                        </div>
                        <div className='mt-3 d-flex justify-content-around'>
                            <div>
                                <Selldrop
                                    label="Total Floor"
                                    options={Totalflooroptions}
                                    value={formdata.features.totalFloors}  // Bind to formData.features.totalFloors
                                    onChange={(value) => handleFeaturesChange('totalFloors', value)}
                                />
                            </div>
                            <div>
                                <Selldrop
                                    label="Floor no"
                                    options={Floornooptions}
                                    value={formdata.features.floorNumber}  // Bind to formData.features.floorNumber
                                    onChange={(value) => handleFeaturesChange('floorNumber', value)}
                                />
                            </div>
                        </div>
                    </div>
                    <div>
                        <h5 className='mb-0 mt-5'>Developer</h5>
                        <input type="text" className="property-inp p-2 pt-1 w-100" name='developer' id='developer'
                            value={formdata.developer} onChange={handleformdevChange} />
                        {errors.developer && <div className="text-danger error-txt">{errors.developer}</div>}
                    </div>
                    <div>
                        <div className='mt-2 mb-2 mt-4 fs-5 fw-semibold'>Society Occupied Total Area</div>
                        <div className="input-group">
                            <input type="number" className="form-control" aria-label="Text input with dropdown button" step="any"
                                value={formdata.societyArea}
                                onChange={handlesocietyAreaInput} />
                            <button className="btn btn-secondary bg-white text-dark dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"> {formdata.societyAreaUnit || "Select Unit"}</button>
                            <ul className="dropdown-menu dropdown-menu-end">
                                <li><a className="dropdown-item" onClick={(e) => changearea(e, "Sq-ft")} href="#">Sq-ft</a></li>
                                <li><a className="dropdown-item" onClick={(e) => changearea(e, "Sq-yrd")} href="#">Sq-yrd</a></li>
                                <li><a className="dropdown-item" onClick={(e) => changearea(e, "Sq-m")} href="#">Sq-m</a></li>
                                <li><a className="dropdown-item" onClick={(e) => changearea(e, "Acre")} href="#">Acre</a></li>
                                <li><a className="dropdown-item" onClick={(e) => changearea(e, "Bigha")} href="#">Bigha</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <div><h5>Add Amenities</h5></div>
                        <div>
                            <div className='text-secondary'>Flat Furnishing</div>
                            <div className='d-flex flex-wrap justify-content-evenly flat-ament mt-2'>
                                <button className='btn btn-light border' onClick={() => handleflat("Washing Machine")}
                                    style={formdata.amenities.includes("Washing Machine") ? { border: "1px solid darkorange", backgroundColor: "#FFE5B4" } : {}} ><GiWashingMachine className='mb-1 fs-5 me-2' />Washing Machine</button>
                                <button className='btn btn-light border' onClick={() => handleflat("Sofa")}
                                    style={formdata.amenities.includes("Sofa") ? { border: "1px solid darkorange", backgroundColor: "#FFE5B4" } : {}} ><GiSofa className='mb-1 fs-5 me-2' />Sofa</button>
                                <button className='btn btn-light border' onClick={() => handleflat("Bed")}
                                    style={formdata.amenities.includes("Bed") ? { border: "1px solid darkorange", backgroundColor: "#FFE5B4" } : {}} ><FaBed className='mb-1 fs-5 me-2' />Bed</button>
                                <button className='btn btn-light btn-flatimg border' onClick={() => handleflat("Fridge")}
                                    style={formdata.amenities.includes("Fridge") ? { border: "1px solid darkorange", backgroundColor: "#FFE5B4" } : {}} ><img src={fridge} alt="img" className='h-100 mb-1' />Fridge</button>
                                <button className='btn btn-light border' onClick={() => handleflat("AC")}
                                    style={formdata.amenities.includes("AC") ? { border: "1px solid darkorange", backgroundColor: "#FFE5B4" } : {}} ><img src={aircond} alt="img" className='flat-img' />AC</button>
                                <button className='btn btn-light border d-flex justify-content-center align-items-center' onClick={() => handleflat("Cupboard")}
                                    style={formdata.amenities.includes("Cupboard") ? { border: "1px solid darkorange", backgroundColor: "#FFE5B4" } : {}} ><img src={cupboard} alt="img" className='flat-img' />Cupboard</button>
                                <button className='btn btn-light border d-flex justify-content-center align-items-center' onClick={() => handleflat("Geyser")}
                                    style={formdata.amenities.includes("Geyser") ? { border: "1px solid darkorange", backgroundColor: "#FFE5B4" } : {}} ><img src={geyser} alt="img" className='flat-img' />Geyser</button>
                                <button className='btn btn-light border d-flex justify-content-center align-items-center' onClick={() => handleflat("TV")}
                                    style={formdata.amenities.includes("TV") ? { border: "1px solid darkorange", backgroundColor: "#FFE5B4" } : {}} ><img src={tv} alt="img" className='flat-img' />TV</button>
                            </div>
                        </div>
                        <div className='mt-3'>
                            <div className='text-secondary'>Society Amenities</div>
                            <div className='d-flex flex-wrap flat-ament justify-content-evenly mt-2'>
                                <button className='btn btn-light border' onClick={() => handlesoc("Lift")}
                                    style={formdata.amenities.includes("Lift") ? { border: "1px solid darkorange", backgroundColor: "#FFE5B4" } : {}} ><GiElevator className='mb-1 fs-5 me-2' />Lift</button>
                                <button className='btn btn-light border' onClick={() => handlesoc("CCTV")}
                                    style={formdata.amenities.includes("CCTV") ? { border: "1px solid darkorange", backgroundColor: "#FFE5B4" } : {}} ><BiCctv className='mb-1 fs-5 me-2' />CCTV</button>
                                <button className='btn btn-light border d-flex justify-content-center align-items-center' onClick={() => handlesoc("Kides Area")}
                                    style={formdata.amenities.includes("Kides Area") ? { border: "1px solid darkorange", backgroundColor: "#FFE5B4" } : {}} ><img src={kidsarea} alt="img" className='flat-img' /><label>Kides Area</label></button>
                                <button className='btn btn-light border d-flex justify-content-center align-items-center' onClick={() => handlesoc("Garden")}
                                    style={formdata.amenities.includes("Garden") ? { border: "1px solid darkorange", backgroundColor: "#FFE5B4" } : {}} ><img src={garden} alt="img" className='flat-img' /><label>Garden</label></button>
                                <button className='btn btn-light border' onClick={() => handlesoc("Gym")}
                                    style={formdata.amenities.includes("Gym") ? { border: "1px solid darkorange", backgroundColor: "#FFE5B4" } : {}} ><img src={gym} alt="img" className='flat-img' /><label>Gym</label></button>
                                <button className='btn btn-light border d-flex justify-content-center align-items-center' onClick={() => handlesoc("Swimming Pool")}
                                    style={formdata.amenities.includes("Swimming Pool") ? { border: "1px solid darkorange", backgroundColor: "#FFE5B4" } : {}} ><img src={swim} alt="img" className='flat-img' /><label>Swimming Pool</label></button>
                                <button className='btn btn-light border d-flex justify-content-center align-items-center' onClick={() => handlesoc("Regular Water Supply")}
                                    style={formdata.amenities.includes("Regular Water Supply") ? { border: "1px solid darkorange", backgroundColor: "#FFE5B4" } : {}} ><img src={water} alt="img" className='flat-img' /><label>Regular Water Supply</label></button>
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
                    <button className='sell-btn p-2 w-100 text-white fw-bold mt-3' onClick={handlePSubmit}>Submit Property</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}

export default Sell2