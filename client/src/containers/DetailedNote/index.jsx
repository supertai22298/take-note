import React, { useState } from 'react'
import IconButton from '../../components/IconButton'

import './styles.scss'
import { colors } from './colors'

const DetailedNote = () => {
  const [content, setContent] = useState('')
  const [title, setTitle] = useState('')
  const [color, setColor] = useState('white')
  return (
    <div className="DetailedNote">
      <div className="action-bar">
        <div className="flex-box">
          {colors.map((color) => {
            return (
              <IconButton
                label={color.name}
                title={color.name}
                icon={color.icon}
                handleClick={() => {
                  setColor(color.hex)
                }}
              />
            )
          })}
        </div>

        <div className="flex-box">
          <IconButton
            label={'save'}
            title={'save'}
            icon={'📝'}
            handleClick={() => {
              return null
            }}
          />{' '}
          <IconButton
            label={'clear'}
            title={'clear'}
            icon={'🧹'}
            handleClick={() => {
              const confirm = window.confirm('Ban chac chan')

              if (confirm) {
                setTitle('')
                setContent('')
                setColor('white')
              }
            }}
          />
        </div>
      </div>

      <div className="note-zone">
        <div className="title">
          <input
            style={{ backgroundColor: color }}
            className="edit-text"
            placeholder="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="content">
          <textarea
            style={{ backgroundColor: color }}
            className="edit-text"
            value={content}
            placeholder="Aa"
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <div className="edit-date">
          <p>Edited at Jun 21, 2020</p>
        </div>
      </div>
    </div>
  )
}

export default DetailedNote
