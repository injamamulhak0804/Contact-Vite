import React from 'react'

const Nav = () => {
    return (
        <>
            <nav>
                <div className="nav-brand">
                    <span>Roger recipe</span>
                </div>
                <div >
                    <ul className="nav-links">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Explore</a></li>
                        <li><a href="#">Favorites</a></li>
                    </ul>
                </div>
                <div>
                    <button className='signbtn'>Sign in</button>
                </div>
            </nav>
        </>
    )
}

export default Nav