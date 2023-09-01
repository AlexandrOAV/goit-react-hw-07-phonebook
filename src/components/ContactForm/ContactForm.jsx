
import { useState } from 'react';
import css from './ContactForm.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operation';
import { selectContacts } from 'redux/selectors';



function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  
  const handleChange = ({ target: { name: inputName, value } }) => {
    if (inputName === 'name') {
      setName(value);
    } else if (inputName === 'number') {
      setPhone(value);
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    const userName = contacts.items.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (userName) {
      alert(`${name} is already in contacts`);
      return;
    }
   const newData = { name, phone };
   dispatch(addContact(newData));
    reset();
  };
  
  const reset = () => {
    setName('');
    setPhone('');
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
            value={phone}
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