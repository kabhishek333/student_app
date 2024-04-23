import React from 'react'
import {useForm} from 'react-hook-form'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Add() {

    const {register, handleSubmit} = useForm()
    
    const navi  = useNavigate();

    function saveData(data){
        axios.post('http://localhost:5000/user', data)
        navi('/user/show');
    }

  return (
    <>
      <center>
        <h1><u>STUDENT REGISTERATION FORM</u></h1>
        <div className='bg bg-light text-warning container mt-5'>
          <form onSubmit={handleSubmit(saveData)} >
            <label><b>Name</b></label>
            <input type='text' className='form-control' {...register('name')} />
            <br></br>
            <br></br>
            <label><b>Roll No</b></label>
            <input type='number' className='form-control' {...register('roll')} />
            <br></br>
            <br></br>
            <label><b>Age</b></label>
            <input type='text' className='form-control' {...register('age')}/>
            <br></br>
            <br></br>
            <input type='submit' value='ADD STUDENT' className='btn btn-outline-success col-6 btn-lg'/>
            <button type='reset' className='btn btn-outline-warning col-6 btn-lg'>RESET</button>
          </form>
        </div>
      </center>
  </>
  )
}

export default Add