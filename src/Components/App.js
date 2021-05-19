import React from 'react';
import './App.css'

import SearchBar from './SearchBar'
import ContactList from './ContactList'
import AddContact from './AddContact'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"; //https://reactrouter.com/web/guides/quick-start sayfalar arası yönlendirme yapmada kullandık.

class App extends React.Component {

  state = {

    contacts: [
      {
        "id": 1,
        "name": "Annem",
        "number": 5051111111,
        "imageURL": "https://img2.pngio.com/avatar-female-person-user-woman-young-icon-female-avatar-png-512_512.png"

      },
      {
        "id": 2,
        "name": "Babam",
        "number": 5062222222,
        "imageURL": "https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png"

      },
      {
        "id": 3,
        "name": "Ablam",
        "number": 5073333333,
        "imageURL": "https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png"
      }
    ],

    searchQuery: ""
  }

  //DeleteContact ContactList component içine aktarmak için DeleteContact fonksiyonu props ettik.
  deleteContact = (contact) => {
    const newContactsList = this.state.contacts.filter(
      c => c.id !== contact.id //id'si eşleşmeyen gösterilmmesin
    );
    this.setState(state => (
      {
        contacts: newContactsList
      }
    ))
  }

  //searchContact 
  searchContact = (event) => {
    //console.log(event.target.value);
    this.setState({ searchQuery: event.target.value }) //searchQuery içideki değer update edilmiş oldu.
  }

  //addContact fonksiyonu 
  AddContact = (contact) => {
    // const {contacts} = this.state;
    // contacts.push(contact);

    // this.setState({
    //   contacts
    // });
    this.setState(state => (
      {
        contacts: state.contacts.concat(contact)
      }

    ))
  }


  render() {

    let filterContacts = this.state.contacts.filter(
      (contact) => {
        return contact.name.toLowerCase().includes(this.state.searchQuery.toLowerCase());
      }
    )

    return (
      <Router>

        <div className="container">

          <Switch>

            <Route path="/" exact render={() => ( //exact ile path="/add" sayfasındakileri görmeyi engelledik.
              <React.Fragment>
                <div className="row" >
                  <div className="col-lg-12 d-flex justify-content-center " >

                    <SearchBar
                      contactsLength={this.state.contacts.length}
                      searchContactProp={this.searchContact}
                    />
                  </div>

                  <ContactList
                    contacts={filterContacts}
                    deleteContactProp={this.deleteContact}
                  />
                </div>
              </React.Fragment>
            )}>
            </Route>

            <Route path="/add" render={({ history }) => (
              <AddContact
                onAddContact={(contact) => {
                  this.AddContact(contact)
                  history.push("/")
                }
                }
              />
            )}>
            </Route>

          </Switch>


        </div>

      </Router>

    );
  }
}

App.defaultProps = {
  ContactList: {}
}

export default App;
