import React from "react";
import { useState,useEffect } from "react";
import config from "./config";
import CompanyCard from "./components/CompanyCard";
import Header from "./components/header";
import Navbar from "./components/Navbar";
import { Container, Row} from "react-bootstrap";


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
                onChange={(e) => setSearchTerm(e.target.value)}
                onBeforeInput={() => searchCompanies(searchTerm)}
                >
                </input>
                <button 
                    type="submit" 
                    class="btn btn-dark" 
                    onClick={() => searchCompanies(searchTerm)}
                    >Submit
                </button>
            </div>
            

{/* creating container for the company cards */}

            {
                companies?.length > 0 
                ? (
                    <Container>
                        <Row>
                                {companies.map((company) => (
                                <CompanyCard company={company}/>
                            ))}
                        </Row>

                    </Container>
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