import { useState } from 'react'
import React from 'react'
import pageIcon from './assets/icon.png'
import './styles/App.css'
import {GeneralInf, EducationInf, ProfessionalInf, CV} from './components/inputs'

function App() {
  const [fullName, setFullName] = React.useState('Charles Bradley');
  const [email, setEmail] = React.useState('CharlesB@email.com');
  const [phone, setPhone] = React.useState('(251) 326-7838');
  const [address, setAddress] = React.useState('London, UK');
  
  return (
    <>
      <h1 className='Title'>CV Creator</h1>
      <main>
        <div className='allBlocks'>
          <GeneralInf setFullName={setFullName} setEmail={setEmail} setPhone={setPhone} setAddress={setAddress}/>
          <EducationInf/>
          <ProfessionalInf/>
        </div>
          <CV fullName={fullName} email={email} phone={phone} address={address}/>
      </main>
    </>
  )
}

export default App
