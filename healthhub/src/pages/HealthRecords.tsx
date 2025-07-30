import React from 'react'
import DashboardHeader from '../components/DashboardHeader'

const HealthRecords = () => {
  return (
    <div>
        <DashboardHeader isPatient={true}/>
        <h1>showing all uploaded file</h1>
    </div>
  )
}

export default HealthRecords