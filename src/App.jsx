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
  
  const [schoolData, setSchoolData] = useState([{
    name: 'Greenfield University',
    degree: 'MSc in Data Science',
    startDate: '09/01/2018',
    endDate: '06/01/2020'
  }]);

  const [profData, setProfData] = useState([{
    company: "Tech Innovations",
    position: "Software Developer",
    responsibilities: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum aspernatur vel illo cum molestiae. Voluptates expedita incidunt a consequatur quia quis eligendi blanditiis tenetur quaerat!",
    date: "June 2020 - Present"
  }]);


  return (
    <>
      <h1 className='Title'>CV Creator</h1>
      <main>
        <div className='allBlocks'>
          <GeneralInf setFullName={setFullName} setEmail={setEmail} setPhone={setPhone} setAddress={setAddress}/>
          <EducationInf schoolData={schoolData} setSchoolData={setSchoolData}/>
          <ProfessionalInf profData={profData} setProfData={setProfData}/>
        </div>
          <CV fullName={fullName} email={email} phone={phone} address={address} schoolData={schoolData} profData={profData}/>
      </main>
    </>
  )
}

export default App
