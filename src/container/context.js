import React, {useContext, useState, useEffect, useCallback} from 'react';
import {useNavigate, createSearchParams} from 'react-router-dom';

const getLocalStorage = () => {
  let constantSearch = localStorage.getItem('constantSearch');
  if (constantSearch) {
    return (
      constantSearch = JSON.parse(localStorage.getItem('constantSearch'))
      );
  } else {
    return [];
  }
};

const booklistStorage = () => {
  let searchBookList = localStorage.getItem('searchBookList');
  if (searchBookList) {
    return (
      searchBookList = JSON.parse(localStorage.getItem('searchBookList'))
      );
  } else {
    return [];
  }
};

const url = "https://api.itbook.store/1.0/search/";
const AppContext = React.createContext();


export function AppProvider({children}) {
    const [toggleLinks, setToogleLinks] = useState(false);
    // from onchange search
    const [search, setSearch] = useState('');
    const [bookSearch, setBookSearch] = useState([]);
    
    // from submit search
    const [constantSearch, setConstantSearch] = useState(getLocalStorage());
    const [searchBookList, setSearchBookList] = useState(booklistStorage());
    const [pagination, setPagination] = useState(1);

    // addtocart
    const [itemAdded, setItemAdded] = useState(0);
    const [cartIcon, setCartIcon] = useState(false);
    const [isbn, setIsbn] = useState([]);
    const [retrived, setRetrived] = useState([]);

  // data fetch from onchange search to nav search drop down
  const fetchData = useCallback(async() => {
    const response = await fetch(`${url}${search}`);
    const dataFetch = await response.json();
    const {books} = dataFetch;
    
    if(books) {
        const newFilter = books.filter((value) => {
            return value.title.toLowerCase().includes(search.toLowerCase());
          })      
          setBookSearch(newFilter);
        }
      else {
        setBookSearch([]);
      }
    }, [search]);

    // fetch from the onsubmit from nav search
    const fetchDataBookList = useCallback(async() => {
      const response = await fetch(`${url}${constantSearch}/${pagination}`);
      const dataFetch = await response.json();
    setSearchBookList(dataFetch);
  }, [constantSearch, pagination]);
    
  
  const addtocart = useCallback((isbn13) => {
    setCartIcon(true);
    setItemAdded(itemAdded + 1);
    setIsbn([...isbn, setIsbn]);

  },[itemAdded]);


  useEffect(() => {
      fetchData();
    },[search, fetchData]);  


  useEffect(() => {
    fetchDataBookList();
    localStorage.setItem('constantSearch', JSON.stringify(constantSearch));
    localStorage.setItem('searchBookList', JSON.stringify(searchBookList));
  },[pagination, fetchDataBookList]);


    return (
        <AppContext.Provider value={{
            toggleLinks,
            setToogleLinks,
            search,
            setSearch,
            bookSearch,
            constantSearch,
            setConstantSearch,
            searchBookList,
            setPagination,
            addtocart,
            cartIcon,
            itemAdded
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export const useNavigateSearch = () => {
    const navigate = useNavigate();
    return (pathname,params) =>
    navigate(`${pathname}/?${createSearchParams(params)}`);
}

export {AppContext}
