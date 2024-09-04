import './form-section.css'
import { useState } from 'react';


function Input({name, text, type, value, setter}) {
    return (
        <div className={`${name}Input`}>
            <label htmlFor={name}>{text ? text : `${name[0].toUpperCase()}${name.slice(1)}`}</label>
            <input required type={type} id={name} name={name} value={value} onChange={(event) => setter(event.target.value)}/>
        </div>
    )
}

function ShowExperiencesForm({experiences, setExperiences, setPosition, setCompany, setStartDateExperiences, setEndDateExperiences, setDescriptionExperiences, editMode, setEditMode}) {

    console.log(`editmode is ${editMode}`)
    const DeleteExperience = (event, experiences, experience, setExperiences) => {
        event.preventDefault()
    
        const newExperiences = experiences.filter(exp => exp !== experience)
    
        setExperiences(newExperiences)

        setPosition('')
        setCompany('')
        setStartDateExperiences('')
        setEndDateExperiences('')
        setDescriptionExperiences('')
    
    }
    
    const EditExperience = (event, experience, setExperiences, editMode, setEditMode) => {
        
        event.preventDefault()

        setPosition(experience.position)
        setCompany(experience.company)
        setStartDateExperiences(experience.startDateExperiences)
        setEndDateExperiences(experience.endDateExperiences)
        setDescriptionExperiences(experience.descriptionExperiences)

        if (experience.isEditing) {
            experience.isEditing = false
            setEditMode(false)
        } else {
            experience.isEditing = true
            setEditMode(true)
        }

        setExperiences(prev => prev.map(exp => exp.position === experience.position ? experience : exp))

        experiences.map((experience) => {
            {experience.isEditing === true ? console.log('editing') : console.log('done')}
        })
        console.log(experiences)
        console.log(editMode)

    }
    return (
        experiences.map((experience) => (
                <div key={experience.position}>
                {experience.position}
                
                {!editMode ? 
                (
                    <>
                        <button 
                            onClick={(event) => EditExperience(event, experience, setExperiences, editMode, setEditMode)} className={experience.position}>{experience.isEditing === false ? 'Edit' : 'Done'}
                        </button>
                        <button 
                            onClick={(event) => DeleteExperience(event, experiences, experience, setExperiences)} key={experience.position} className={experience.position}>X
                        </button>
                    </>
                ) 
                : (
                    experience.isEditing && 
                    (
                        <>
                            <button 
                                onClick={(event) => EditExperience(event, experience, setExperiences, editMode, setEditMode)} className={experience.position}>{experience.isEditing === false ? 'Edit' : 'Done'}
                            </button>
                        </>
                    )   
                )}
            </div>
        ))
    )}

// eslint-disable-next-line react/prop-types
export default function FormSection({firstName, setFirstName, surname, setSurname, number, setNumber, email, setEmail, city, setCity, town, setTown, occupation, setOccupation, jobDescription, setJobDescription, onExperience, experiences, setExperiences}) {
    
        const [position, setPosition] = useState('');
        const [company, setCompany] = useState('');
        const [startDateExperiences, setStartDateExperiences] = useState('');
        const [endDateExperiences, setEndDateExperiences] = useState('');
        const [descriptionExperiences, setDescriptionExperiences] = useState('');
    
        const [educationLevel, setEducationLevel] = useState('');
        const [institute, setInstitute] = useState('');
        const [startDateEducation, setStartDateEducation] = useState('');
        const [endDateEducation, setEndDateEducation] = useState('');
        const [descriptionEducation, setDescriptionEducation] = useState('');

        const [editMode, setEditMode] = useState(false)

  
    const HandleExperiences = (event) => {
        event.preventDefault()

            const newExperience = {
                position, 
                company, 
                startDateExperiences, 
                endDateExperiences, 
                descriptionExperiences,
                isEditing: false,
            }
            onExperience(newExperience)

            setPosition('')
            setCompany('')
            setStartDateExperiences('')
            setEndDateExperiences('')
            setDescriptionExperiences('')
            console.log(editMode)
    }


    const HandleEducation = (event) => {
        event.preventDefault()
        console.log({
            educationLevel,
            institute,
            startDateEducation,
            endDateEducation,
            descriptionEducation,
        })
    }

    return (
        <>
        <div className="form-section">

            <div className='fill-out'>FILL OUT</div>

            <form action='#' method='get' className='personal-info-container'>
                <div className='personal-info-title'>Personal Information</div>

                <div className="name-inputs">
                    <Input name='forename' type='text' value={firstName} setter={setFirstName}></Input>
                    <Input name='surname' type='text' value={surname} setter={setSurname}></Input>                            
                </div>

                <div className="number-email-inputs">
                    <Input name='number' type='text' value={number} setter={setNumber}></Input>
                    <Input name='email' type='email' value={email} setter={setEmail}></Input>
                </div>

                <div className="location-inputs">
                    <Input name='city' type='text' value={city} setter={setCity}></Input>
                    <Input name='town' type='text' value={town} setter={setTown}></Input>
                </div>

                <div className="current-job-inputs">
                    <Input name='currentJob' text='Current occupation' type='text' value={occupation} setter={setOccupation}></Input>
                    <Input name='jobDescription' text='Job description' type='text' value={jobDescription} setter={setJobDescription}></Input>
                </div>
                <hr />
            </form>

            <form onSubmit={HandleExperiences} action='#' method='get' className="experience-container">
                <div className='experience-title'>Experience</div>
                <div className="experience-inputs">
                    <Input name='position' type='text' setter={setPosition} value={position}></Input>
                    <Input name='company' type='text' setter={setCompany} value={company}></Input>
                    <Input name='startDateExperience' text='Start date' type='date' setter={setStartDateExperiences} value={startDateExperiences}></Input>
                    <Input name='endDateExperience' text='End date' type='date' setter={setEndDateExperiences} value={endDateExperiences}></Input>
                    <Input name='descriptionExperience' text='Description' type='text' setter={setDescriptionExperiences} value={descriptionExperiences}></Input>
                    <button type='submit' className='submitExperience'>Submit experience</button>
                    <ShowExperiencesForm 
                    experiences={experiences} 
                    setExperiences={setExperiences} 
                    setPosition={setPosition} 
                    setCompany={setCompany} 
                    setStartDateExperiences={setStartDateExperiences} 
                    setEndDateExperiences={setEndDateExperiences} 
                    setDescriptionExperiences={setDescriptionExperiences}
                    editMode={editMode}
                    setEditMode={setEditMode}/>
                </div>
                <hr />
            </form>


            <form action='#' method='get' className="education-container" onSubmit={HandleEducation}>
                <div className='education-title'>Education</div>

                <div className="education-inputs">

                <div className='educationLevelInput'>
                    <label htmlFor='educationLevel'>Level of education</label>
                    <select name="educationLevel" id="educationLevel" onChange={setEducationLevel}>
                        <option value="choose-option">--Choose an option--</option>
                        <option value="high-school">GCSE &#40;or equivalent&#41;</option>
                        <option value="college">A-levels &#40;or equivalent&#41;</option>
                        <option value="bachelors">Bachelors degree</option>
                        <option value="masters">Masters degree</option>
                        <option value="phd">Phd</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                    <Input name='institute' type='text' setter={setInstitute}></Input>
                    <Input name='startDateEducation' text='Start date' type='date' setter={setStartDateEducation}></Input>
                    <Input name='endDateEducation' text='End date' type='date' setter={setEndDateEducation}></Input>
                    <Input name='descriptionEducation' text='Description' type='text' setter={setDescriptionEducation}></Input>
                    <button type='submit' className='submitEducation'>Submit education</button>
                </div>
            </form>
        </div>
        </>
    )
}