import './cv-section.css'



// eslint-disable-next-line react/prop-types
export default function CvSection({firstName, surname, number, email, city, town, occupation, jobDescription}) {


    return (
        <div className="cv-section">
            <div className="personal-info">
                <div className="full-name">{firstName} {surname}</div>
                <div className="number-email">{number} {email}</div>
                <div className="location">{city}, {town}</div>
            </div>

            <div className="current-occupation">
                <div className='header'>{occupation}</div>
                <p className='job-description'>{jobDescription}</p>
            </div>

            <div className="header">Experience</div>
            <div className="header">Education</div>
        </div>
    )
}