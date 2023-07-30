import React from 'react'
import { Search } from './Search/Search'

interface HeaderProps { searchString: string, setSearchString: (s: string) => void, handleSearch: () => void }

export const Header = ({ searchString, setSearchString, handleSearch }: HeaderProps) => {
  return (
    <>
      <Search searchString={searchString} setSearchString={setSearchString} handleSearch={handleSearch} />
    </>
  )
}
