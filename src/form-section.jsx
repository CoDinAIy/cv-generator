import './form-section.css'
import { useState } from 'react';
function Input({name, text, type, value, setter}) {
    return (
        <div className={`${name}Input`}>
            <label htmlFor={name}>{text ? text : `${name[0].toUpperCase()}${name.slice(1)}`}</label>
            <input required type={type} id={name} name={name} defaultValue={value} onChange={setter ? (event) => setter(event.target.value) : undefined}/>
        </div>
    )
}

function ShowExperiencesForm({experiences}) {
    return (
        experiences.map((experience) => {
            return <div key={experience}>
                {experience.position}
            </div>
        })

    )
}

// eslint-disable-next-line react/prop-types
export default function FormSection({firstName, setFirstName, surname, setSurname, number, setNumber, email, setEmail, city, setCity, town, setTown, occupation, setOccupation, jobDescription, setJobDescription, onExperience, experiences}) {
    
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

  
    const handleExperiences = (event) => {
        event.preventDefault()
        const newExperience = {position, company, startDateExperiences, endDateExperiences, descriptionExperiences}
        onExperience(newExperience)

        console.log('new experience =')
        console.log(newExperience)
        console.log('updated experience =')
        console.log(experiences)
    }


    const handleEducation = (event) => {
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

            <form action='#' method='get' className="experience-container">
                <div className='experience-title'>Experience</div>
                <div className="experience-inputs">
                    <Input name='position' type='text' setter={setPosition}></Input>
                    <Input name='company' type='text' setter={setCompany}></Input>
                    <Input name='startDateExperience' text='Start date' type='date' setter={setStartDateExperiences}></Input>
                    <Input name='endDateExperience' text='End date' type='date' setter={setEndDateExperiences}></Input>
                    <Input name='descriptionExperience' text='Description' type='text' setter={setDescriptionExperiences}></Input>
                    <button type='submit' className='submitExperience' onClick={handleExperiences}>Submit experience</button>
                    <ShowExperiencesForm experiences={experiences}/>
                </div>
                <hr />
            </form>


            <form action='#' method='get' className="education-container" onSubmit={handleEducation}>
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