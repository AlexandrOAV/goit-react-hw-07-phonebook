import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList ";
import { Filter } from "./Filter/Filter";
import css from "./App.module.css"

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "redux/operation";
import { Loader } from "./Loader/Loader";
import { selectError, selectIsLoading } from "redux/selectors";


export const App = () => {
  
  const dispatch = useDispatch();
  const isLoading  = useSelector(selectIsLoading);
 const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return ( 
    <div className={css.container}>
      <h1 className={css.title}> Phonebook</h1>
      <ContactForm />
      <h2 className={css.title_contacts}>Contacts</h2>
      <Filter />
       {isLoading && !error && <><h2>Loading contacts...</h2><Loader/></>}
        <ContactList />
      
    </div>
  );
}

