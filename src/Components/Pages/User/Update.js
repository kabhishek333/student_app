import axios from 'axios';
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom'

function Update() {
  const {register, handleSubmit, setValue} = useForm();

  const {userId} = useParams();

  const navi  = useNavigate();


  async function fetchUser()
  {

    const result = await axios.get(`http://localhost:5000/user/${userId}`)
    setValue('name', result.data.name);
    setValue('roll', result.data.roll);
    setValue('age', result.data.age);
  }
  
  function saveData(data)
  {
    axios.put(`http://localhost:5000/user/${userId}`, data);
    navi('/user/show');
  }

  useEffect(()=>{fetchUser()}, [])
  return (
    <>
      <center>
        <h1><u>STUDENT UPDATE FORM</u></h1>
        <div className='container mt-5'>
          <form onSubmit={handleSubmit(saveData)}>
            <label><b>Name</b></label>
            <input type='text' className='form-control' {...register('name')}/>
            <br></br>
            <br></br>
            <label><b>Roll No</b></label>
            <input type='number' className='form-control' {...register('roll')}/>
            <br></br>
            <br></br>
            <label><b>Age</b></label>
            <input type='text' className='form-control' {...register('age')}/>
            <br></br>
            <br></br>
            <input type='submit' value='UPDATE STUDENT' className='btn btn-outline-success col-6 btn-lg'/>
            <button type='reset' className='btn btn-outline-warning col-6 btn-lg'>RESET</button>
          </form>
        </div>
      </center>
    </>
  )
}

export default Update