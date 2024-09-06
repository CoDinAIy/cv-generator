import './App.css'
import { useState } from 'react'
import FormSection from './form-section'
import CvSection from './cv-section'

function App() {
  const [firstName, setFirstName] = useState('John')
  const [surname, setSurname] = useState('Doe')
  const [number, setNumber] = useState('07923583981')
  const [email, setEmail] = useState('JohnDoe@fakeMail.com')
  const [city, setCity] = useState('Mycity')
  const [town, setTown] = useState('Doetown')
  const [occupation, setOccupation] = useState('Financial Consultant')
  const [jobDescription, setJobDescription] = useState('I work with clients to ensure their financial goals are met in an efficient and stress free way!')

  const [experiences, setExperiences] = useState([{position:'Web developer', company:'Google', startDateExperiences:'04-09-2023', endDateExperiences:'23-02-2024', descriptionExperiences:'I worked on refactoring previous code to ensure browser compatibility', isEditing: false}])

  const [educations, setEducations] = useState([{educationLevel:`A-Level's`, descriptionEducation:'3 A levels including 2 A* in biology and psychology', institute:'Nasa lma0', isEditing: false, startDateEducation:'07-09-2018', endDateEducation:'04/05/2020'}])

  const addExperience = (experience) => {
    setExperiences([...experiences, experience])
  }

  const addEducation = (education) => {
    setEducations([...educations, education])
  }

  return (
    <>
    <div className="cvTitle">
      <h1>CV Generator</h1>
    </div>
    <div className="container">
    <FormSection

     firstName={firstName} 
     setFirstName={setFirstName}
     surname={surname}
     setSurname={setSurname}
     number={number}
     setNumber={setNumber}
     email={email}
     setEmail={setEmail}
     city={city}
     setCity={setCity}
     town={town}
     setTown={setTown}
     occupation={occupation}
     setOccupation={setOccupation}
     jobDescription={jobDescription}
     setJobDescription={setJobDescription}
     onExperience={addExperience}
     experiences={experiences}
     setExperiences={setExperiences}
     onEducation={addEducation}
     educations={educations}
     setEducations={setEducations}
      />
      
    <CvSection firstName={firstName} surname={surname} number={number} email={email} city={city} town={town} occupation={occupation} jobDescription={jobDescription} experiences={experiences} educations={educations}/>
    </div>
    </>
  )
}

export default App
