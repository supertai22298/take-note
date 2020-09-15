import React from 'react'
import { useHistory } from 'react-router-dom'
import Note from '../../components/Note'

import './styles.scss'

const ListNotes = ({ searchQuery }) => {
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
    },
    {
      id: 5,
      title: 'Title here',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ipsa velit qui impedit vero asperiores obcaecati placeat a voluptas totam, corporis debitis quis cum error est vitae veniam consequatur vel.',
    },
    {
      id: 6,
      title: 'Taffy',
      content:
        'A navigation bar needs standard HTML as a base.\nIn our examples we will build the navigation bar from a standard HTML list.\nA navigation bar is basically a list of links, so using the <ul> and <li> elements makes perfect sense',
    },
  ]
  const history = useHistory()
  const filteredNotes = notes.filter((note) => {
    return (
      note.content.toLowerCase().includes(searchQuery) ||
      note.title.toLowerCase().includes(searchQuery)
    )
  })

  return (
    <div className="ListNotes">
      {filteredNotes.map((note) => (
        <Note
          key={note.id}
          note={note}
          handleClick={() => history.push('/client')}
        />
      ))}
    </div>
  )
}

export default ListNotes
