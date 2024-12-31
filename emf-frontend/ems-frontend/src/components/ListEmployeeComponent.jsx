import React,{useEffect,useState} from 'react'
import { listOfEmployees } from '../services/EmployeeService'

const ListEmployeeComponent = () => {
    const [data,setData] = useState([])
    useEffect(() => {
        listOfEmployees().then((response) => {
            setData(response.data);}).catch((error) => {
                console.log(error);
            })
    },[])

  return (
<div className='container mt-4 mb-4 text-center'>
<h2 className='text-center'>Employee List</h2>
    <table className='table table-striped table-bordered'>
        <thead>
            <tr>
                <th>Id</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th> Email</th>
            </tr>
        </thead>
        <tbody>
            {data.map(employee => 
                <tr key={employee.id}>
                    <td>{employee.id}</td>
                    <td>{employee.firstName}</td>
                    <td>{employee.lastName}</td>
                    <td>{employee.email}</td>
                </tr>
            )}
        </tbody>
    </table>
</div>
  )
}

export default ListEmployeeComponent