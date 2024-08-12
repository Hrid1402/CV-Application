import { useState } from 'react'
import pageIcon from './assets/icon.png'
import './styles/App.css'
import {GeneralInf, EducationInf, ProfessionalInf} from './components/inputs'

function App() {

  return (
    <>
      <h1 className='Title'>CV Creator</h1>
      <div className='allBlocks'>
        <GeneralInf />
        <EducationInf/>
        <ProfessionalInf/>
      </div>
    </>
  )
}

export default App
