import React from 'react'
import '../styles/inputs.css'
import '../styles/CV.css'
import emailIcon from '../assets/ICO_email.svg'
import phoneIcon from '../assets/ICO_phone.svg'
import addressIcon from '../assets/ICO_address.svg'



function TextInput({text, holder, type="text", handleChange}){
    
    return (
        <div className='labelInput'>
            <label>{text}</label>
            <input placeholder={holder} type={type} onChange={handleChange}/>
        </div>
    )
}

export function GeneralInf({setFullName}){

  return (
    <div className='InputBlock'>
        <h1>General Information</h1>
        <div className='infContainer'>
            <TextInput text="Full Name" holder="Ex: Charles Bradley" handleChange={(e)=> setFullName(e.target.value)}></TextInput>
            <TextInput text="Email" holder="Ex: CharlesB@email.com" type='email'></TextInput>
            <TextInput text="Phone Number" holder="Ex: (251) 326-7838" type="phone"></TextInput>
            <TextInput text="Address" holder="Ex: London, UK"></TextInput>
        </div>
    </div>
  )
};

export function EducationInf(){
    return (
      <div className='InputBlock'>
          <h1>Education Information</h1>
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
  
export function CV({ name, email, phone, address }){
    
    return (
    <div className='CV'>
        <div className='top'>
            <h3 className='Name'>{name}</h3>
            <div className='contact'>
                <div><img src={emailIcon} alt="Email" /><p>josephine.meyers@mail.co.uk</p></div>
                <div><img src={phoneIcon} alt="Phone" /><p>(251) 326-7838</p></div>
                <div><img src={addressIcon} alt="Address" /><p>London, UK</p></div>
            </div>
        </div>
    </div>
    )
};

