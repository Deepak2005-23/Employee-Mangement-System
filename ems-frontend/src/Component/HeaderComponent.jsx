import React from 'react'
import { Link } from 'react-router-dom'

const HeaderComponent = () => {
  return (
    <div>
        <header>
            <nav className='navbar navbar-expand-lg navbar-dark bg-dark px-3'>
                <Link className="navbar-brand" to="/employees">Employee Management System</Link>
                <div className="ms-auto d-flex align-items-center">
                    <Link to="/employees" className="btn btn-outline-light btn-sm me-2">Employees</Link>
                    <Link to="/add-employee" className="btn btn-outline-info btn-sm me-2">Add Employee</Link>
                    <Link to="/about" className="btn btn-outline-light btn-sm">About</Link>
                </div>
            </nav>
        </header>
    </div>
  )
}

export default HeaderComponent

