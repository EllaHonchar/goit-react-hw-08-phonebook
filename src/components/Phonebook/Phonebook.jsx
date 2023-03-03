import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import s from '../Phonebook/Phonebook.module.scss';

const Phonebook = () => {
  return (
    <div className={s.container}>
      <ContactForm />
      <div>
        <Filter />
        <ContactList />
      </div>
    </div>
  );
};
export default Phonebook;
