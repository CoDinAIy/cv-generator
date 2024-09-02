import './cv-section.css'
function Information(props) {
    return (
        // eslint-disable-next-line react/prop-types
        <div className={props.class}>{props.text}</div>
    )
}

function ShowExperiencesCV({experiences}) {

    console.log('experiences to list =')
    console.log(experiences)


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
                            <div>{experience.startDateExperiences} to {experience.endDateExperiences}</div>
                            <div>{experience.position} at {experience.company}</div>
                            <div>{experience.descriptionExperiences}</div>
                        </li>
            })}
        </>
    )
}

// eslint-disable-next-line react/prop-types
export default function CvSection({firstName, surname, number, email, city, town, occupation, jobDescription, experiences}) {

    console.log('experiences to pass')
    console.log(experiences)

    return (
        <div className="cv-section">
            <div className="personal-info">
                <Information class='full-name' text={`${firstName} ${surname}`}></Information>
                <Information class='number-email' text={`${number} ${email}`}></Information>
                <Information class='location' text={`${city} ${town}`}></Information>
            </div>

            <div className="current-occupation">
                <Information class='occupationTitle' text={occupation}></Information>
                <Information class='job-description' text={jobDescription}></Information>
            </div>

            <ul className="header">Experience
                <ShowExperiencesCV experiences={experiences}/>
            </ul>
            <ul className="header">Education</ul>
        </div>
    )
}