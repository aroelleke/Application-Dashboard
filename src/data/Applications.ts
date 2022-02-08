import Application from "../datatypes/Application"
import Job from "../datatypes/Job"
import Applicant from "../datatypes/Applicant"
import { v4 as uuidv4 } from "uuid"


export default function createApplications(amount: number, jobs: Array<Job>, applicants: Array<Applicant>, status?: number) {
    var applications: Array<Application> = []
    for (var i = 0; i < amount; i++) {
        const APPLICANTS_RAND = Math.round(Math.random() * (applicants.length - 1))
        const JOBS_RAND = Math.round(Math.random() * (applicants.length - 1))
        applications.push({
            id: uuidv4(),
            applicant_id: applicants[APPLICANTS_RAND].id,
            job_id: jobs[JOBS_RAND].id,
            status: (status != undefined ? status : Math.round(Math.random() * 3))
        })
    }
    return applications
}