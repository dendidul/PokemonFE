import React from 'react'
import { Link } from 'react-router-dom'
import classnames from 'classnames'

const Button = ({ content, _onclick }) => {
  const { text, color, icon } = content

  const _onClick = (e) =>{
    _onclick && _onclick(e)
  }
  
  return (
    <>
      <div onClick={_onClick} className={classnames("btn", {
        "btn-pink c-white": content.color === 'pink',
        "btn-white c-violet": content.color === 'white',
        "btn-border-violet c-white": content.color === 'violet',
        "btn-border-green c-green": content.color === 'green',
        "btn-border-pink c-pink": content.color === 'transparent-pink',
        "btn-gradient-pink c-white": content.color === 'gradient-pink',
        "btn-gradient-violet c-white": content.color === 'gradient-violet',
        "btn-border-violet c-white": content.color === 'transparent-violet',
      })}>
        {content.icon ? <img src={content.icon} className="btn-icon" alt="" /> : ''}
        {content.text}
      </div>
    </>
  )
}

export default Button