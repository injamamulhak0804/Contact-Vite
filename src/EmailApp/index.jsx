import React, { useEffect, useState } from 'react'
import Header from './Header'
import './index.css'
import AddEmail from './AddEmail'
import ContactList from './ContactList'
import { v4 as uuidv4 } from 'uuid';
import { Route, Router } from 'react-router-dom'

const index = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [contact, setContact] = useState([])

  useEffect(() => {
    const getContact = JSON.parse(localStorage.getItem('contact'))
    setContact(getContact || [])
  }, [])


  // Add a Contact 

  const AddContact = () => {
    if (name === '' || email === '') {
      return
    }
    else {
      const obj = { id: uuidv4(), name, email }
      const newObj = [...contact, obj]
      localStorage.setItem('contact', JSON.stringify(newObj))
      setContact(newObj)
      setName('')
      setEmail('')
    }
  }


  // Delete a contact

  const handleDelete = (id) => {
    const deleteContact = contact.filter((item) => {
      return item.id !== id;
    })
    localStorage.setItem('contact', JSON.stringify(deleteContact))
    setContact(deleteContact)
  }

  return (
    <>
      <Header />
      <Route exact path="/" render={() => <ContactList
        handleDelete={handleDelete}
        contact={contact.reverse()} />} />

      <Route exact path="/add" render={() => <AddEmail
        setName={setName}
        name={name}
        email={email}
        setEmail={setEmail}
        AddContact={AddContact}
      />} />
    </>
  )
}
export default index