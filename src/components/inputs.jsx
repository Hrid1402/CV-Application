import React from 'react'
import '../styles/inputs.css'

function TextInput({text, holder, type="text"}){
    return (
        <div className='labelInput'>
            <label>{text}</label>
            <input placeholder={holder} type={type}/>
        </div>
    )
}
export function GeneralInf(){

  return (
    <div className='InputBlock'>
        <h1>General Information</h1>
        <div className='infContainer'>
            <TextInput text="Full Name" holder="Ex: Charles Bradley"></TextInput>
            <TextInput text="Email" holder="Ex: CharlesB@email.com" type='email'></TextInput>
            <TextInput text="Phone Number" holder="Ex: (251) 326-7838" type="phone"></TextInput>
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
  


