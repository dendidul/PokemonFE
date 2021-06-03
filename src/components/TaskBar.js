import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/fameo-glow.svg'

const TaskBar = ({active}) => {
// console.log(active);

  return (
    <div className="taskbar w-100" id="taskbar">
      <center>

     
       <ul className="taskbar-wrapper">
       {/* <li className="taskbar-item">
          <Link to="/" className="taskbar-icon">
            <svg className="taskbar-svg" xmlns="http://www.w3.org/2000/svg" width="20.73" height="24" viewBox="0 0 25 24">
              <defs>
                <linearGradient className="gradient" id="linear-gradient" x1="1" x2="0.085" y2="1" gradientUnits="objectBoundingBox">
                  <stop offset="0" stopColor="#a380e4" />
                  <stop offset="1" stopColor="#925afb" />
                </linearGradient>
              </defs>
              <g id="play_1_" data-name="play (1)" transform="translate(-34.883 0)">
                <g id="Group_988" data-name="Group 988" transform="translate(34.883 0)">
                  <path id="Path_541" data-name="Path 541" d="M54.054,9.23,39.879.493a3.278,3.278,0,0,0-5,2.791v17.4A3.312,3.312,0,0,0,38.153,24h.015a3.289,3.289,0,0,0,1.7-.511.936.936,0,1,0-.975-1.6,1.436,1.436,0,0,1-.729.237,1.454,1.454,0,0,1-1.409-1.448V3.284a1.406,1.406,0,0,1,2.142-1.2l14.175,8.738a1.406,1.406,0,0,1-.006,2.4L42.817,19.5a.936.936,0,0,0,.977,1.6l10.247-6.274a3.278,3.278,0,0,0,.012-5.589Z" transform="translate(-34.883 0)" fill="url(#linear-gradient)" />
                </g>
              </g>
            </svg>
          </Link>
        </li> */}
        <li className={active === "search"?"taskbar-item active": "taskbar-item"}>
          <Link to="/" className="taskbar-icon">
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
      
        {/* <li className="taskbar-item">
          <Link to="/" className="btn-fameo link">
            <img src={Logo} className="btn-fameo-image" alt="fameo-logo" />
          </Link>
        </li>
        <li className="taskbar-item">
          <Link to="/search-qa" className="taskbar-icon">
            <svg className="taskbar-svg" xmlns="http://www.w3.org/2000/svg" width="23.813" height="27.723" viewBox="0 0 23.813 27.723">
              <defs>
                <linearGradient id="linear-gradient" className="gradient" x1="0.5" x2="0.5" y2="0.5" gradientUnits="objectBoundingBox">
                  <stop offset="0" stopColor="#00f2fe" />
                  <stop offset="0" stopColor="#a380e4" />
                  <stop offset="1" stopColor="#925afb" />
                </linearGradient>
                <linearGradient id="linear-gradient-2" className="gradient" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
                  <stop offset="0" stopColor="#a380e4" />
                  <stop offset="1" stopColor="#925afb" />
                </linearGradient>
                <filter id="question_2_" x="0" y="0" width="23.813" height="27.723" filterUnits="userSpaceOnUse">
                  <feOffset dy="3" input="SourceAlpha" />
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feFlood floodOpacity="0.161" />
                  <feComposite operator="in" in2="blur" />
                  <feComposite in="SourceGraphic" />
                </filter>
              </defs>
              <g id="Group_1008" data-name="Group 1008" transform="translate(-257.343 -35.379)">
                <path id="chat" d="M.922,23.6a.922.922,0,0,1-.855-1.267l2.093-5.178A10.2,10.2,0,0,1,0,10.878a10.4,10.4,0,0,1,3.486-7.72A12.254,12.254,0,0,1,11.8,0a12.254,12.254,0,0,1,8.315,3.158,10.4,10.4,0,0,1,3.486,7.72,10.236,10.236,0,0,1-1.872,5.882A.922.922,0,1,1,20.217,15.7a8.4,8.4,0,0,0,1.539-4.827c0-4.982-4.466-9.034-9.956-9.034S1.844,5.9,1.844,10.878A8.427,8.427,0,0,0,3.921,16.4a.922.922,0,0,1,.153.944L2.628,20.919l4.21-1.856a.922.922,0,0,1,.734,0,10.876,10.876,0,0,0,9.082-.291.922.922,0,0,1,.835,1.644,12.729,12.729,0,0,1-10.264.5l-5.93,2.614A.921.921,0,0,1,.922,23.6Z" transform="translate(257.399 35.4)" fill="url(#linear-gradient)" />
                <g transform="matrix(1, 0, 0, 1, 257.34, 35.38)" filter="url(#question_2_)">
                  <path id="question_2_2" data-name="question (2)" d="M173.906,129.722a.692.692,0,1,1,.692-.692A.692.692,0,0,1,173.906,129.722Zm.692-3.114v-.929a2.885,2.885,0,1,0-2.722-4.865,2.834,2.834,0,0,0-.877,2.057.692.692,0,1,0,1.384,0,1.461,1.461,0,0,1,.453-1.061,1.531,1.531,0,0,1,1.13-.426,1.494,1.494,0,0,1,.274,2.957,1.294,1.294,0,0,0-1.026,1.27v1a.692.692,0,0,0,1.384,0Z" transform="translate(-162 -114)" fill="url(#linear-gradient-2)" />
                </g>
              </g>
            </svg>

          </Link>
        </li>*/}
        <li className="taskbar-item">
          <Link to="/signin" className="taskbar-icon profile-icon">
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