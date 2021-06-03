import React from 'react'

import DownArrow from '../assets/images/icon-down-arrow.svg'

const Total = ({ content }) => {
  return (
    <div className="total-wrapper">
      <p className="total-label">{content.title}</p>
      <div className="amount-wrapper">
        <p className="total-amount">{content.amount}</p>
        <img src={DownArrow} alt="fameo-down-arrow" id="total-arrow-id"/>
      </div>
    </div>
  )
}

export default Total