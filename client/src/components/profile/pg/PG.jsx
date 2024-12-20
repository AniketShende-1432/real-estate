import React, { useState } from 'react';
import Profilenav from '../../profilenav/Profilenav';
import DatePicker from 'react-datepicker';
import { FaRupeeSign } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const PG = () => {

  const navigate = useNavigate();
  const [Inputpg, setInputpg] = useState("Select Property type");
  const [clickedpgtype, setClickedpgtype] = useState({
    share: false,
    prv: false,
  });
  const [Inputpgarea, setInputpgarea] = useState("Sq-ft");
  const [clickedpgfurni, setClickedpgfurni] = useState({
    furni1: false,
    furni2: false,
    furni3: false,
  });
  const [selectedDate, setSelectedDate] = useState(null);
  const [clickedpgfor, setClickedpgfor] = useState({
    girl: false,
    boy: false,
    any: false,
  });
  const [pgprice, setpgPrice] = useState(""); // State for input value
  const [formattedpgPrice, setFormattedpgPrice] = useState("");
  const [pgdepprice, setpgdepPrice] = useState("");
  const [depformattedpgPrice, setdepFormattedpgPrice] = useState("");
  const [mDuration, setmDuration] = useState('select');
  const mDurationoptions = ['0 month', '1 month'];

  const changepg = (value) => {
    setInputpg(value);
  };
  const handlepgtype = (buttonKey) => {
    setClickedpgtype((prevState) => ({
      [buttonKey]: !prevState[buttonKey], // Toggle the clicked button's style
    }));
  };
  const changepgarea = (value) => {
    setInputpgarea(value);
  };
  const handlepgfurni = (buttonKey) => {
    setClickedpgfurni((prevState) => ({
      [buttonKey]: !prevState[buttonKey], // Toggle the clicked button's style
    }));
  };
  const handlepgfor = (buttonKey) => {
    setClickedpgfor((prevState) => ({
      [buttonKey]: !prevState[buttonKey], // Toggle the clicked button's style
    }));
  };
  const formatpgPrice = (value) => {
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
  const handleInputpgChange = (e) => {
    const value = e.target.value.replace(/[^\d]/g, ""); // Allow only numbers
    setpgPrice(value);
    setFormattedpgPrice(formatpgPrice(value));
  };
  const handledepInputpgChange = (e) => {
    const value = e.target.value.replace(/[^\d]/g, ""); // Allow only numbers
    setpgdepPrice(value);
    setdepFormattedpgPrice(formatpgPrice(value));
  };
  for (let i = 2; i <= 36; i++) {
    mDurationoptions.push(`${i} months`);
  }
  const changepgduardrop = (value) => {
    setmDuration(value);
  }
  const handlepgpage =()=>{
    navigate('/profile/pg-property');
  }

  return (
    <div className="rent-cont" style={{ backgroundColor: "#FFF5EE" }}>
      <Profilenav select="PG" />
      <div className='container rent-main-box w-50'>
        <div className='rent-main2-box bg-white p-4'>
          <div className='rent-head'><h3>PG Property</h3></div>
          <div className='mt-4'>
            <div className='mb-2'>Property Type</div>
            <div class="dropdown d-flex rent-drop">
              <button class="btn btn-secondary dropdown-toggle bg-white text-dark d-flex justify-content-between align-items-center" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                <span>{Inputpg}</span>
                <span className="dropdown-arrow"></span>
              </button>
              <ul class="dropdown-menu rent-drop-menu">
                <li><a class="dropdown-item" onClick={() => changepg("Select Property type")} href="#">Select Property type</a></li>
                <li><a class="dropdown-item" onClick={() => changepg("Flat")} href="#">Flat</a></li>
                <li><a class="dropdown-item" onClick={() => changepg("Residential House")} href="#">Residential House</a></li>
                <li><a class="dropdown-item" onClick={() => changepg("Villa")} href="#">Villa</a></li>
                <li><a class="dropdown-item" onClick={() => changepg("Penthouse")} href="#">Penthouse</a></li>
                <li><a class="dropdown-item" onClick={() => changepg("Builder Floor Ready")} href="#">Builder Floor Ready to Move</a></li>
              </ul>
            </div>
          </div>
          <div className='mt-5'>
            <div><h5>Property Location</h5></div>
            <div>
              <div>City</div>
              <input type="text" className="rent-property-inp p-2 pt-1 w-100" name='pcity' id='city' />
              <div className='mt-3'>Locality</div>
              <input type="text" className="rent-property-inp p-2 pt-1 w-100" name='pglocality' id='plocality' />
              <div className='mt-3'>Name of Society/Project</div>
              <input type="text" className="rent-property-inp p-2 pt-1 w-100" name='psociety' id='project' />
            </div>
          </div>
          <div className='mt-5'>
            <div><h5>Room Type</h5></div>
            <div className='d-flex'>
              <button className='btn btn-light border' onClick={() => handlepgtype("share")}
                style={clickedpgtype.share ? { border: "1px solid darkorange", backgroundColor: "#FFE5B4" } : {}} >Shared</button>
              <button className='btn btn-light border ms-3' onClick={() => handlepgtype("prv")}
                style={clickedpgtype.prv ? { border: "1px solid darkorange", backgroundColor: "#FFE5B4" } : {}}>Private</button>
            </div>
          </div>
          <div className='mt-5'>
            <div><h5>Capacity (Total No. of Beds)</h5></div>
            <input type="text" className="rent-property-inp p-2 pt-1 w-100" name='bed' id='nobed' />
          </div>
          <div className='mt-5'>
            <div><h5>Area</h5></div>
            <div className='mt-2 mb-2'>Carpet Area</div>
            <div className="input-group mb-3">
              <input type="text" className="form-control" aria-label="Text input with dropdown button" />
              <button className="btn btn-secondary bg-white text-dark dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">{Inputpgarea}</button>
              <ul className="dropdown-menu dropdown-menu-end">
                <li><a className="dropdown-item" onClick={() => changepgarea("Sq-ft")} href="#">Sq-ft</a></li>
                <li><a className="dropdown-item" onClick={() => changepgarea("Sq-yrd")} href="#">Sq-yrd</a></li>
                <li><a className="dropdown-item" onClick={() => changepgarea("Sq-m")} href="#">Sq-m</a></li>
                <li><a className="dropdown-item" onClick={() => changepgarea("Acre")} href="#">Acre</a></li>
                <li><a className="dropdown-item" onClick={() => changepgarea("Bigha")} href="#">Bigha</a></li>
              </ul>
            </div>
          </div>
          <div className='mt-5'>
            <div className='mb-2'><h5>Furnished Type</h5></div>
            <div className='d-flex'>
              <button className='btn btn-light border' onClick={() => handlepgfurni("furni1")}
                style={clickedpgfurni.furni1 ? { border: "1px solid darkorange", backgroundColor: "#FFE5B4" } : {}} >Fully furnished</button>
              <button className='btn btn-light border ms-3' onClick={() => handlepgfurni("furni2")}
                style={clickedpgfurni.furni2 ? { border: "1px solid darkorange", backgroundColor: "#FFE5B4" } : {}}>Semi Furnished</button>
              <button className='btn btn-light border ms-3' onClick={() => handlepgfurni("furni3")}
                style={clickedpgfurni.furni3 ? { border: "1px solid darkorange", backgroundColor: "#FFE5B4" } : {}} >Unfurnished</button>
            </div>
          </div>
          <div className='rent-date-cont mt-4'>
            <div><h5>Available From</h5></div>
            <DatePicker
              id="date"
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)} // Update state with the selected date
              dateFormat="yyyy-MM-dd" // Format shown in the input
              placeholderText="YYYY - MM - DD" // Placeholder text for the input field
              className="form-control rent-date" // Bootstrap input styling
            />
          </div>
          <div className='mt-4'>
            <div><h5>Available For</h5></div>
            <div className='d-flex'>
              <button className='btn btn-light border' onClick={() => handlepgfor("girl")}
                style={clickedpgfor.girl ? { border: "1px solid darkorange", backgroundColor: "#FFE5B4" } : {}} >Girls</button>
              <button className='btn btn-light border ms-3' onClick={() => handlepgfor("boy")}
                style={clickedpgfor.boy ? { border: "1px solid darkorange", backgroundColor: "#FFE5B4" } : {}}>Boys</button>
              <button className='btn btn-light border ms-3' onClick={() => handlepgfor("any")}
                style={clickedpgfor.any ? { border: "1px solid darkorange", backgroundColor: "#FFE5B4" } : {}} >Any</button>
            </div>
          </div>
          <div className="mt-5">
            <div><h5>Price Details</h5></div>
            <div>
              <div>Monthly Rent</div>
              <div className='d-flex'>
                <FaRupeeSign className='rupee-icon' /><input type="text" className='property-inp p-2 w-100' name='price' value={pgprice}
                  onChange={handleInputpgChange} id='price' />
              </div>
              <span className='fw-bold ms-3 price-format'>{formattedpgPrice}</span>
              <div className='mt-3'>Security Deposit</div>
              <div className='d-flex'>
                <FaRupeeSign className='rupee-icon' /><input type="text" className='property-inp p-2 w-100' name='price' value={pgdepprice}
                  onChange={handledepInputpgChange} id='price' />
              </div>
              <span className='fw-bold ms-3 price-format'>{depformattedpgPrice}</span>
            </div>
          </div>
          <div className='mt-4'>
            <div><h5>Minimum Duration of Contract</h5></div>
            <div class="dropdown d-flex rent-drop">
              <button class="btn btn-secondary dropdown-toggle bg-white text-dark d-flex justify-content-between align-items-center" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                <span>{mDuration}</span>
                <span className="dropdown-arrow"></span>
              </button>
              <ul class="dropdown-menu rent-drop-menu">
                {mDurationoptions.map((option, index) => (
                  <li key={index}>
                    <a class="dropdown-item" onClick={() => changepgduardrop(option)} href="#">{option}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <button className='sell-btn p-2 w-100 text-white fw-bold mt-4' onClick={handlepgpage}>Post Property</button>
        </div>
      </div>
    </div>
  )
}

export default PG