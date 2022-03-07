import React, {useContext, useState, useEffect, useCallback} from 'react';
import {useNavigate, createSearchParams} from 'react-router-dom';


const url = "https://api.itbook.store/1.0/search/";
const AppContext = React.createContext();

export function AppProvider({children}) {
    const [toggleLinks, setToogleLinks] = useState(false);  
    const [bookSearch, setBookSearch] = useState([]);
    const [searchBookList, setSearchBookList] = useState([]);
    const [search, setSearch] = useState("");

  const fetchData = useCallback(async() => {
    const response = await fetch(`${url}${search}`);
    const dataFetch = await response.json();
    const {books} = dataFetch;

    setSearchBookList(dataFetch);

      if(books) {
        // console.log(books)
        const newFilter = books.filter((value) => {
            return value.title.toLowerCase().includes(search.toLowerCase());
        })      
        setBookSearch(newFilter);
      }
      else {
        setBookSearch([]);
      }
  }, [search]);
  
  useEffect(() => {
    fetchData();
  },[search, fetchData]);  

    return (
        <AppContext.Provider value={{
            toggleLinks,
            setToogleLinks,
            bookSearch,
            search,
            searchBookList,
            setSearch
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
