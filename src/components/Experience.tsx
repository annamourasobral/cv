import React, { useState, useEffect } from "react"

type ExperienceType = {
  id: number
  title: string
  company: string
  description: string
  startDate: string
  endDate: string
  location: string
}

interface ExperienceProps {
  experience: ExperienceType
}

const Experience: React.FC<ExperienceProps> = ({ experience }) => {
  const [isEditingExperience, setIsEditingExperience] = useState(false)
  const [experienceData, setExperienceData] = useState<ExperienceType>(experience)

  useEffect(() => {
    setExperienceData(experience)
  }, [experience])

  const handleInputChange = (fieldName: keyof ExperienceType, value: string) => {
    setExperienceData(prevExperienceData => ({
      ...prevExperienceData,
      [fieldName]: value,
    }))
  }

  const handleCancel = () => {
    setExperienceData(experience)
    setIsEditingExperience(false)
  }

  return (
    <div id="experience">
      <div id="inputs">
        {Object.keys(experienceData).map(fieldName => {
          if (fieldName === "id") {
            return null
          } else if (fieldName === "description") {
            return (
              <textarea
                key={`description-${experienceData.id}`}
                id={`description-${experienceData.id}`}
                className="description"
                value={experienceData.description}
                onChange={e => handleInputChange("description", e.target.value)}
                disabled={!isEditingExperience}
              />
            )
          } else {
            return (
              <input
                key={`${fieldName}-${experienceData.id}`}
                id={`${fieldName}-${experienceData.id}`}
                className={fieldName}
                type="text"
                value={experienceData[fieldName as keyof ExperienceType]}
                onChange={e => handleInputChange(fieldName as keyof ExperienceType, e.target.value)}
                disabled={!isEditingExperience}
              />
            )
          }
        })}
      </div>
      <div className="buttons">
        {isEditingExperience ? (
          <>
            <button className="cancel-btn" onClick={handleCancel}>
              Cancel
            </button>
            <button className="save-btn" onClick={() => setIsEditingExperience(false)}>
              Save
            </button>
          </>
        ) : (
          <button className="edit-btn" onClick={() => setIsEditingExperience(true)}>
            Edit
          </button>
        )}
      </div>
    </div>
  )
}

export default Experience
