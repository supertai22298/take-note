import React from 'react'

import './index.scss'

const Note = ({ note, handleClick }) => {
  return (
    <div className="Note" onClick={handleClick}>
      <h4 className="title">{note.title}</h4>
      <p className="content">{note.content}</p>
    </div>
  )
}

export default Note
