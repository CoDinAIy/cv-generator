import './form-section.css'

// eslint-disable-next-line react/prop-types
export default function FormSection({firstName, setFirstName, surname, setSurname, number, setNumber, email, setEmail, city, setCity, town, setTown, occupation, setOccupation, jobDescription, setJobDescription}) {

    return (
        <>
        <div className="form-section">

            <div className='fill-out'>FILL OUT</div>

            <div className='personal-info-container'>
                <div className='personal-info-title'>Personal Information</div>

                <div className="name-inputs">
                    <div className='forenameInput'>
                        <label htmlFor="forename">Forename</label>
                        <input type="text" id='forename' name='forename' defaultValue={firstName} onChange={(event) =>  setFirstName(event.target.value)} />
                    </div>
                    
                    <div className='surnameInput'>
                        <label htmlFor="surname">Surname</label>
                        <input type="text" id='surname' name='surname' defaultValue={surname} onChange={(event) =>  setSurname(event.target.value)}/> 
                    </div>
                </div>

                <div className="number-email-inputs">
                    <div className='numberInput'>
                        <label htmlFor="numberInput">Number</label>
                        <input type="text" id='numberInput' name='numberInput' defaultValue={number} onChange={(event) =>  setNumber(event.target.value)}/>
                    </div>
                    
                    <div className='emailInput'>
                        <label htmlFor="emailInput">E-mail</label>
                        <input type="text" id='emailInput' name='emailInput' defaultValue={email} onChange={(event) =>  setEmail(event.target.value)}/> 
                    </div>
                </div>

                <div className="location-inputs">
                    <div className='cityInput'>
                        <label htmlFor="cityInput">City</label>
                        <input type="text" id='cityInput' name='cityInput' defaultValue={city} onChange={(event) =>  setCity(event.target.value)}/>
                    </div>
                    
                    <div className='townInput'>
                        <label htmlFor="townInput">Town</label>
                        <input type="text" id='townInput' name='townInput' defaultValue={town} onChange={(event) =>  setTown(event.target.value)}/> 
                    </div>
                </div>

                <div className="current-job-inputs">
                    <div className='currentJob'>
                        <label htmlFor="currentJob">Current occupation</label>
                        <input type="text" id='currentJob' name='currentJob' defaultValue={'Financial Consultant'} onChange={(event) =>  setOccupation(event.target.value)}/>
                    </div>
                    
                    <div className='jobDescription'>
                        <label htmlFor="jobDescription">Job description</label>
                        <input type="text" id='jobDescription' name='jobDescription' defaultValue={'I work with clients to ensure their financial goals are met in an efficient and stress free way!'} onChange={(event) =>  setJobDescription(event.target.value)}/> 
                    </div>
                </div>
                <hr />
            </div>
                <div className="experience-container">
                    <div className='experience-title'>Experience</div>

                    <div className="experience-inputs">
                        <label htmlFor="position">Position</label>
                        <input type="text" id='position' name='position' />

                        <label htmlFor="company">Company</label>
                        <input type="date" id='company' name='company' />

                        <label htmlFor="startDateExperience">Start date</label>
                        <input type="date" id='startDateExperience' name='startDateExperience' />

                        <label htmlFor="endDateExperience">End date</label>
                        <input type="text" id='endDateExperience' name='endDateExperience' />

                        <label htmlFor="descriptionExperience">Experience</label>
                        <input type="text" id='descriptionExperience' name='descriptionExperience' />

                        <button className='submitExperience'>Submit experience</button>
                    </div>
                    <hr />
                </div>


                <div className="education-container">
                    <div className='education-title'>Education</div>

                    <div className="education-inputs">

                        <label htmlFor="educationLevel">Level of education</label>
                        <input type="text" id='educationLevel' name='educationLevel' />

                        <label htmlFor="institute">Institute</label>
                        <input type="date" id='institute' name='institute' />

                        <label htmlFor="startDateEducation">Start Date</label>
                        <input type="date" id='startDateEducation' name='startDateEducation' />

                        <label htmlFor="endDateEducation">End Date</label>
                        <input type="text" id='endDateEducation' name='endDateEducation' />

                        <label htmlFor="descriptionEducation">Description</label>
                        <input type="text" id='descriptionEducation' name='descriptionEducation' />

                        <button className='submitEducation'>Submit education</button>
                    </div>
                </div>
        </div>
        </>
    )
}