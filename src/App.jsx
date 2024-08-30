import './App.css'
import { useState } from 'react'
import FormSection from './form-section'
import CvSection from './cv-section'

function App() {
  const [firstName, setFirstName] = useState('John')
  const [surname, setSurname] = useState('Doe')
  const [number, setNumber] = useState('07982398728')
  const [email, setEmail] = useState('real@real.com')
  const [city, setCity] = useState('coolCity')
  const [town, setTown] = useState('Realtown')
  const [occupation, setOccupation] = useState('Financial Consultant')
  const [jobDescription, setJobDescription] = useState('I work with clients to ensure their financial goals are met in an efficient and stress free way!')




  return (
    <>
    <div className="title">
      <h1>GENER8TOR</h1>
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
      />
      
    <CvSection firstName={firstName} surname={surname} number={number} email={email} city={city} town={town} occupation={occupation} jobDescription={jobDescription}/>
    </div>
    </>
  )
}

export default App
