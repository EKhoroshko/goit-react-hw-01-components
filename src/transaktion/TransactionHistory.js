import PropTypes from 'prop-types';
import ElementList from './oneLine';
import css from '../transaktion/Transaction.module.css';

function TransactionHistory({ items }) {
    return (
        <table className={css.transactionHistory}>
            <thead className={css.transactionHead}>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>

            <tbody>
                {items.map(item => (
                    <ElementList
                        key={item.id}
                        type={item.type}
                        amount={item.amount}
                        currency={item.currency} />
                ))}
            </tbody>
        </table>
    );
}

TransactionHistory.propTypes = {
    items: PropTypes.array,
    key: PropTypes.string,
}

export default TransactionHistory;