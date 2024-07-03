import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Component/login.css"
import { useNavigate   } from "react-router-dom";
const Registration = () => {
  const navigate = useNavigate();
  const [formdata, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    city: "",
    district: "",
    province: "",
    country: "Nepal",
  })
  const [errors, setErrors] = useState({})
  const [valid, setValid] = useState(true)
  const [data, setData] = useState([])

  
  useEffect(()=>{
    fetch(`https://restcountries.com/v3.1/all/`)
.then(response => response.json())
.then(data => {
    setData(data)
    setRecords(data)
})
.catch(err => console.error(err));
},[])

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(formdata)
    let isvalid = true;
    let validationErrors={}
    //name validation
    if(formdata.fname === "" || formdata.fname === null){
      isvalid = false;
      validationErrors.fname = "First name is required"
    }
    //lastname validation
    if(formdata.lname === "" || formdata.lname === null){
      isvalid = false;
      validationErrors.lname = "Last name is required"
    }
    //email validation
    if(formdata.email === "" || formdata.email === null){
      isvalid = false;
      validationErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formdata.email)){
      isvalid = false;
      validationErrors.email = "Email is not valid"
    }
    //phone validation
    if(formdata.phone === "" || formdata.phone === null){
      isvalid = false;
      validationErrors.phone = "Phone number is required"
    } else if (!/^\d{10}$/.test(formdata.phone)){
      isvalid = false;
      validationErrors.phone = "Phone number is not valid"
    }
      //city validation
      if(formdata.city === "" || formdata.city === null){
        isvalid = false;
        validationErrors.city = "City  is required"
      }
      //district validation
      if(formdata.district === "" || formdata.district === null){
        isvalid = false;
        validationErrors.district = "District  is required"
      }
      //country validation
      if(formdata.country === "" || formdata.country === null){
        isvalid = false;
        validationErrors.country = "Country  is required"
      }
    setErrors(validationErrors)
    setValid(isvalid)

    if(Object.keys(validationErrors).length===0){
      axios.post('http://localhost:8000/users',formdata)
      .then(result =>{
        alert("Save Successfully")
        navigate('/table')
      })
      .catch(err => console.log(err))
    }

  }
  return (
    <>
      <section className="form">
        <div className="container">
               
                <form onSubmit={handleSubmit} className="form-class">
                  <div className="d-flex flex-column gap-4">
                    <div className="d-flex gap-4">
                      
                    <div className="form-single">
                      <label htmlFor="firstName" className="form-label">
                        First Name <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="fname"
                        id="firstName"
                        placeholder="First Name"
                        onChange={(event)=> setFormData({...formdata, fname: event.target.value})}
                      />
                       {
                  valid ? <></>:
                  <span className="text-danger">
                    {errors.fname}
                  </span>
                }
                    </div>
                    <div className="form-single">
                      <label htmlFor="lastName" className="form-label">
                        Last Name <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="lname"
                        id="lastName"
                        placeholder="Last Name"
                        onChange={(event)=> setFormData({...formdata, lname: event.target.value})}
                      />
                         {
                  valid ? <></>:
                  <span className="text-danger">
                    {errors.lname}
                  </span>
                }
                    </div>
                    </div>

                    <div className="d-flex gap-4">
                      <div className="form-single">
                        <label htmlFor="email" className="form-label">
                          Email <span className="text-danger">*</span>
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          id="email"
                          placeholder="name@example.com"
                          onChange={(event)=> setFormData({...formdata, email: event.target.value})}
                        />
                          {
                    valid ? <></>:
                    <span className="text-danger">
                      {errors.email}
                    </span>
                  }
                      </div>
                      <div className="form-single">
                      <label htmlFor="phone" className="form-label">
                        Phone number <span className="text-danger">*</span>
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        name="email"
                        id="email"
                        placeholder="Enter phone number"
                        onChange={(event)=> setFormData({...formdata, phone: event.target.value})}
                      />
                         {
                  valid ? <></>:
                  <span className="text-danger">
                    {errors.phone}
                  </span>
                }
                    </div>
                    
                    </div>
                    <div className="d-flex gap-4">
                      <div className="form-single">
                        <label htmlFor="City" className="form-label">
                          City <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          name="city"
                          id="cityName"
                          placeholder="Enter your city"
                          onChange={(event)=> setFormData({...formdata, city: event.target.value})}
                        />
                        {
                    valid ? <></>:
                    <span className="text-danger">
                      {errors.city}
                    </span>
                  }
                      </div>
                      <div className="form-single">
                        <label htmlFor="district" className="form-label">
                        District <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          name="district"
                          id="district"
                          placeholder="district Name"
                          onChange={(event)=> setFormData({...formdata, district: event.target.value})}
                        />
                          {
                    valid ? <></>:
                    <span className="text-danger">
                      {errors.district}
                    </span>
                  }
                      </div>
                    </div>
                      <div className="form-single d-flex flex-column">
                        <label htmlFor="Province" className="form-label">
                        Province <span className="text-danger">*</span>
                        </label>
                        <select id="province" name="province" form="carform"  className="px-4 py-2 rounded w-100"
                        onChange={(event)=> setFormData({...formdata, province: event.target.value})}

                        >
                          <option value="Karnali">Karnali</option>
                          <option value="Bagmati">Bagmati</option>
                          <option value="Lumbini">Lumbini</option>
                          <option value="Sudurpashchim">Sudurpashchim</option>
                          <option value="Gandaki">Gandaki</option>
                          <option value="Koshi">Koshi</option>
                          <option value="Madhesh">Madhesh</option>

                        </select>
                       
                        {
                    valid ? <></>:
                    <span className="text-danger">
                      {errors.province}
                    </span>
                  }
                      </div>
                      <div className="form-single d-flex flex-column">
                        <label htmlFor="Country" className="form-label">
                        Country <span className="text-danger">*</span>
                        </label>
                        <select id="country" name="country" form="carform"  value={formdata.country} className="  py-2 rounded w-100"
                        onChange={(event)=> setFormData({...formdata, country: event.target.value})}
                        >
                          {data.map ((item) => (
                            <>
                            <option value={item.name.common}>{item?.name?.common}</option>
                            </>
                          ))}
                        </select>
                        {
                    valid ? <></>:
                    <span className="text-danger">
                      {errors.country}
                    </span>
                  }
                      </div>
                    
                   <div className="d-flex gap-4">
                   <div className="form-single text-center">
                        <button
                          className="btn bsb-btn-xl btn-primary"
                          type="submit"
                        >
                          Save Data
                        </button>
                    </div>
                    <div className="form-single text-center">
                        <button
                          className="btn bsb-btn-xl btn-success"
                          type="submit"
                          onClick={() => navigate("/table")}
                        >
                          View Data
                        </button>
                    </div>
                   </div>
                  </div>
                </form>
              </div>
      </section>
    </>
  );
};

export default Registration;
