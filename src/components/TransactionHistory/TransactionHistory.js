import PropTypes from 'prop-types';
import { Transactions } from './TransactionHistory.styled';
import { TableHead } from './TransactionHistory.styled';
import { Data } from './TransactionHistory.styled';

export default function TransactionHistory({ items }) {
  return (
    <Transactions>
      <thead>
        <tr>
          <TableHead>Type</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Currency</TableHead>
        </tr>
      </thead>
      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <Data>{type}</Data>
            <Data>{amount}</Data>
            <Data>{currency}</Data>
          </tr>
        ))}
      </tbody>
    </Transactions>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
