import React from 'react'
import ContactCard from './ContactCard';


const ContactList = ({ contact, handleDelete }) => {
  return (
    <>
      <div className="contact-list">
        {
          contact.length === 0 && <p className='no_contact_display'>No Contact tO Display</p>
        }
        {
          contact.length >= 1 &&
          contact.map((item, index) =>
            <ContactCard item={item}
              handleDelete={handleDelete}
              key={index} />
          )
        }
      </div>
    </>
  )
}

export default ContactList