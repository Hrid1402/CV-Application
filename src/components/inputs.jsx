import React from 'react'
import '../styles/inputs.css'
import '../styles/CV.css'
import emailIcon from '../assets/ICO_email.svg'
import phoneIcon from '../assets/ICO_phone.svg'
import addressIcon from '../assets/ICO_address.svg'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

let schoolData = [
    {
        name: 'Greenfield College',
        degree: 'MS in Data Analytics',
        startDate: '01/01/2019',
        endDate: '01/01/2021'
    },
    {
        name: 'Other College',
        degree: 'MS in Data Analytics',
        startDate: '01/01/2019',
        endDate: '01/01/2021'
    },
];

function TextInput({text, holder, type="text", handleChange}){
    
    return (
        <div className='labelInput'>
            <label>{text}</label>
            <input placeholder={holder} type={type} onChange={handleChange}/>
        </div>
    )
}

export function GeneralInf({setFullName, setEmail, setPhone, setAddress}){

  return (
    <div className='InputBlock'>
        <h1>General Information</h1>
        <div className='infContainer'>
            <TextInput text="Full Name" holder="Ex: Charles Bradley" handleChange={(e)=> setFullName(e.target.value)}></TextInput>
            <TextInput text="Email" holder="Ex: CharlesB@email.com" type='email'handleChange={(e)=> setEmail(e.target.value)}></TextInput>
            <TextInput text="Phone Number" holder="Ex: (251) 326-7838" type="phone" handleChange={(e)=> setPhone(e.target.value)}></TextInput>
            <TextInput text="Address" holder="Ex: London, UK" handleChange={(e)=> setAddress(e.target.value)}></TextInput>
        </div>
    </div>
  )
};
function EduBlock(name, key, onDelete){
    return(
        <div key={key} className='schoolBlock'>
            <button onClick={() => onDelete(name)}>Delete</button>
            <h3>{name}</h3>
        </div>
    )
}
function AddEdu({setShowEdu, schoolData, setSchoolData}){
    return (
        <div className='InputBlock'>
            <div className='infContainer'>
                <TextInput text="School Name" holder="Ex: Greenfield College"></TextInput>
                <TextInput text="Degree" holder="Ex: MS in Data Analytics"></TextInput>
                <div className='dates'>
                      <div className='d1'>
                          <TextInput text="Start Date" holder="Ex: 01/01/2019"></TextInput>
                      </div>
                      <div className='d2'>
                          <TextInput text="End Date" holder="Ex: 01/01/2021"></TextInput>
                      </div>
                </div>
                <button onClick={
                    () => {setShowEdu(false);}
                }>Cancel</button>
                
                <button onClick={
                    () => {
                        setSchoolData([...schoolData, {
                            name: document.querySelector('input[placeholder="Ex: Greenfield College"]').value,
                            degree: document.querySelector('input[placeholder="Ex: MS in Data Analytics"]').value,
                            startDate: document.querySelector('input[placeholder="Ex: 01/01/2019"]').value,
                            endDate: document.querySelector('input[placeholder="Ex: 01/01/2021"]').value
                        }]);
                        setShowEdu(false);
                    }
                }>Save</button>
            </div>
        </div>
      )
}

export function EducationInf({schoolData, setSchoolData}){
    const [showEdu, setShowEdu] = useState(false);
    
    const deleteSchool = (nameToDelete) => {
        setSchoolData(schoolData.filter((school) => school.name !== nameToDelete));
    };
    
    return (
      <div className='InputBlock'>
          <h1>Education Information</h1>
          <div className='infContainer'>
            {
                showEdu == true ? ( <AddEdu setShowEdu={setShowEdu} schoolData={schoolData} setSchoolData={setSchoolData}/>  ): <> {schoolData.map((school) => EduBlock(school.name, uuidv4(), deleteSchool)) }<button onClick={() => setShowEdu(true)}>Add</button> </>
            }
            
          </div>
      </div>
    )
};

export function ProfessionalInf(){
    return (
      <div className='InputBlock'>
          <h1>Professional Information</h1>
          <div className='infContainer'>
              <TextInput text="Company Name" holder="Ex: Tech Innovations Inc"></TextInput>
              <TextInput text="Position Title" holder="Ex: Software Developer"></TextInput>
              <div className='labelInput'>
                <label>Main Responsibilities</label>
                <textarea  rows="5" cols="55" placeholder='Ex: Developed and maintained web applications, collaborated with cross-functional teams, and implemented new features.'></textarea>
              </div>
              
              <TextInput text="Date" holder="Ex: June 2020 - Present    "></TextInput>
          </div>
      </div>
    )
};
function SchoolContentBlock({name, degree, startDate, endDate}){
    return (
    <>
        <div>
            <p>{startDate} - {endDate}</p>
            <h5>{name}</h5>
        </div>
            <p className='Degree'>{degree}</p>
        
        
    </>
    )
}
export function CV({ fullName, email, phone, address, schoolData}){
    
    return (
    <div className='CV'>
        <div className='top'>
            <h3 className='Name'>{fullName}</h3>
            <div className='contact'>
                <div><img src={emailIcon} alt="Email" /><p>{email}</p></div>
                <div><img src={phoneIcon} alt="Phone" /><p>{phone}</p></div>
                <div><img src={addressIcon} alt="Address" /><p>{address }</p></div>
            </div>
        </div>
        <div className='Education'>
            <h4>Education</h4>
            {
                schoolData.map(
                    (school) => <div className='schoolContent'>
                    <div className='color'>
                        </div> <SchoolContentBlock name={school.name} degree={school.degree} startDate={school.startDate} endDate={school.endDate} />  
                    </div>
                )
            }
            
            
        </div>
    </div>
    )
};

