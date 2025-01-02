import React,{useEffect,useState} from 'react'
import { listOfEmployees } from '../services/EmployeeService'
import { useNavigate } from 'react-router-dom'

const ListEmployeeComponent = () => {
    const [data,setData] = useState([])
    useEffect(() => {
        listOfEmployees().then((response) => {
            setData(response.data);}).catch((error) => {
                console.log(error);
            })
    },[])
    const navigator = useNavigate();
    const addEmployee = () => {
        navigator('/add-employee')
    }
    const updateEmployee = (id) => navigator(`/update-employee/${id}`)

  return (
<div className='container mt-4 mb-4'>
<h2 className='text-center'>Employee List</h2>
    <button className='btn btn-primary mb-2'onClick={addEmployee}>Add Employee</button>
    <table 
    className='table table-striped table-bordered text-center table-hover'>
        <thead>
            <tr> 
                <th>Id</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th> Email</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {data.map(employee => 
                <tr key={employee.id}>
                    <td>{employee.id}</td>
                    <td>{employee.firstName}</td>
                    <td>{employee.lastName}</td>
                    <td>{employee.email}</td>
                    <td><button className='btn btn-info' onClick={()=>updateEmployee(employee.id)}>Update</button></td>
                </tr>
            )}
        </tbody>
    </table>
</div>
  )
}

export default ListEmployeeComponent