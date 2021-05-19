import React from 'react';
import './ContactList.css';

const ContactList = (props) => { 
    
    

        return (

            <div className="row" >

                {props.contacts.map((contact,i) =>( //map metotu ile contacts dizi içindekileri listeledik.
                        <div className="col-lg-12 d-flex justify-content-center mb-3" key={i} > {/* key={i} yazılma sebebi list should have a unique "key" prop. */}
                        <div style={{marginRight:"10px"}}>
                            <img src={contact.imageURL} className="famale" alt="Default Avatar" />                        
                        </div>
                        <div className="me-3">
                            <label>{contact.name}</label>
                            <br></br>
                            <label>{contact.number}</label>
                        </div>
                        <div style={{alignSelf: 'center'}}>
                            <svg height="15px" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-circle-right" className="svg-inline--fa fa-chevron-circle-right fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zm113.9 231L234.4 103.5c-9.4-9.4-24.6-9.4-33.9 0l-17 17c-9.4 9.4-9.4 24.6 0 33.9L285.1 256 183.5 357.6c-9.4 9.4-9.4 24.6 0 33.9l17 17c9.4 9.4 24.6 9.4 33.9 0L369.9 273c9.4-9.4 9.4-24.6 0-34z"></path></svg>
                        </div>
                        <div>
                            <button onClick={(e)=>{props.deleteContactProp(contact)}} className="btn btn-danger mt-3 mb-3 ms-5 " type="button">Sil</button>
                        </div>
                    </div>
                ))
                }
    
            </div>  
 
        )
    
}


export default ContactList;