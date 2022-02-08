import Application from "../datatypes/Application"
import Applicant from "../datatypes/Applicant"
import Job from "../datatypes/Job"
import "./application-box.css";



interface ApplicantBox {
    content: {
        application: Application,
        applicants: Array<Applicant>
        jobs: Array<Job>
    },
    functions: {
        moveApplication: Function,
        declineApplication: Function
    }
}

export default function ApplicantBox(data: ApplicantBox) {
    function handleProceed() {
        data.functions.moveApplication(data.content.application)
    }
    function handleDecline() {
        data.functions.declineApplication(data.content.application)
    }

    const currApplicant: Applicant | any = data.content.applicants.find(item => item.id === data.content.application.applicant_id)
    const currJob: Job | any = data.content.jobs.find(item => item.id === data.content.application.job_id)
    return (
        <div className={"applicant-box" + (data.content.application.status === 2 ? " success" : (data.content.application.status === 3 ? " declined" : ""))}>
            <img className="aplicant-picture" src="user-32px.png" alt="User Portrait" />
            <div className="data-wrapper">
                <div className="applicant-name">{currApplicant.name}</div>
                <div className="job-title">{currJob.title}</div>
                <div className="job-description">{currJob.description}</div>
            </div>
            <button hidden={data.content.application.status === 2 || data.content.application.status === 3} onClick={handleDecline}>Ablehnen</button>
            <button hidden={data.content.application.status === 2 || data.content.application.status === 3} onClick={handleProceed}>Weiter</button>
        </div>
    )
}