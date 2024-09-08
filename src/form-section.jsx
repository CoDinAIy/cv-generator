import './form-section.css'
import { useState } from 'react';


// eslint-disable-next-line react/prop-types
function Input({name, text, type, value, setter}) {
    return (
        <div className={`${name}Input`}>
            <label htmlFor={name}>{text ? text : `${name[0].toUpperCase()}${name.slice(1)}`}</label>
            <input required type={type} id={name} name={name} value={value} onChange={(event) => setter(event.target.value)}/>
        </div>
    )
}

function ShowExperiencesForm({experiences, setExperiences, setPosition, setCompany, setStartDateExperiences, setEndDateExperiences, setDescriptionExperiences, editMode, setEditMode, position, company, startDateExperiences, endDateExperiences, descriptionExperiences}) {

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
    
    const EditExperience = (event, experience) => {
        event.preventDefault();
    
        const isEditing = !experience.isEditing;
    
        setEditMode(isEditing);
    
        if (isEditing) {
            setPosition(experience.position);
            setCompany(experience.company);
            setStartDateExperiences(experience.startDateExperiences);
            setEndDateExperiences(experience.endDateExperiences);
            setDescriptionExperiences(experience.descriptionExperiences);
        } else {

            setPosition('');
            setCompany('');
            setStartDateExperiences('');
            setEndDateExperiences('');
            setDescriptionExperiences('');
    
            const updatedExperience = {
                position, 
                company, 
                startDateExperiences, 
                endDateExperiences, 
                descriptionExperiences,
                isEditing: false, 
            };
    
            setExperiences(prev =>
                prev.map(exp =>
                    exp.position === experience.position ? updatedExperience : exp
                )
            );
        }
    
        setExperiences(prev =>
            prev.map(exp =>
                exp.position === experience.position ? { ...exp, isEditing } : exp
            )
        );
    };
    

    return (
        experiences.map((experience) => (
                <div key={experience.position} className='currentExperiences'>
                {experience.position}
                
                {!editMode ? 
                (
                    <>
                    <div className="buttonContainer">
                        <button
                            onClick={(event) => EditExperience(event, experience, setExperiences, editMode, setEditMode)} className='modify'>Edit
                        </button>
                        <button 
                            onClick={(event) => DeleteExperience(event, experiences, experience, setExperiences)} key={experience.position} className='modify'>X
                        </button>
                    </div>
                    </>
                ) 
                : (
                    experience.isEditing && 
                    (
                        <>
                            <button 
                                onClick={(event) => EditExperience(event, experience, setExperiences, editMode, setEditMode)} className='modify'>Done
                            </button>
                        </>
                    )   
                )}
            </div>
        ))
    )}

    function ShowEducationsForm({educations, setEducations, setEducationLevel, setInstitute, setStartDateEducation, setEndDateEducation, setDescriptionEducation, editMode, setEditMode, educationLevel, institute, startDateEducation, endDateEducation, descriptionEducation, other, setOther, setIsOther}) {

        const DeleteEducation = (event, educations, education, setEducations) => {
            event.preventDefault()
        
            const newEducation = educations.filter(ed => ed !== education)
        
            setEducations(newEducation)
    
            setEducationLevel('')
            setInstitute('')
            setStartDateEducation('')
            setEndDateEducation('')
            setDescriptionEducation('')
        
        }
        
        const EditEducation = (event, education) => {
            event.preventDefault();
        
            const isEditing = !education.isEditing;
        
            setEditMode(isEditing);
        
            if (isEditing) {
                setEducationLevel(education.educationLevel);
                setInstitute(education.institute);
                setStartDateEducation(education.startDateEducation);
                setEndDateEducation(education.endDateEducation);
                setDescriptionEducation(education.descriptionEducation);
            } else {

                const finalEducationLevel = educationLevel === 'other' ? other : educationLevel;

    
                setEducationLevel('')
                setInstitute('')
                setStartDateEducation('')
                setEndDateEducation('')
                setDescriptionEducation('')
        
                const updatedEducation = {
                    educationLevel: finalEducationLevel, 
                    institute, 
                    startDateEducation, 
                    endDateEducation, 
                    descriptionEducation,
                    isEditing: false, 
                };

                console.log(updatedEducation)
                console.log(education)
        
                setEducations(prev =>
                    prev.map(ed =>
                        ed.educationLevel === education.educationLevel ? updatedEducation : ed
                    )
                );
            }
        
            setEducations(prev =>
                prev.map(ed =>
                    ed.educationLevel === education.educationLevel ? { ...ed, isEditing } : ed
                )
            );
        };
        
    
        return (
            educations.map((education) => (
                    <div key={education.institute} className='currentEducations'>
                    {education.educationLevel}
                    
                    {!editMode ? 
                    (
                        <>
                            <div className="buttonContainer">
                                <button 
                                    onClick={(event) => EditEducation(event, education, setEducations, editMode, setEditMode)} className='modify'>Edit
                                </button>
                                <button 
                                    onClick={(event) => DeleteEducation(event, educations, education, setEducations)} key={education.institute} className='modify'>X
                                </button>
                            </div>
                        </>
                    ) 
                    : (
                        education.isEditing && 
                        (
                            <>
                                <button 
                                    onClick={(event) => EditEducation(event, education, setEducations, editMode, setEditMode)} className='modify'>Done
                                </button>
                            </>
                        )   
                    )}
                </div>
            ))
        )}

// eslint-disable-next-line react/prop-types
export default function FormSection({firstName, setFirstName, surname, setSurname, number, setNumber, email, setEmail, city, setCity, town, setTown, occupation, setOccupation, jobDescription, setJobDescription, onExperience, experiences, setExperiences, onEducation, educations, setEducations}) {
    
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
        const [isOther, setIsOther] = useState(false)
        const [other, setOther] = useState('')

        const checkEducation = (value) => {
            console.log(value)
            if (value === 'other') {
                setIsOther(true)
                setEducationLevel(value)

            } else {
                setEducationLevel(value)
                setIsOther(false)
            }
        }

        const [editMode, setEditMode] = useState(false)

  
    const HandleExperiences = (event) => {
        event.preventDefault()

        if (!editMode) {
            const newExperience = {
                position, 
                company, 
                startDateExperiences, 
                endDateExperiences, 
                descriptionExperiences,
                isEditing: false,
            }

            console.log(newExperience)
            onExperience(newExperience)
    
            setPosition('')
            setCompany('')
            setStartDateExperiences('')
            setEndDateExperiences('')
            setDescriptionExperiences('')
        }

        console.log(experiences)

    }


    const HandleEducation = (event) => {
        console.log(`educationLevel = ${educationLevel}`)
        console.log(`other = ${other}`)
        event.preventDefault()

        const finalEducationLevel = educationLevel === 'other' ? other : educationLevel;


        if (!educationLevel) {
            return null
        }

        if (!editMode) {
            const newEducation = {
                educationLevel: finalEducationLevel, 
                institute, 
                startDateEducation, 
                endDateEducation, 
                descriptionEducation,
                isEditing: false,
            }

            console.log(newEducation)
            console.log(educations)

            onEducation(newEducation)

            setEducationLevel('')
            setInstitute('')
            setStartDateEducation('')
            setEndDateEducation('')
            setDescriptionEducation('')
            setOther('')
    
        }
        console.log(educations)
    }

    return (
        <>
        <div className="form-section">
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
                    <div className="jobDescriptionInput">
                        <label htmlFor='jobDescription'>Job description</label>
                        <textarea rows='3' className='jobDescription' value={jobDescription} onChange={(event) => setJobDescription(event.target.value)}></textarea>
                    </div>
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
                    <div className="descriptionExperienceInput">
                        <label htmlFor='descriptionExperience'>Description</label>
                        <textarea rows='3' className='descriptionExperience' value={descriptionExperiences} onChange={(event) => setDescriptionExperiences(event.target.value)}></textarea>
                    </div>
                    {!editMode ? <button type='submit' className='submitExperience'>Submit experience</button> : null}                    
                </div>
                    <ShowExperiencesForm 
                    position={position}
                    company={company}
                    startDateExperiences={startDateExperiences}
                    endDateExperiences={endDateExperiences}
                    descriptionExperiences={descriptionExperiences}
                    experiences={experiences} 
                    setExperiences={setExperiences}
                    setPosition={setPosition} 
                    setCompany={setCompany} 
                    setStartDateExperiences={setStartDateExperiences} 
                    setEndDateExperiences={setEndDateExperiences} 
                    setDescriptionExperiences={setDescriptionExperiences}
                    editMode={editMode}
                    setEditMode={setEditMode}/>
                <hr />
            </form>


            <form action='#' method='get' className="education-container" onSubmit={HandleEducation}>
                <div className='education-title'>Education</div>

                <div className="education-inputs">

                <div className='educationLevelInput'>
                    <label htmlFor='educationLevel'>Level of education</label>
                    <select name="educationLevel" id="educationLevel" onChange={(event) => checkEducation(event.target.value)} value={educationLevel}>
                        <option value="choose-option">--Choose an option--</option>
                        <option value="GCSE's">GCSE</option>
                        <option value="A-levels">A-levels</option>
                        <option value="Bachelors degree">Bachelors degree</option>
                        <option value="Masters degree">Masters degree</option>
                        <option value="Phd">Phd</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                    {isOther ? <Input name={'other'} type={'text'} setter={setOther} value={other}></Input> : null}
                    <Input name='institute' type='text' setter={setInstitute} value={institute}></Input>
                    <Input name='startDateEducation' text='Start date' type='date' setter={setStartDateEducation} value={startDateEducation}></Input>
                    <Input name='endDateEducation' text='End date' type='date' setter={setEndDateEducation} value={endDateEducation}></Input>
                    <div className="descriptionEducationInput">
                        <label htmlFor='descriptionEducation'>Description</label>
                        <textarea rows='3' className='descriptionEducation' value={descriptionEducation} onChange={(event) => startDateEducation(event.target.value)}></textarea>
                    </div>
                    {!editMode ? <button type='submit' className='submitEducation'>Submit education</button> : null}                    
                </div>
                    <ShowEducationsForm
                    educations={educations} 
                    setEducations={setEducations}
                    educationLevel={educationLevel}
                    institute={institute} 
                    startDateEducation={startDateEducation} 
                    endDateEducation={endDateEducation} 
                    descriptionEducation={descriptionEducation} 
                    other={other}
                    setEducationLevel={setEducationLevel} 
                    setInstitute={setInstitute} 
                    setStartDateEducation={setStartDateEducation} 
                    setEndDateEducation={setEndDateEducation}
                    setDescriptionEducation={setDescriptionEducation}
                    setOther={setOther}
                    setIsOther={setIsOther}
                    editMode={editMode}
                    setEditMode={setEditMode}
                    />
            </form>
        </div>
        </>
    )
}