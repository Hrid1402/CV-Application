import React from 'react'
import '../styles/inputs.css'
import '../styles/CV.css'
import emailIcon from '../assets/ICO_email.svg'
import phoneIcon from '../assets/ICO_phone.svg'
import addressIcon from '../assets/ICO_address.svg'
import deleteICON from '../assets/delete.svg'
import addICON from '../assets/add.svg'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

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
            <img onClick={() => onDelete(name)} src={deleteICON} alt="delete" height={"45px"} />
            <h3>{name}</h3>
        </div>
    )
}
function ProfBlock(name, key, onDelete){
    return(
        <div key={key} className='schoolBlock'>
            <img onClick={() => onDelete(name)} src={deleteICON} alt="delete" height={"45px"} />
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
                <div className='BTNS'>
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
        </div>
      )
}
function AddProf({setShowProf, profData, setProfData}){
    return(
        <div className='InputBlock'>
              <TextInput text="Company Name" holder="Ex: Tech Innovations Inc"></TextInput>
              <TextInput text="Position Title" holder="Ex: Software Developer"></TextInput>
              <div className='labelInput'>
                <label>Main Responsibilities</label>
                <textarea  rows="5" cols="55" placeholder='Ex: Developed and maintained web applications, collaborated with cross-functional teams, and implemented new features.'></textarea>
              </div>
              <TextInput text="Date" holder="Ex: June 2020 - Present"></TextInput>
              <div className='BTNS'>
                <button onClick={()=>setShowProf(false)}>Cancel</button>
                <button onClick={()=>{
                        setProfData([...profData, {
                            company: document.querySelector('input[placeholder="Ex: Tech Innovations Inc"]').value,
                            position: document.querySelector('input[placeholder="Ex: Software Developer"]').value,
                            responsibilities: document.querySelector('textarea').value,
                            date: document.querySelector('input[placeholder="Ex: June 2020 - Present"]').value
                        }]);
                        setShowProf(false);
                    

                }}>Add</button>
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
                showEdu == true ? ( <AddEdu setShowEdu={setShowEdu} schoolData={schoolData} setSchoolData={setSchoolData}/>  ): <> {schoolData.map((school) => EduBlock(school.name, uuidv4(), deleteSchool)) }<button onClick={() => setShowEdu(true)} className='addBTN'>Add <img src={addICON}/></button> </>
            }
            
          </div>
      </div>
    )
};

export function ProfessionalInf({profData, setProfData}){
    const [showProf, setShowProf] = useState(false);

    const deleteProfessional = (nameToDelete) => {
        setProfData(profData.filter((prof) => prof.company !== nameToDelete));
    };

    return (
      <div className='InputBlock'>
          <h1>Professional Information</h1>
          <div className='infContainer'>

            {
                showProf == true ? ( <AddProf setShowProf={setShowProf} profData={profData} setProfData={setProfData}/>  ): <> {profData.map((prof) => ProfBlock(prof.company, uuidv4(), deleteProfessional)) }<button onClick={() => setShowProf(true)}  className='addBTN'>Add <img src={addICON}></img></button> </>
            }

          </div>
      </div>
    )
};

function SchoolContentBlock({name, degree, startDate, endDate}){
    return (
    <>
        <div className='l'>
            <p>{startDate} - {endDate}</p>
            <h5>{name}</h5>
        </div>
            <p className='Degree'>{degree}</p>
    </>
    )
}
function ProfContentBlock({company, position, responsibilities, date}){
    return (
    <>
        <div className='l'>
            <h5>{company}</h5>
            <p>{date}</p>
        </div>
        <div className='r'>
            <p className='position'>{position}</p>
            <p className='responsibilities'>{responsibilities}</p>
        </div>
            
    </>
    )
}
export function CV({ fullName, email, phone, address, schoolData, profData}){
    
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
                    (school) => <div className='schoolContent' key={uuidv4()}>
                    <div className='color'>
                        </div> <SchoolContentBlock name={school.name} degree={school.degree} startDate={school.startDate} endDate={school.endDate} />  
                    </div>
                )
            }
        </div>
        <div className='Experience'>
            <h4>Experience</h4>
            {
                profData.map(
                    (prof) => <div className='profContent' key={uuidv4()}>
                    <div className='color'>
                        </div> <ProfContentBlock company={prof.company} position={prof.position} responsibilities={prof.responsibilities} date={prof.date} />  
                    </div>
                )

            }
        </div>

    </div>
    )
};

