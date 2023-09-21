import "./styles/Profile.css"
import { useEffect, useState } from "react"
import { ProfileType } from "../assets/types"

interface ProfileProps {
  profile: ProfileType
}

const Profile: React.FC<ProfileProps> = ({ profile }) => {
  const [profileData, setProfileData] = useState<ProfileType>(profile)
  const [isEditingProfile, setIsEditingProfile] = useState<boolean>(false)

  const handleCancel = () => {
    setProfileData(profile)
    setIsEditingProfile(false)
  }

  const isValidated = (): boolean => {
    for (const fieldValue of Object.values(profileData)) {
      if (!fieldValue) {
        return false
      }
    }
    return true
  }

  useEffect(() => {
    setProfileData(profile)
  }, [profile])

  return (
    <>
      <div id="profile">
        <div id="profile-inputs">
          {Object.keys(profileData).map(fieldName => {
            if ((fieldName === "linkedin" && !isEditingProfile) || (fieldName === "github" && !isEditingProfile)) {
              return (
                <div
                  id={fieldName}
                  key={fieldName}
                  className={fieldName}
                  onClick={() => {
                    window.open(`${profileData[fieldName as keyof ProfileType]}`, "_blank")
                  }}
                >
                  {profileData[fieldName as keyof ProfileType]}
                </div>
              )
            } else {
              return (
                <input
                  required
                  type="text"
                  id={fieldName}
                  key={fieldName}
                  className={fieldName}
                  autoComplete={fieldName}
                  disabled={!isEditingProfile}
                  value={profileData[fieldName as keyof ProfileType]}
                  onChange={e =>
                    setProfileData(profileData => ({
                      ...profileData,
                      [fieldName as keyof ProfileType]: e.target.value,
                    }))
                  }
                />
              )
            }
          })}
        </div>
      </div>
      <div className="buttons">
        {isEditingProfile ? (
          <>
            <button className="cancel-btn" onClick={handleCancel}>
              Cancel
            </button>
            <button className="save-btn" disabled={!isValidated()} onClick={() => setIsEditingProfile(false)}>
              Save
            </button>
          </>
        ) : (
          <button className="edit-btn" onClick={() => setIsEditingProfile(true)}>
            Edit
          </button>
        )}
      </div>
    </>
  )
}

export default Profile
