import React from "react";
import { useState,useEffect } from "react";
import config from "./config";
import CompanyCard from "./components/CompanyCard";
import Header from "./components/header";
import Navbar from "./components/Navbar";

const App = () => {
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
        <div className="app">
            <Header />
            <Navbar />
            
            <div class="input-group">
                <input class="form-control rounded"
                placeholder="Search for companies"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}>
                </input>
                <button type="submit" class="btn btn-primary" onClick={() => searchCompanies(searchTerm)}>Submit</button>

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
                )
            }
        </div>
    
    );
}

export default App;