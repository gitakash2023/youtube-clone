'use client';
import Image from 'next/image'
import SearchBox from '../components/searchBox/SearchBox'
import { useState } from 'react'

export default function Home() {
  const [searchString, setSearchString] = useState<string>("")
  return (
    <>
      <SearchBox searchString={searchString} setSearchString={setSearchString} />
      <div>
        {searchString}</div>
    </>
  )
}
