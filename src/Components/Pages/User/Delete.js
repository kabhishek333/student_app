import axios from 'axios';
import React, { useEffect } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'

function Delete() {
   const{userId} = useParams();

   const navi = useNavigate();


   function DeleteUser()
   {
    axios.delete(`http://localhost:5000/user/${userId}`);
    navi('/user/show');
   }

//    useEffect(()=>{DeleteUser()}, [])

  return (
    <center>
        <h1><u>DELETE CONFIRMATION</u></h1>
        <div className='container mt-5'>
            <form onSubmit={()=>DeleteUser()}>
                <h2>Do you really want to <span style={{'color': 'red'}}>DELETE THIS RECORD?</span></h2>
                <input type='submit' value='YES' className='btn btn-danger btn-sm col-6' />
                <NavLink to='/user/show'><input type='reset' value='NO' className='btn btn-warning btn-sm col-6'/></NavLink>
            </form>
        </div>
    </center>
  )
}

export default Delete