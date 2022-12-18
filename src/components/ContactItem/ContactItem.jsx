import PropTypes from 'prop-types';
import { Item, Text, Button } from './ContactItem.styled';

export const ContactItem = ({ id, name, number, onClick }) => {
  return (
    <Item key={id}>
      <Text>
        {name}: {number}
      </Text>
      <Button type="submit" onClick={() => onClick(id)}>
        Delete
      </Button>
    </Item>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ContactItem;