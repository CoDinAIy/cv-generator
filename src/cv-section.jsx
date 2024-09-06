import './cv-section.css'
function Information(props) {
    return (
        // eslint-disable-next-line react/prop-types
        <div className={props.class}>{props.text}</div>
    )
}

function ShowEducationCV({educations}) {


    if (!Array.isArray(educations)) {
        return <li className='listItem'>Add education here</li>;
    }

    if (educations.length === 0) {
        return <li className='listItem'>Add education here</li>
    }

    return (
        <>
            {educations.map((education, index) => {
                return  <li className='listItem' key={index}>
                    <div className='date'>{education.startDateEducation} - {education.endDateEducation}</div>
                    <div className='title'>{education.educationLevel} at {education.institute}</div>
                    <div className='description'>{education.descriptionEducation}</div>
                </li>
            })}
        </>
    )
}

function ShowExperiencesCV({experiences}) {

    if (!Array.isArray(experiences)) {
        return <li className='listItem'>Add experiences here</li>;
    }

    if (experiences.length === 0) {
        return <li className='listItem'>Add experiences here</li>
    }

    return (
        <>
            {experiences.map((experience, index) => {
                return  <li className='listItem' key={index}>
                    <div className='date'>{experience.startDateExperiences} - {experience.endDateExperiences}</div>
                    <div className='title'>{experience.position} at {experience.company}</div>
                    <div className='description'>{experience.descriptionExperiences}</div>
                </li>
            })}
        </>
    )
}

// eslint-disable-next-line react/prop-types
export default function CvSection({firstName, surname, number, email, city, town, occupation, jobDescription, experiences, educations}) {

    return (
        <div className="cv-section">
            <div className="personal-info">
                <Information class='full-name' text={`${firstName} ${surname}`}></Information>
                <Information class='number-email' text={`${number} ${email}`}></Information>
                <Information class='location' text={`${city}, ${town}`}></Information>
            </div>

            <div className="current-occupation">
                <Information class='header' text={occupation}></Information>
                <Information class='job-description' text={jobDescription}></Information>
            </div>

            <ul className="header">Experience
                <ShowExperiencesCV experiences={experiences}/>
            </ul>
            <ul className="header">Education
               <ShowEducationCV educations={educations}/>
            </ul>
        </div>
    )
}