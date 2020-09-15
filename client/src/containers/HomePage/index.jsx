import React, { useState } from 'react'
import RibbonBar from '../../components/RibbonBar'
import ListNotes from '../ListNotes'

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState('')
  return (
    <div className="HomePage">
      <RibbonBar
        searchQuery={searchQuery.toLowerCase()}
        handleChange={(e) => setSearchQuery(e.target.value)}
      />
      <ListNotes searchQuery={searchQuery} />
    </div>
  )
}

export default HomePage
