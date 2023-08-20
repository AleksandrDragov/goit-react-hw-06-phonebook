import { ContactItem, DeleteBtn } from './Contact__List.styled';
import { BiBook } from 'react-icons/bi';
import { removeUserContact } from 'redux/contactsReducer';
import { useDispatch, useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/selectors';

const ContactsList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectVisibleContacts);

  return (
    <ul>
      {filteredContacts.map(({ id, name, number }) => {
        return (
          <ContactItem key={id}>
            <BiBook style={{ color: 'blue', marginRight: '15px' }} />
            {name}: {number}
            <DeleteBtn
              type="button"
              onClick={() => dispatch(removeUserContact(id))}
            >
              Delete
            </DeleteBtn>
          </ContactItem>
        );
      })}
    </ul>
  );
};

export default ContactsList;
