export type AnnaType = {
  profile: ProfileType
  experiences: ExperienceType[]
  education: EducationType[]
}

export type ProfileType = {
  name: string
  profession: string
  email: string
  phone: string
  linkedin: string
  github: string
}

export type ExperienceType = {
  id: number
  Position: string
  Company: string
  Activities: string
  Start: string
  End: string
  Location: string
}

export type EducationType = {
  id: number
  University: string
  Degree: string
  Conclusion: string
  Grade: string
}
