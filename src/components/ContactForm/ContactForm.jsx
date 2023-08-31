
import { useState } from 'react';
import css from './ContactForm.module.css'
import { useDispatch, useSelector } from 'react-redux';

import { nanoid } from 'nanoid';
import { addContact, selectContacts } from 'redux/contactsSlice';


function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  
  const handleChange = ({ target: { name: inputName, value } }) => {
    if (inputName === 'name') {
      setName(value);
    } else if (inputName === 'number') {
      setNumber(value);
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    const userName = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (userName) {
      alert(`${name} is already in contacts`);
      return;
    }


    const newData = { id: nanoid(7), name, number };
    dispatch(addContact(newData));
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

    return (
      <form className={css.contact_form} onSubmit={handleSubmit}>
        <label className={css.contact_label}>Name:
          <input
            type="text"
            name="name"
                
            value={name}
            onChange={handleChange}
            placeholder="Enter contact"
            pattern="[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            className={css.contact_input}
          />
        </label>
             
        <label className={css.contact_label}>
          Number phone:
          <input
            type="tel"
            name="number"
            value={number}
            onChange={handleChange}
            placeholder="Enter number phone"
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            className={css.contact_input}
          /></label>
        <button type="submit">Add contact</button>
      </form>
    )
  }



export default ContactForm;