'use client';
import Image from 'next/image'
import SearchBox from '../components/searchBox/SearchBox'
import React, { useState,useEffect } from 'react';
import { VideoScreen } from '@/components/VideoScreen/VideoScreen';




export default function Home() {
  // const [searchString, setSearchString] = useState<string>("")
 
 
  return (
    <>
      <VideoScreen />
    </>
  )
}
