import React, { useState } from 'react';
import Profilenav from '../../profilenav/Profilenav';
import { FaRupeeSign } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const Commercial = () => {

  const navigate = useNavigate();
  const [Inputdropcomm, setInputdropcomm] = useState("Select Property type");
  const [Inputcommarea, setInputcommarea] = useState("Sq-ft");
  const [pricecomm, setPricecomm] = useState(""); // State for input value
  const [formattedcommPrice, setFormattedcommPrice] = useState("");
  const [clickedcommowner, setclickedcommowner] = useState({
    free: false,
    lease: false,
    co_operate: false,
    power: false,
  });

  const changedropcomm = (value) => {
    setInputdropcomm(value);
  };
  const changecommarea = (value) => {
    setInputcommarea(value);
  };
  const handlecommowner = (buttonKey) => {
    setclickedcommowner((prevState) => ({
        [buttonKey]: !prevState[buttonKey], // Toggle the clicked button's style
    }));
  };
  const formatcommPrice = (value) => {
    if (!value) return ""; // Handle empty input
    const num = parseFloat(value);

    if (isNaN(num)) return value; // Handle invalid number input

    if (num >= 10000000) {
      return `${(num / 10000000).toFixed(1)} Cr`; // Format as Crore
    } else if (num >= 100000) {
      return `${(num / 100000).toFixed(1)} Lacs`; // Format as Lacs
    } else if (num >= 1000) {
      return `${(num / 1000).toFixed(1)} K`; // Format as Thousand
    } else {
      return num.toString(); // Return as is for smaller values
    }
  };
  const handleInputcommChange = (e) => {
    const value = e.target.value.replace(/[^\d]/g, ""); // Allow only numbers
    setPricecomm(value);
    setFormattedcommPrice(formatcommPrice(value));
  };
  const handlecommpage =()=>{
    navigate('/profile/commercial-property');
}

  return (
    <div className="rent-cont" style={{ backgroundColor: "#FFF5EE" }}>
      <Profilenav select="Commercial" />
      <div className='container rent-main-box w-50'>
        <div className='rent-main2-box bg-white p-4'>
          <div className='rent-head'><h3>Commercial Property</h3></div>
          <div className='mt-4'>
            <div className='mb-2'>Property Type</div>
            <div class="dropdown d-flex rent-drop">
              <button class="btn btn-secondary dropdown-toggle bg-white text-dark d-flex justify-content-between align-items-center" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                <span>{Inputdropcomm}</span>
                <span className="dropdown-arrow"></span>
              </button>
              <ul class="dropdown-menu rent-drop-menu">
                <li><a class="dropdown-item" onClick={() => changedropcomm("Office")} href="#">Office</a></li>
                <li><a class="dropdown-item" onClick={() => changedropcomm("Shop")} href="#">Shop</a></li>
                <li><a class="dropdown-item" onClick={() => changedropcomm("Retail")} href="#">Retail</a></li>
                <li><a class="dropdown-item" onClick={() => changedropcomm("Godam")} href="#">Godown</a></li>
                <li><a class="dropdown-item" onClick={() => changedropcomm("Industry")} href="#">Industry</a></li>
              </ul>
            </div>
          </div>
          <div className='mt-5'>
            <div><h5>Property Location</h5></div>
            <div>
              <div>City</div>
              <input type="text" className="rent-property-inp p-2 pt-1 w-100" name='pcity' id='city' />
              <div className='mt-3'>Locality</div>
              <input type="text" className="rent-property-inp p-2 pt-1 w-100" name='locality' id='plocality' />
              <div className='mt-3'>Name of Building/Project</div>
              <input type="text" className="rent-property-inp p-2 pt-1 w-100" name='building' id='cproject' />
            </div>
          </div>
          <div className='mt-5'>
            <div><h5>Possession Status</h5></div>
            <div className='d-flex'>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="constructcomm" />
                <label className="form-check-label" for="constructcomm">
                  Under Construction
                </label>
              </div>
              <div className="form-check ms-4">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="readyn" />
                <label className="form-check-label" for="readyn">
                  Ready to Move New
                </label>
              </div>
              <div className="form-check ms-4">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="resell2" />
                <label className="form-check-label" for="resell2">
                  Resell
                </label>
              </div>
            </div>
          </div>
          <div className='mt-5'>
            <div><h5>Area</h5></div>
            <div className='mt-2 mb-2'>Carpet Area</div>
            <div className="input-group mb-3">
              <input type="text" className="form-control" aria-label="Text input with dropdown button" />
              <button className="btn btn-secondary bg-white text-dark dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">{Inputcommarea}</button>
              <ul className="dropdown-menu dropdown-menu-end">
                <li><a className="dropdown-item" onClick={() => changecommarea("Sq-ft")} href="#">Sq-ft</a></li>
                <li><a className="dropdown-item" onClick={() => changecommarea("Sq-yrd")} href="#">Sq-yrd</a></li>
                <li><a className="dropdown-item" onClick={() => changecommarea("Sq-m")} href="#">Sq-m</a></li>
                <li><a className="dropdown-item" onClick={() => changecommarea("Acre")} href="#">Acre</a></li>
                <li><a className="dropdown-item" onClick={() => changecommarea("Bigha")} href="#">Bigha</a></li>
              </ul>
            </div>
          </div>
          <div className='mt-4'>
            <div><h5>Ownership</h5></div>
            <div className='d-flex'>
              <button className='btn btn-light border' onClick={() => handlecommowner("free")}
                style={clickedcommowner.free ? { border: "1px solid darkorange", backgroundColor: "#FFE5B4" } : {}} >Freehold</button>
              <button className='btn btn-light border ms-3' onClick={() => handlecommowner("lease")}
                style={clickedcommowner.lease ? { border: "1px solid darkorange", backgroundColor: "#FFE5B4" } : {}}>Leasehold</button>
              <button className='btn btn-light border ms-3' onClick={() => handlecommowner("co_operate")}
                style={clickedcommowner.co_operate ? { border: "1px solid darkorange", backgroundColor: "#FFE5B4" } : {}} >Co-operative Society</button>
              <button className='btn btn-light border ms-3' onClick={() => handlecommowner("power")}
                style={clickedcommowner.power ? { border: "1px solid darkorange", backgroundColor: "#FFE5B4" } : {}}>Power of Attorney</button>
            </div>
          </div>
          <div className="mt-4">
            <div><h5>Price Details</h5></div>
            <div>
              <div>Cost</div>
              <div className='d-flex'>
                <FaRupeeSign className='rupee-icon' /><input type="text" className='property-inp p-2 w-100' name='plotprice' value={pricecomm}
                  onChange={handleInputcommChange} id='price' />
              </div>
            </div>
            <span className='fw-bold ms-3 price-format'>{formattedcommPrice}</span>
          </div>
          <button className='sell-btn p-2 w-100 text-white fw-bold mt-3' onClick={handlecommpage}>Post Property</button>
        </div>
      </div>
    </div>
  )
}

export default Commercial