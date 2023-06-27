const SearchBox = () => {
    return (
        <div className="serch-box flex justify-center p-5">
            <input type="text" name="search" id="search" placeholder='SEARCH' className='outline-none shadow-md shadow-orange-800 p-2' />
            <button type="submit" className='bg-lime-400 p-1 mx-4 rounded-md text-white'>Search</button>
        </div>
    )
}

export default SearchBox;