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
            
            
{/* creating new hero */}
            <div class="px-4 py-5 my-5 text-center">
                <h1 class="display-5 fw-bold">Company Search</h1>
                <div class="col-lg-6 mx-auto">
                        <p class="lead mb-4">Search for any real-life company from the live register of companies from Companies House.</p>
                        <p>Please click <a href="https://cors-anywhere.herokuapp.com/corsdemo" target="_blank">here</a> to enable the CORS proxy before searching.</p>
                    <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
                    <input class="form-control rounded"
                placeholder="Search for companies"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onBeforeInput={() => searchCompanies(searchTerm)}
                >
                </input>
                <button 
                    type="submit" 
                    class="btn btn-dark btn-lg px-4 gap-3" 
                    onClick={() => searchCompanies(searchTerm)}
                    >Search
                </button>

                        
                    </div>
                </div>
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