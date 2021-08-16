import PropTypes from 'prop-types';
import css from '../statistic/item.module.css';

const getRandomColor = () => Math.ceil(Math.random() * 255);
const genereteRgb = () => {
  return `rgb(${getRandomColor()}, ${getRandomColor()}, ${getRandomColor()})`;
};

function itemList({ label, percentage }) {
  return (
    <li className={css.item} style={{ backgroundColor: genereteRgb() }}>
      <span className="label">{label}</span>
      <span className="percentage">{percentage}%</span>
    </li>
  );
}

itemList.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.number,
};

export default itemList;
