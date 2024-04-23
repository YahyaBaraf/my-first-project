import React,{useEffect, useState} from 'react';
import { deleteEmployee, listEmployees } from '../services/EmployeeService';
import { useNavigate } from 'react-router-dom';

const ListeEmployee = () => {
    
    function updateEmployee(id){
        navigator(`/edit-employee/${id}`)
    }

    function removeEmployee(id){
        console.log(id);

        deleteEmployee(id).then((response) => {
            getAllEmployees();

        }).catch(error => {
            console.error(error); 
        })

    }

    function addNewEmployee () {
        navigator('/add-employee')

    }
    const [employees, setEmployees] = useState([])
    const navigator = useNavigate();

    useEffect(() => {
      getAllEmployees();
    }, [])

    function getAllEmployees(){
        listEmployees().then((response) => {
            setEmployees(response.data);
        }).catch(error =>{
            console.error(error);
        })
    }
    

  
  return (
    <div className='container'>
    <h1 className='text-center'>Liste Employee</h1><br /><br />
    <button className="btn btn-primary mb-2" onClick={addNewEmployee}>Add Employee</button><br /><br />
    <table className='table table-striped table-bordered'>
        <thead>
            <tr>
                <th>Employee Id</th>
                <th>Employee First Name</th>
                <th>Employee Last Name</th>
                <th>Employee Email</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {
                employees.map(employee =>
           
            <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.email}</td>
                <td>
                <button className="btn btn-info" onClick={() => updateEmployee(employee.id)}>Update</button> <br /> <br />
                <button className="btn btn-danger" onClick={() => removeEmployee(employee.id)}>Delete</button>
                </td>
            </tr>)
             }
        </tbody>
    </table>
    </div>
  )
}

export default ListeEmployee