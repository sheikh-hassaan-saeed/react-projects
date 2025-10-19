import React from 'react'

const SearchBar = () => {
    return (
        <div className='flex items-center justify-center mt-12'>
            <input
                type="text"
                placeholder="Search"
                className="bg-stone-200 p-2  px-4 mx-2 rounded-lg outline-none w-[230px] text-sm placeholder:text-stone-900"
            />
        </div>
    )
}

export default SearchBar