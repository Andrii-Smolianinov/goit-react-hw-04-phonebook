import { nanoid } from 'nanoid';
import { useState, useEffect, useReducer } from 'react';
import { AppStyled } from 'components/AppStyled';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactsList/ContactsList';

const CONTACTS_LIST = 'contactList';

const reducer = (contacts, action) => {
  switch (action.type) {
    case 'add':
      return [...contacts, action.contact];
    case 'delete':
      return contacts.filter(contact => action.contact.id !== contact.id);
    default:
      return contacts;
  }
};

const initialState = localStorage.getItem(CONTACTS_LIST)
  ? JSON.parse(localStorage.getItem(CONTACTS_LIST))
  : [];

const App = () => {
  const [contacts, dispatch] = useReducer(reducer, initialState);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem(CONTACTS_LIST, JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (name, number) => {
    const nameNormalized = name.toLowerCase();
    if (
      contacts.find(contact => contact.name.toLowerCase() === nameNormalized)
    ) {
      alert(name + ' is already in the contacts.');
    } else {
      const id = nanoid();
      dispatch({ type: 'add', contact: { id, name, number } });
    }
  };

  const deleteContact = id => {
    dispatch({ type: 'delete', contact: { id } });
  };

  return (
    <AppStyled>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <h2>Contacts</h2>
      {contacts.length > 0 && (
        <>
          <Filter value={filter} onChange={setFilter} />
          <ContactList
            contacts={contacts}
            filter={filter.toLowerCase()}
            onDeleteItem={deleteContact}
          />
        </>
      )}
    </AppStyled>
  );
};

export default App;
