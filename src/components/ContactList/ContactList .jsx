import css from './ContactList.module.css'
import { deleteContact, selectContacts } from 'redux/contactsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/filterSlice';

const ContactList = () => {
  
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  
  const visibleContact = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const deleteChenge = id => {
    dispatch(deleteContact(id));
  };

  return (visibleContact.length>0 &&
         <ul className={css.list}>
                {visibleContact.map(contact => {
                  const tel=`tel:${contact.number}`
            return (
                <li className={css.item} key={contact.id}>
                 <span className={css.name}>{contact.name}:</span> 
                  <a href={tel} className={css.number}>{contact.number}</a> 
                    <button type="button" onClick={()=>deleteChenge(contact.id)}>Delete</button>
              </li>
            )
          })}
        </ul>
    )
}

export default ContactList; 