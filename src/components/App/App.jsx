import Profile from '../Profile/Profile.js';
import user from '../Data/user.json';
import Statistics from '../Statistics/Statistics.js';
import data from '../Data/data.json';
import FriendList from '../FriendList/FriendList.js';
import friends from '../Data/friends.json';
import TransactionHistory from '../TransactionHistory/TransactionHistory.js';
import transactions from '../Data/transactions.json';
import { Container } from './App.styled.jsx';

export default function App() {
  return (
    <Container>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={data} />

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </Container>
  );
}
