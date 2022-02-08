import { useState } from 'react';
import Application from "./datatypes/Application"
import Column from './components/column';
import jobData from "./data/Jobs"
import applicantData from "./data/Applicants"
import createApplicationData from "./data/Applications"
import './App.css';



function App() {
  const [applications , setApplications] = useState(createApplicationData(5, jobData, applicantData))


  function moveApplication(application: Application) {
    console.log(application)
    if (application.status == 2 || application.status == 3) return
    application.status++
    const newApplications = [...applications.filter(item => item.id != application.id), application]
    setApplications(newApplications)
  }

  function declineApplication(application: Application) {
    if (application.status == 2 || application.status == 3) return
    application.status = 3
    const newApplications = [...applications.filter(item => item.id != application.id), application]
    setApplications(newApplications)
  }

  function addNewApplication() {
    const newApplications: Array<Application> = [...applications, ...createApplicationData(1, jobData, applicantData, 0)]
    setApplications(newApplications)
  }

  const content = { applicants: applicantData, jobs: jobData, applications }
  const functions = { moveApplication, declineApplication, addNewApplication }
  return (
    <>
      <div className="page-title">Bewerberübersicht</div>
      <div className="column-wrapper">
        <Column key="open" type={"open"} content={content} functions={functions}/>
        <Column key="trialday" type={"trialday"} content={content} functions={functions}/>
        <Column key="success" type={"success"} content={content} functions={functions}/>
        <Column key="declined" type={"declined"} content={content} functions={functions}/>
      </div>
    </>
  );
}

export default App;
