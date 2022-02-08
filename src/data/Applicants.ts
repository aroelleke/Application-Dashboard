import { v4 as uuidv4 } from "uuid"
import Applicant from "../datatypes/Applicant"



const jobs: Array<Applicant> = [
    { id: uuidv4(), name: "Jonah" },
    { id: uuidv4(), name: "Justus" },
    { id: uuidv4(), name: "Maximilian" },
    { id: uuidv4(), name: "Jan" },
    { id: uuidv4(), name: "Marco" },
]

export default jobs