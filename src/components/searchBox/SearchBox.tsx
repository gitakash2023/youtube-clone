import React from 'react'
import SearchSharpIcon from '@mui/icons-material/SearchSharp';

const SearchBox = ({ searchString, setSearchString }: any) => {
    return (

        <div className='flex h-10 bg-red-300' >
            <div > <input className='h-10' value={searchString} type="text" onChange={(e) => setSearchString(e.target.value)} /></div>
            <div className='p-4 bg-slate-100 rounded flex items-center' > <SearchSharpIcon /></div>
        </div>


    )
}

export default SearchBox