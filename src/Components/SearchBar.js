import React from 'react';
import './SearchBar.css'
import {Link } from "react-router-dom";

class SearchBar extends React.Component {

    
    
    render() {
        return (

                <div className="container">
                    <div className="row" >
                        <div className="col-lg-12 d-flex justify-content-center " >
                        <input 
                            onChange={this.props.searchContactProp}  
                            className="mb-3 mt-3 w-50" type="search" 
                            placeholder={("    Toplam listende ")+(this.props.contactsLength)+(" kişi var")}
                                
                        ></input>
                        <Link 
                            to="/add" 
                            className="btn btn-success mt-3 mb-3 ms-5 " 
                            type="button">Add
                        </Link>
                        </div>
                    </div>
                </div>
            
            
        )
    }
}

export default SearchBar;