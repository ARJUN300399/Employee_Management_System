import React from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import {addEmployee, getEmployeeById,editEmployee } from '../services/EmployeeService'
import { useEffect } from 'react'

const Employee = () => {
    const [firstName,setFirstName] = React.useState('')
    const [lastName,setLastName] = React.useState('')   
    const [email,setEmail] = React.useState('')
    const [error,setError] = React.useState('')
    const navigator = useNavigate();
    const {id} = useParams();

    const firstNameHandler = (e) => {
        setFirstName(e.target.value);
        setError('');
    }
    const lastNameHandler = (e) => {
        setLastName(e.target.value);
        setError('');
    }
    const emailNameHandler = (e) => {
        setEmail(e.target.value);
        setError('');
    }
    const saveEmployee = (e) => {
        e.preventDefault();
        if(!firstName.trim()||!email.trim()){
            setError('First Name and Email are required');
            return;
        }
        console.log({firstName,lastName,email})
        addEmployee({firstName,lastName,email}).then((response) => {
            console.log(response.data);
            navigator('/employees');
        }).catch((error) => {
            console.log(error);
        })
        setError(''); 
    }
    const updateEmployee = (e) => {
        e.preventDefault();
        if(!firstName.trim()||!email.trim()){
            setError('First Name and Email are required');
            return;
        }
        console.log({firstName,lastName,email})
        editEmployee(id,{firstName,lastName,email}).then((response) => {
            console.log(response.data);
            navigator('/employees');
        }).catch((error) => {
            console.log(error);
        })
        setError(''); 
    }
    useEffect(()=>{
        //console.log(id);
        if(id){
            getEmployeeById(id).then((response) => {
                const data = response.data;
                setFirstName(data.firstName);
                setLastName(data.lastName);
                setEmail(data.email);
            }).catch((error) => console.log(error))
        }
    },[id])
  return (
    <div className='container mt-4'>
        <div className='row'>
            <div className= 'card col-md-6 offset-md-3 offset-md-3'>
                <h2 className='mt-3 text-center'>{id?'Update Employee':'Add Employee'}</h2>
                <div className='card-body '>
                    {error && <div className='alert alert-danger' role="alert">{error}</div>}
                    <form>
                        <div className='form-group'>
                            <label className='mt-2'>First Name</label>
                            <input 
                            type='text' 
                            className='form-control' 
                            placeholder='First Name' 
                            onChange={firstNameHandler}
                            value={firstName}/>
                        </div>
                        <div className='form-group'>
                            <label className='mt-2'>Last Name</label>
                            <input 
                            type='text' 
                            className='form-control' 
                            placeholder='Last Name' 
                            onChange={lastNameHandler}
                            value={lastName}/>
                        </div>
                        <div className='form-group'>
                            <label className='mt-2'>Email</label>
                            <input 
                            type='email' 
                            className='form-control' 
                            placeholder='Email' 
                            onChange={emailNameHandler}
                            value={email}/>
                        </div>
                        <button className='btn btn-primary mt-2' onClick={id?updateEmployee:saveEmployee}>{id?'Update':'Add'}</button>
                    </form>
                </div>
            </div>

        </div>

    </div>
  )
}

export default Employee