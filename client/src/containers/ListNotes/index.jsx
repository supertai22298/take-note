import React from 'react'
import Note from '../../components/Note'

import './styles.scss'

const ListNotes = () => {
  const notes = [
    {
      id: 1,
      title: 'Title here',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ipsa velit qui impedit vero asperiores obcaecati placeat a voluptas totam, corporis debitis quis cum error est vitae veniam consequatur vel.',
    },
    {
      id: 2,
      title: 'Title here',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ipsa velit qui impedit vero asperiores obcaecati placeat a voluptas totam, corporis debitis quis cum error est vitae veniam consequatur vel.',
    },
    {
      id: 3,
      title: 'Title here',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ipsa velit qui impedit vero asperiores obcaecati placeat a voluptas totam, corporis debitis quis cum error est vitae veniam consequatur vel.',
    },
    {
      id: 4,
      title: 'Title here',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ipsa velit qui impedit vero asperiores obcaecati placeat a voluptas totam, corporis debitis quis cum error est vitae veniam consequatur vel.',
    }, {
      id: 5,
      title: 'Title here',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ipsa velit qui impedit vero asperiores obcaecati placeat a voluptas totam, corporis debitis quis cum error est vitae veniam consequatur vel.',
    },
  ]
  return (
    <div className="ListNotes">
      {notes.map((note) => (
        <Note key={note.id} note={note} />
      ))}
    </div>
  )
}

export default ListNotes
