import PropTypes from 'prop-types';
import css from '../transaktion/Transaction.module.css';

function ElementHistory({ type, amount, currency }) {
  return (
    <tr className={css.elementHistory}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
}

ElementHistory.propTypes = {
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
};

export default ElementHistory;
