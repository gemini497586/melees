import axios from 'axios'
import { useContext } from 'react'
import { SearchContext } from './SearchContext'
import { API_URL } from './config'

const useSearch = () => {
  const [searchData, setSearchData, searching, setSearching] =
    useContext(SearchContext)

  const handleSearchData = (e) => {
    console.log(e)
  }
  return {
    searchData,
    setSearchData,
    handleSearchData,
    searching,
    setSearching,
  }
}

export default useSearch
