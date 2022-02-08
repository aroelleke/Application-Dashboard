import { v4 as uuidv4 } from "uuid"
import Job from "../datatypes/Job"



const jobs: Array<Job> = [
    { id: uuidv4(), title: "Frontend Entwickler/in", description: "Gesucht wird ein Entwickler im Frontend Bereich."},
    { id: uuidv4(), title: "Backend Entwickler/in", description: "Gesucht wird ein Entwickler im Backend Bereich."},
    { id: uuidv4(), title: "Java Entwickler/in", description: "Gesucht wird ein Entwickler im Java Bereich."},
    { id: uuidv4(), title: "Python Entwickler/in", description: "Gesucht wird ein Entwickler im Python Bereich."},
    { id: uuidv4(), title: "C++ Entwickler/in", description: "Gesucht wird ein Entwickler im C++ Bereich."}
]

export default jobs