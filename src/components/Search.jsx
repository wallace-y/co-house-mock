import React from "react";
import { useState,useEffect } from "react";
import config from "../config";
import CompanyCard from "./CompanyCard";

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
        <>
        <div class="container-fluid">
          <form class="d-flex" role="search">
            <input 
            class="form-control me-2" 
            placeholder="Search for companies"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            ></input>
            <button 
            class="btn btn-outline-success" 
            onClick={() => searchCompanies(searchTerm)}
            >Search
            </button>
          </form>
        </div>

{
    companies?.length > 0 
    ? (
        <div className="container">
            {companies.map((company) => (
                <CompanyCard company={company}/>
            ))}
        </div>
    ) : (
        <div className="empty">
            <h2>No companies found</h2>
        </div>
    ) }
        </>
    )
}

export default Search;