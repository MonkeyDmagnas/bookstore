import React, {useState, useRef, useEffect} from 'react';
import { useFetch } from '../../container/useFetch';
import SearchLogo from '../../images/search.png';

const url = "https://api.itbook.store/1.0/search/mongodb";


export default function SearchBox() {
    const [toggleLinks, setToogleLinks] = useState(true);
    const {data} = useFetch(url);
    const searchResultRef = useRef(null);
    const resultLinkRef = useRef(null); 
    const searchRefContainer = useRef('');

    const [search, setSearch] = useState();


    const submitSearch = (e) => {
        e.preventDefault();
        // console.log("hi");
    }
    
    const searchData = () => {
        setSearch(searchRefContainer.current.value);
    }


    useEffect(() => {
        searchRefContainer.current.focus();
    }, [])


    useEffect(() => {
        const linksHeight = resultLinkRef.current.getBoundingClientRect().height;
        console.log(linksHeight);
        if(toggleLinks) {
            searchResultRef.current.style.height = `${linksHeight}px`;
        }
        else {
            searchResultRef.current.style.height = '0px';
        }
    },[toggleLinks]);    

    return (
        <div className='nav-search'>
            <form onSubmit={submitSearch}>
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
                    <div className='search-box-search'>
                        <button className='button-search-box'>
                            <img src={SearchLogo} alt='search' />
                        </button>
                    </div>
                </div>
            </form>
                    {/* div for search drop */}

                    <div className='search-result-container' ref={searchResultRef}>
                        <ul className='result-links' ref={resultLinkRef}>
                            {data.slice(0,6).map((searchLink) => {
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

        </div>
    )
}
