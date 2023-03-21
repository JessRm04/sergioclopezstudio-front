import React from 'react'
import DressBox from '../../Components/atoms/Dressbox/Dressbox.jsx';
import "./styleDashboard.css"


function Dashboard() {
    return (
      <>
        <div className="dressBoxContainer">
          <DressBox className="dressBox"/>
          <DressBox className="dressBox"/>
        </div>
      </>
    );
  }
  
  export default Dashboard;