import React from 'react'
import { Link } from 'react-router-dom'

const AddEmail = ({ setName, name, email, setEmail, AddContact }) => {
    return (
        <>
            <main>
                <div className="form">
                    <div className="add-email-header">
                        <h1>Add Your Contact</h1>
                    </div>
                    <form onSubmit={() => e.preventDefault()}>
                        <div className="mb-5 mt-5 from1">
                            <label htmlFor="exampleInputEmail1"
                                className="form-label">Name</label>
                            <input type="text"
                                className="form-control"
                                value={name}
                                required
                                onChange={(e) => setName(e.target.value)}
                                placeholder='Name'
                                id="exampleInputEmail1" />
                        </div>
                        <div className="mb-3 from1">
                            <label htmlFor="exampleInputEmail2"
                                className="form-label">Email</label>
                            <input type="email"
                                className="form-control"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder='Email'
                                id="exampleInputEmail2" />
                        </div>
                        <button type='button'
                            onClick={AddContact}
                            className='btn btn-primary ps-4 pe-4 fs-6'>
                            <Link className='link' to='/'>
                                Add
                            </Link>
                        </button>
                    </form>
                </div>
            </main>
        </>
    )
}

export default AddEmail