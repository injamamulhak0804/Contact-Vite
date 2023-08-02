import React from 'react'

const NextPage = ({ totalPost, postPerPage, setcurrent, current }) => {
    let pages = [];

    for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
        pages.push(i)
    }

    return (
        <>
            <div className="pagination">
                {
                    pages.map((btn, index) => {
                        return(
                            <a className='next-page' key={index} href="#home">
                                <button
                                    type='button'
                                    
                                    onClick={() => setcurrent(btn)}
                                    className={btn === current ? 'active' : ''}>
                                    {btn}
                                </button>
                            </a>
                        )
                    })
                }
            </div>
        </>
    )
}

export default NextPage