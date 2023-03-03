import { ContactItem } from './ContactItem';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { deleteContact, fetchContacts } from 'redux/operation';
import { selectFilterContacts } from 'redux/selectors';
import s from '../ContactList/ContactStyle.module.scss';

export function ContactList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const onDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  const filteredContacts = useSelector(selectFilterContacts);

  return (
    <ul className={s.list}>
      {filteredContacts.map(({ id, name, number }) => (
        <ContactItem
          onDeleteContact={onDeleteContact}
          key={id}
          name={name}
          number={number}
          id={id}
        />
      ))}
    </ul>
  );
}
