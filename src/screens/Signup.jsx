//this is an signup page where user can signup 
import React, { useState } from 'react';
import {Link} from 'react-router-dom'
export const Signup = () => {
    const [credentials,setCredentials]=useState({name:"",email:"",password:"",geoloation:""});

    const handleSubmit = async(e)=>{
      alert('Account is created Successfully')
        //synthetic event
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/createuser",{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            //sending the to the backend
            body:JSON.stringify({name:credentials.name,email:credentials.email,password:credentials.password,location:credentials.geoloation})
        })
        const json=await response.json();
        if(!json.success){
            alert('enter valid credentials')
        }
    }

    const onChange=(e)=>{
        setCredentials({...credentials,[e.target.name]:e.target.value})
    }
  return (
    <>
    <div className="container">
    <div className='d-flex justify-content-center bg-success container  align-items-center' style={{height:'100px'}}><b><h1>USER SIGNUP</h1></b></div>
    <form onSubmit={handleSubmit} className="container mt-1 border shadow-lg p-4 bg-dark text-white">
      <div className="mb-3">
          <label htmlFor="name" className="form-label"> name</label>
          <input type="text" className="form-control" name='name' value={credentials.name} onChange={onChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" name='email' value={credentials.email} onChange={onChange}/>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" name='password' value={credentials.password} onChange={onChange}/>
        </div>

        <div className="mb-3">
          <label htmlFor="geoloation" className="form-label">Address</label>
          <input type="text" className="form-control" name='geoloation' value={credentials.geoloation} onChange={onChange}/>
        </div>

        <button type="submit" className="m-3 btn btn-success">Submit</button>
        <Link to='/login' className='m-3 btn btn-danger'>Already a user</Link>
      </form>
    </div>
    </>
  );
};
