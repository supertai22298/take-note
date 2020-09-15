import React from 'react'

import './styles.scss'

const IconButton = ({ handleClick, label, icon, title }) => {
  return (
    <div className="icon-button" onClick={handleClick} title={title}>
      <span role="img" aria-label={label}>
        {icon}
      </span>
    </div>
  )
}

export default IconButton
