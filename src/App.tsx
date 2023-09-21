import "./Apps.css"
import anna from "./assets/anna.json"
import Profile from "./components/Profile"
import Education from "./components/Education"
import Experience from "./components/Experience"

function App() {
  return (
    <>
      <Profile profile={anna.profile} />
      <h3>Professional Experiences</h3>
      {anna.experiences.map(experience => {
        return <Experience key={experience.id} experience={experience} />
      })}
      <h3>Education</h3>
      {anna.education.map(education => {
        return <Education key={education.id} education={education} />
      })}
    </>
  )
}

export default App
