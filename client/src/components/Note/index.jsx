import React from 'react'

import './index.scss'

const Note = ({ note }) => {
  return (
    <div className="Note">
      <h4 className="title">{note.title}</h4>
      <p className="content">{note.content}</p>
    </div>
  )
}

export default Note
