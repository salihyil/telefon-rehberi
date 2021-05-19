import React from 'react';
import serialize from 'form-serialize' //form'daki verileri object şeklinde almak için kullanıldı. 

class AddContact extends React.Component {

    Submit = (e) => {
        e.preventDefault();
        const newContact = serialize(e.target,{hash:true});
        this.props.onAddContact(newContact);
        console.log("newContact: ",newContact);

    }

    render() {
        return (

            <div className="container">
            <form className="mt-5" onSubmit={this.Submit}>
                <div className="form-row">
                    <div className="form-group col-3 mt-3">
                        <input className="form-control" id="disabledInput" type="text" placeholder="Fill The Form To Add A Contact.." disabled/>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-3 mt-3">
                        <label htmlFor="inputName">Name</label>
                        <input  type="text" 
                                className="form-control" 
                                name="name"
                                required
                                />
                    </div>
                    <div className="form-group col-3 mt-3">
                        <label htmlFor="inputRating">Mobile Number</label>
                        <input 
                                minLength="10"
                                type="text" 
                                className="form-control" 
                                name="number"/>
                    </div>
                </div>
                <div className="form-row mt-3">
                    <div className="form-group col-3">
                        <label htmlFor="inputImage">Image URL</label>
                        <input 
                                type="url" 
                                className="form-control" 
                                name="imageURL"/>
                    </div>
                </div>
                <input type="submit" className="btn btn-danger btn-block mt-3" value="Add Contact" />
            </form>
        </div>
        )
    }
}

export default AddContact;