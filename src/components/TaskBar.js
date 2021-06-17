import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/fameo-glow.svg'

const TaskBar = ({active}) => {
// console.log(active);

  return (
    <div className="taskbar w-100" id="taskbar">
      <center>

     
       <ul className="taskbar-wrapper">
     
        <li className={active === "search"?"taskbar-item active": "taskbar-item"} style={{width:"50%"}}> 
          <Link to="/Home" className="taskbar-icon">
            <svg className="taskbar-svg" xmlns="http://www.w3.org/2000/svg" width="23.6" height="23.6" viewBox="0 0 23.6 23.6">
              <defs>
                <linearGradient className="gradient" id="linear-gradient" x1="0.572" y1="-0.093" x2="0.599" y2="0.4" gradientUnits="objectBoundingBox">
                  <stop offset="0" stopColor="#a380e4" />
                  <stop offset="1" stopColor="#925afb" />
                </linearGradient>
              </defs>
              <path id="search" d="M13.92,0A9.675,9.675,0,0,0,6.477,15.861L.272,22.024a.922.922,0,1,0,1.3,1.308l6.214-6.171a9.674,9.674,0,0,0,10.874.961.922.922,0,0,0-.9-1.607,7.832,7.832,0,1,1,2.977-2.959.922.922,0,1,0,1.6.914A9.682,9.682,0,0,0,13.92,0Z" transform="translate(0)" fill="url(#linear-gradient)" />
            </svg>
          </Link>
        </li>
      
      
        <li className="taskbar-item" style={{width:"50%"}}>
          <Link to="/profile" className="taskbar-icon profile-icon">
            <svg className="taskbar-svg" xmlns="http://www.w3.org/2000/svg" width="23.6" height="23.6" viewBox="0 0 23.6 23.6">
              <defs>
                <linearGradient id="linear-gradient" className="gradient" x1="0.5" y1="0.686" x2="0.5" gradientUnits="objectBoundingBox">
                  <stop offset="0" stopColor="#925afb" />
                  <stop offset="1" stopColor="#a380e4" />
                </linearGradient>
              </defs>
              <path id="user" d="M23.541,20.223a.922.922,0,0,0-1.805.376.963.963,0,0,1-.2.808.937.937,0,0,1-.737.351H2.8a.937.937,0,0,1-.737-.351.963.963,0,0,1-.2-.808,10.186,10.186,0,0,1,9.691-8.065q.122,0,.244,0t.245,0a10.141,10.141,0,0,1,8.19,4.5.922.922,0,1,0,1.531-1.027,11.991,11.991,0,0,0-6.214-4.721,6.269,6.269,0,1,0-7.5,0A11.991,11.991,0,0,0,.06,20.223,2.8,2.8,0,0,0,2.8,23.6H20.8a2.8,2.8,0,0,0,2.738-3.378ZM7.375,6.269a4.425,4.425,0,1,1,4.649,4.419l-.224,0-.223,0A4.431,4.431,0,0,1,7.375,6.269Z" transform="translate(0)" fill="url(#linear-gradient)" />
            </svg>
          </Link>
        </li> 
      </ul>
      </center>
    </div>
  )
}

export default TaskBar