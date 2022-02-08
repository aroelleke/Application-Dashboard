import Applicant from "../datatypes/Applicant";
import Job from "../datatypes/Job";
import Application from "../datatypes/Application";
import ApplicationBox from "./application-box";
import "./column.css";



interface Column {
    type: string,
    content: {
        applicants: Array<Applicant>,
        jobs: Array<Job>,
        applications: Array<Application>,
    }
    functions: {
        moveApplication: Function,
        declineApplication: Function,
        addNewApplication: Function
    }
}

const TYPES: any = {
    "open": "Offene Bewerbungen",
    "trialday": "Probetag",
    "success": "Angenommen",
    "declined": "Abgelehnt"
}


export default function Column(data: Column): any {
    const newApplications = data.content.applications.filter(item =>
        item.status === Object.keys(TYPES).findIndex(item => item === data.type)
    )
    function handleClickNewApplication() {
        if (data.type != "open") return
        data.functions.addNewApplication()
    }
    return (
        <div className="column-box">
            <div className="title">{TYPES[data.type]}</div>
            <div className="box-wrapper">
                {newApplications.map((application: Application) => {
                    return <ApplicationBox 
                        key={application.id}
                        content={ { applicants: data.content.applicants, jobs: data.content.jobs, application } }
                        functions={data.functions}
                    />
                })}
            </div>
            <button hidden={data.type != "open"} onClick={handleClickNewApplication}>Neue Bewerbung</button>
        </div>
    )
}