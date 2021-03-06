import PropTypes from 'prop-types';
import css from '../friends/friendList.module.css';

function FriendItem({ avatar, name, isOnline }) {
  return (
    <li className={css.item}>
      <span className={isOnline === true ? css.online : css.offline}></span>
      <img className={css.avatar} src={avatar} alt={name} width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
}

FriendItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};

export default FriendItem;
