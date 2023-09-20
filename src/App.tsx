import Experience from "./components/Experience"
import Header from "./components/Header"
import experiences from "./assets/experiences.json"
import "./Apps.css"

function App() {
  return (
    <>
      <div id="header">
        <Header />
      </div>
      <div id="experiences">
        <h3>Professional Experiences</h3>
        {experiences.map(experience => {
          return <Experience key={experience.id} experience={experience} />
        })}
      </div>
    </>
  )
}

export default App
