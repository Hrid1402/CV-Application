import { useState } from 'react'
import React from 'react'
import pageIcon from './assets/icon.png'
import './styles/App.css'
import {GeneralInf, EducationInf, ProfessionalInf, CV} from './components/inputs'

function App() {
  const [fullName, setFullName] = React.useState('');
  return (
    <>
      <h1 className='Title'>CV Creator</h1>
      <main>
        <div className='allBlocks'>
          <GeneralInf setFullName={setFullName}/>
          <EducationInf/>
          <ProfessionalInf/>
        </div>
          <CV name={fullName}/>
      </main>
    </>
  )
}

export default App
