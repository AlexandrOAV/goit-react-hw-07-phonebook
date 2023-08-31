import css from './ContactList.module.css'
import {selectContacts } from 'redux/contactsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/filterSlice';
import { deleteContacts } from 'redux/operation';
import { useEffect, useState } from 'react';

const ContactList = () => {
  const [totalContacts, setTotalContacts] = useState('');
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  
  const visibleContact = contacts.items.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  const total = contacts.items.length;

 
  const handleDelete = (id) => dispatch(deleteContacts(id));
 useEffect(() => {
    setTotalContacts(total);
  }, [total]);
  
  
  return (
    visibleContact.length > 0 && <>
      <p className={css.total}>Total contacts: {totalContacts}</p>
         <ul className={css.list}>
                {visibleContact.map(contact => {
                  const tel=`tel:${contact.phone}`
                  return (
                    <li className={css.item} key={contact.id}>
                 <span className={css.name}>{contact.name}:</span> 
                  <a href={tel} className={css.number}>{contact.phone}</a> 
                    <button type="button" onClick={()=>handleDelete(contact.id)}>Delete</button>
              </li>
            )
          })}
        </ul>
          </>
    )
}

export default ContactList; 