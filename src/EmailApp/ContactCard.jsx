import React from 'react'
import { PiUserCircleDuotone } from 'react-icons/pi'
import { MdDelete } from 'react-icons/md'

const ContactCard = ({ item, handleDelete }) => {
  const { id, name, email} = item
  return (
    <>
      <div key={id} className="contact-card">
        <div className='user'>
          <div className="user-icon">
            <PiUserCircleDuotone
              style={{
                fontSize: '3rem',
                paddingRight: '0.11rem',
                color: 'sandal'
              }}
            />
          </div>
          <div className="cards">
            <h3>{name}</h3>
            <p>{email}</p>
          </div>
        </div>
        <div className="bin-icon">
          <MdDelete
            className='delete'
            onClick={() => handleDelete(id) }
            style={{
              fontSize: '2rem',
              color: 'sandal'
            }}
          />
        </div>
      </div>
    </>
  )
}

export default ContactCard