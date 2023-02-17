import React from "react";
import { useState,useEffect } from "react";
import config from "../config";

const Search = () => {
    const [companies,setCompanies] = useState([]);
    const [searchTerm, setSearchTerm] = useState("")
    const searchCompanies = async (companyName) => {
            const response  = await fetch(`${config.API_URL}?q=${companyName}`,config.API_settings);
            const data  = await response.json();
    
            setCompanies(data.items)
        }
    
        useEffect(() => {
            searchCompanies("tesco")
    
        }, [])


    return (
        <div class="container-fluid">
          <form class="d-flex" role="search">
            <input 
            class="form-control me-2" 
            type="search" placeholder="Search for a company" 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            aria-label="Search"/>
            <button 
            class="btn btn-outline-success" 
            onClick={() => searchCompanies(searchTerm)}
            type="submit">Search
            </button>
          </form>
        </div>
    )
}

export default Search;

