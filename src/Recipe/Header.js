import React from 'react'
import { Link } from 'react-router-dom'
import { BsSearch } from 'react-icons/bs'
import { motion } from 'framer-motion'

const Header = ({ setValue, value, handleClick, inputRef }) => {
    return (
        <>
            <div className="container-fluid" >
                <motion.div
                    initial={{ x: 300 }}
                    whileInView={{ rotate: 360, x: 0 }}
                    transition={{ duration: 1 }}>
                    <h2>Make Your Food Own</h2>
                </motion.div>
                <motion.div
                    initial={{ scale: 0, x: -300 }}
                    whileInView={{ scale: 1, x: 0 }}
                    transition={{ duration: 2 }}
                    >
                    <h6 className='roger'>~ Guide by uncle Roger</h6>
                </motion.div>
            </div>
            <div className="input-group">
                <form className='search' onSubmit={(e) => e.preventDefault()}>
                    <input type="search"
                        onChange={(e) => setValue(e.target.value)}
                        value={value}
                        ref={inputRef}
                        className="form-control rounded" placeholder="Search"
                        aria-label="Search"
                        aria-describedby="search-addon"
                    />
                    <Link to="/"><button onClick={handleClick} className='iconbtn'>
                        <BsSearch 
                        className='icon'
                        />
                    </button></Link>
                </form>
            </div>
        </>
    )
}

export default Header