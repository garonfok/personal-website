import { saveAs } from "file-saver"

export const downloadResume = () => {
  const RESUME_FILE_NAME = "Garon_Fok-resume"
  saveAs(`${process.env.PUBLIC_URL}/resume.pdf`, `${RESUME_FILE_NAME}.pdf`)
}
