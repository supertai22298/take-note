import React, { useState } from 'react'

import './styles.scss'
import husky from './assets/husky.jpg'

const RibbonBar = ({ searchQuery, handleChange }) => {
  return (
    <div className="RibbonBar">
      <div className="ribbon menu">
        <span className="icon">🥑</span>
      </div>
      <div className="ribbon search-input">
        <input
          placeholder="Search"
          value={searchQuery}
          type="text"
          onChange={handleChange}
        />
      </div>
      <div className="ribbon avatar">
        <img src={husky} alt="" />
      </div>
    </div>
  )
}

export default RibbonBar
