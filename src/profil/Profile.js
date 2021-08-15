import PropTypes from 'prop-types';
import css from '../profil/Profile.module.css';

function Profile({ avatar, name, tag, location, stats }) {
    return (
        <div className={css.profile}>
            <div className={css.description}>
                <img
                    src={avatar}
                    alt="Аватар пользователя"
                    className={css.avatar}
                />
                <p className={css.name}>{name}</p>
                <p className={css.tag}>@{tag}</p>
                <p className={css.location}>{location}</p>
            </div>

            <ul className={css.stats}>
                <li className={css.item}>
                    <span>Followers</span>
                    <span>{stats.followers}</span>
                </li>
                <li className={css.item}>
                    <span>Views</span>
                    <span>{stats.views}</span>
                </li>
                <li className={css.item}>
                    <span>Likes</span>
                    <span>{stats.likes}</span>
                </li>
            </ul>
        </div>
    );
}

Profile.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    stats: PropTypes.object,
}

export default Profile;