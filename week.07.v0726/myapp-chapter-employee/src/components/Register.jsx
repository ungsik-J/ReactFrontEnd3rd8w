import React, { useState } from 'react';

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  width: '300px',
  margin: '20px auto',
  padding: '20px',
  border: '1px solid #ccc',
  borderRadius: '10px',
  backgroundColor: '#f9f9f9',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
};

const labelStyle = {
  marginBottom: '10px',
  display: 'flex',
  flexDirection: 'column',
  fontWeight: 'bold',
  color: '#333'
};

const inputStyle = {
  padding: '8px',
  borderRadius: '5px',
  border: '1px solid #ccc',
  fontSize: '14px'
};
const initialState = {
    name: null, 
    age: null, 
    job: null, 
    language: null, 
    pay: null
}

const Register = ({handleRegister}) => {
    const [info, setInfo] = useState(initialState);

    const handleChange = (e) =>{
      console.log( [e.target.name] )
      console.log( e.target.value )
        setInfo(prev=>({...prev, [e.target.name]: e.target.value}))
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        handleRegister(info);
    }
  return (
    <form style={formStyle} onSubmit={handleSubmit}>
      <label style={labelStyle}>
        Name
        <input type="text" name="name" style={inputStyle} onChange={handleChange}/>
      </label>
      <label style={labelStyle}>
        Age
        <input type="number" name="age" style={inputStyle} onChange={handleChange}/>
      </label>
      <label style={labelStyle}>
        Job
        <input type="text" name="job" style={inputStyle} onChange={handleChange}/>
      </label>
      <label style={labelStyle}>
        Language
        <input type="text" name="language" style={inputStyle} onChange={handleChange}/>
      </label>
      <label style={labelStyle}>
        Pay
        <input type="number" name="pay" style={inputStyle} onChange={handleChange}/>
      </label>
      <button>등록</button>
    </form>
  );
};

export default Register;
