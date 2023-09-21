import "./styles/Education.css"
import { useState, useEffect } from "react"
import { EducationType } from "../assets/types"

interface EducationProps {
  education: EducationType
}

const Education: React.FC<EducationProps> = ({ education }) => {
  const [educationData, setEducationData] = useState<EducationType>(education)
  const [isEditingEducation, setIsEditingEducation] = useState(false)

  const isValidated = (): boolean => {
    for (const fieldValue of Object.values(educationData)) {
      if (!fieldValue) {
        return false
      }
    }
    return true
  }

  const handleCancel = () => {
    setEducationData(education)
    setIsEditingEducation(false)
  }

  useEffect(() => {
    setEducationData(education)
  }, [education])

  return (
    <div id="education">
      <div id="education-inputs">
        {Object.keys(educationData).map(fieldName => {
          if (fieldName === "id") return null
          return (
            <div className={fieldName} key={`${fieldName}-${educationData.id}`}>
              <label htmlFor={`${fieldName}-${educationData.id}`}> {fieldName}</label>
              <input
                required
                type="text"
                autoComplete={fieldName}
                disabled={!isEditingEducation}
                id={`${fieldName}-${educationData.id}`}
                value={educationData[fieldName as keyof EducationType]}
                onChange={e =>
                  setEducationData((educationData: EducationType) => ({
                    ...educationData,
                    [fieldName as keyof EducationType]: e.target.value,
                  }))
                }
              />
            </div>
          )
        })}
      </div>
      <div className="buttons">
        {isEditingEducation ? (
          <>
            <button className="cancel-btn" onClick={handleCancel}>
              Cancel
            </button>
            <button className="save-btn" disabled={!isValidated()} onClick={() => setIsEditingEducation(false)}>
              Save
            </button>
          </>
        ) : (
          <button className="edit-btn" onClick={() => setIsEditingEducation(true)}>
            Edit
          </button>
        )}
      </div>
    </div>
  )
}

export default Education
