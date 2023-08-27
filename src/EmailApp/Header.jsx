import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <>
      <div className="header pt-3 pb-3 ps-3 pe-3 border-bottom d-flex justify-content-between">
        <h2 className=''>Contact Email Manager
        </h2>
            <button className='btn btn-primary'>
              <Link to='add' className='link'>
                Add Contact
              </Link>
            </button>
      </div>

    </>
  )
}

export default Header