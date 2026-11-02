import React from 'react'
import { Link } from 'react-router-dom'

const AboutComponent = () => {
    return (
        <div className='container mt-5'>
            <div className='row justify-content-center'>
                <div className='col-md-8'>
                    <div className='card shadow-sm'>
                        <div className='card-header bg-dark text-white'>
                            <h3 className='mb-0'>About Employee Management System</h3>
                        </div>
                        <div className='card-body'>
                            <p className='lead'>
                                This is a full-stack Employee Management System built using React with Vite on the frontend and Spring Boot on the backend.
                            </p>
                            <h5 className='mt-4'>Features:</h5>
                            <ul className='list-group list-group-flush mb-4'>
                                <li className='list-group-item'>View list of all employees in tabular format</li>
                                <li className='list-group-item'>Add new employee records with client-side validation</li>
                                <li className='list-group-item'>Update existing employee details dynamically</li>
                                <li className='list-group-item'>Delete employee records from database</li>
                            </ul>

                            <h5>Tech Stack:</h5>
                            <table className='table table-bordered mt-2'>
                                <tbody>
                                    <tr>
                                        <th scope='row' style={{ width: '30%' }}>Frontend</th>
                                        <td>React, Vite, React Router, Axios, Bootstrap 5</td>
                                    </tr>
                                    <tr>
                                        <th scope='row'>Backend</th>
                                        <td>Spring Boot, Spring Data JPA, Hibernate</td>
                                    </tr>
                                    <tr>
                                        <th scope='row'>Database</th>
                                        <td>MySQL (Database: <code>emc</code>)</td>
                                    </tr>
                                    <tr>
                                        <th scope='row'>REST API Base URL</th>
                                        <td><code>http://localhost:8080/api/employees</code></td>
                                    </tr>
                                </tbody>
                            </table>

                            <div className='mt-4 d-flex gap-2'>
                                <Link to='/employees' className='btn btn-primary'>
                                    View Employee List
                                </Link>
                                <Link to='/add-employee' className='btn btn-success'>
                                    Add New Employee
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutComponent

