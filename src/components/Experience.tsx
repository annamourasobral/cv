import "./styles/Experience.css"
import { ExperienceType } from "../assets/types"
import React, { useState, useEffect } from "react"

interface ExperienceProps {
  experience: ExperienceType
}

const Experience: React.FC<ExperienceProps> = ({ experience }) => {
  const [experienceData, setExperienceData] = useState<ExperienceType>(experience)
  const [isEditingExperience, setIsEditingExperience] = useState(false)

  const isValidated = (): boolean => {
    for (const fieldValue of Object.values(experienceData)) {
      if (!fieldValue) {
        return false
      }
    }
    return true
  }

  const handleCancel = () => {
    setExperienceData(experience)
    setIsEditingExperience(false)
  }

  useEffect(() => {
    setExperienceData(experience)
  }, [experience])

  return (
    <div id="experience">
      <div id="experience-inputs">
        {Object.keys(experienceData).map(fieldName => {
          if (fieldName === "id") {
            return null
          } else if (fieldName === "Activities") {
            return (
              <div key={`Activities-${experience.id}`} className="Activities">
                <label htmlFor={`Activities-${experience.id}`}> {fieldName}</label>
                <textarea
                  required
                  disabled={!isEditingExperience}
                  id={`Activities-${experience.id}`}
                  value={experienceData.Activities}
                  onChange={e =>
                    setExperienceData(experienceData => ({
                      ...experienceData,
                      [fieldName as keyof ExperienceType]: e.target.value,
                    }))
                  }
                />
              </div>
            )
          } else {
            return (
              <div key={`${fieldName}-${experience.id}`} className={fieldName}>
                <label htmlFor={`${fieldName}-${experience.id}`}> {fieldName}</label>
                <input
                  required
                  type="text"
                  disabled={!isEditingExperience}
                  id={`${fieldName}-${experience.id}`}
                  value={experienceData[fieldName as keyof ExperienceType]}
                  onChange={e =>
                    setExperienceData(experienceData => ({
                      ...experienceData,
                      [fieldName as keyof ExperienceType]: e.target.value,
                    }))
                  }
                />
              </div>
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
            <button className="save-btn" disabled={!isValidated()} onClick={() => setIsEditingExperience(false)}>
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
