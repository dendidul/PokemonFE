import React from 'react'
import { Link, useHistory } from 'react-router-dom'

const Header = ({ content }) => {
  const history = useHistory();

  const _handleBack = () => {
    history.goBack();
  }
  return (
    <header>
      <div className="container">
        <div className="content-holder">
          {content.Notification ?
            <div className="notification">
              <p>{content.notificationTitle}</p>
              <div className="notif-icon">
                <img src={require('../assets/images/bell.svg')} alt="notif icon" />
                <img src={require('../assets/images/small-circle.svg')} className="notif-on" alt="notif icon" />
              </div>
            </div>
            :
            ''
          }
          {/* <Link to={content.link ? content.link : ''}> */}
          {/* <div onClick={_handleBack} className="position-absolute">
            {content.BtnLeftIcon ? <img src={content.BtnLeftIcon} className="icon-header" alt="" /> : ''}
            {content.BtnLeftText ? content.BtnLeftText : ''}
          </div> */}
            
          {/* </Link> */}
          <span className="title">
            {content.title}
          </span>
          {content.hasSubtitle ? <p className="header-subtitle">{content.subtitle}</p> : ''}
          <Link className="header-right" id="id-header-right">
            {content.BtnRightIcon ? <img src={content.BtnRightIcon} className="icon-header" alt="" /> : ''}
            {content.BtnRightText ? content.BtnRightText : ''}
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
