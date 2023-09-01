import css from './Filter.module.css' 
import { useDispatch, useSelector } from 'react-redux';
import {  setFilter } from 'redux/filterSlice';
import { selectFilter } from 'redux/selectors';

export const Filter = () => {
      const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

    
  const handleFilter = evt => {
    dispatch(setFilter(evt.currentTarget.value));
  };
    
    return (
        <div className={css.filter_block}>
            <label
                className={css.label}
                htmlFor="filter">
                Find contacts by name
            </label>
            <input
                className={css.input}
                id='filter'
                name='filter'
                type='text'
                value={filter}
                placeholder='name to search for'
                onChange={handleFilter}
            />
        </div>
    )
}

