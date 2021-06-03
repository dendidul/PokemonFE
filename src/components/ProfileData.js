import React from 'react';
import { Link } from 'react-router-dom';

import classnames from 'classnames'

import Crown from '../assets/images/crown.png'
import Rightr from '../assets/images/arrow-right-r.svg'

const ProfileData = ({ content, icon }) => {
  return (
    <div className="profile-wrapper">
      <div className="container px-0">
        <div className="profile-data">
          {/* "profile-image-wrapper with-notif" */}
          <div className={classnames('profile-image-wrapper',
            { 'with-notif': content.notif === true })
          }>
            <img src="https://i.pinimg.com/564x/18/d9/e1/18d9e1307018dbc76750ca7d5124fccd.jpg" className="round-image" alt="ic" />
          </div>
          <div className="user-data-wrapper">
            <p className="user-name"> Hi, {icon.FirstName}</p>
         
          </div>
        </div>
      </div>
  
    </div>
  )
}

export default ProfileData