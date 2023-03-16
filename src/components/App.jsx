
// import { useLocalStorage } from "../hooks/Hooks";
import { ContactForm } from "components/ContactForm/ContactForm";
import { Filter } from "components/Filter/Filter";
import { ContactList } from "components/ContactList/ContactList";
import {useSelector, useDispatch } from 'react-redux';
import { useEffect } from "react";
import { fetchContacts } from "redux/contacts/contactsOperations";

import { Div, H1, H2, P } from "./App.styled";

export function App() {
   
  const contacts = useSelector(state => state.contacts.contacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    
    <Div>
      <H1>Phonebook</H1>
      <ContactForm />
      <H2>Contacts</H2>
      {contacts.length > 0 ?
       <>
      <Filter />
      <ContactList />
       </> : 
      <P>There are no saved contacts!</P>
      }
    </Div>
  );
};
