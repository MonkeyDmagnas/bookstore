import React, {useState, useRef, useEffect} from 'react';
import { useGlobalContext, useNavigateSearch } from '../../container/context';
import SearchLogo from '../../images/search.png';

export default function SearchBox() {
    const searchResultRef = useRef(null);
    const resultLinkRef = useRef(null); 
    const searchRefContainer = useRef('');
    const {search,setSearch, bookSearch, toggleLinks, setToogleLinks} = useGlobalContext();

    const navigateSearch = useNavigateSearch();

    const submitSearch = (e) => {
        e.preventDefault();
        navigateSearch("/search", {q: `${search}`});
        setToogleLinks(false);
    }
    
    const searchData = () => {
        setToogleLinks(true);        
        setSearch(searchRefContainer.current.value);
    }

    const closeMenuList = (e) => {
        if(!e.target.classList.contains('result-links')) {
            setToogleLinks(false);
        }
    }


    useEffect(() => {
        const linksHeight = resultLinkRef.current.getBoundingClientRect().height;
        // console.log(linksHeight);
        if(toggleLinks) {
            searchResultRef.current.style.height = `${linksHeight}px`;
        }
        else {
            searchResultRef.current.style.height = '0px';
        }
    },[toggleLinks]);    

    return (
        <div className='nav-search' onClick={closeMenuList}>
            <form onSubmit={submitSearch}>            
            {/* <form action={`/search/?q=${search}`} method='get'> */}
                <div className='search-box'>
                    <div className='search-box-bar'>
                        <input
                        type='text'
                        className='input-search-box'
                        placeholder='Search by Book Names, author and Title'
                        ref={searchRefContainer}
                        onChange={searchData}
                        />
                    </div>
                    {/* div for search drop */}

                    <div className={toggleLinks ? 'search-result-container-active' : 'search-result-container'} ref={searchResultRef}>
                        <ul className='result-links' ref={resultLinkRef}>
                            {bookSearch.slice(0,6).map((searchLink) => {
                            // console.log(navLinks);
                                const {isbn13, title, image} = searchLink;
                                return(
                                    <li key={isbn13}>
                                        <div className='eac-item'>                                        
                                            <a href={`books/${isbn13}`}>
                                                <img src={image} alt={title} />
                                                <p style={{padding: "0 0.8rem"}}>{title}</p>
                                            </a>
                                        </div>
                                    </li>
                                );
                             })}                            
                        </ul>
                    </div>            
                    <div className='search-box-search'>
                        <button className='button-search-box'>                        
                        {/* <button className='button-search-box' type='submit'> */}
                            <img src={SearchLogo} alt='search' />
                        </button>
                    </div>
                </div>
            </form>

        </div>
    )
}
