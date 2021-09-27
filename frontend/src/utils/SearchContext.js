import React, { useState, createContext } from 'react'

const SearchContext = createContext([{}, () => {}])

const SearchProvider = (props) => {
  const [searchData, setSearchData] = useState([])
  const [searching, setSearching] = useState([])
  return (
    <SearchContext.Provider
      value={[searchData, setSearchData, searching, setSearching]}
    >
      {props.children}
    </SearchContext.Provider>
  )
}

export { SearchContext, SearchProvider }
