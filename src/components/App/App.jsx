import Profile from '../Profile/Profile.js';
import user from '../user.json';
import Statistics from '../Statistics/Statistics.js';
import data from '../data.json';
import FriendList from '../FriendList/FriendList.js';
import friends from '../friends.json';
import TransactionHistory from '../TransactionHistory/TransactionHistory.js';
import transactions from '../transactions.json';
import { Container } from './App.styled.jsx';

export default function App() {
  return (
    <Container
  
      // style={{
      //   height: '100vh',
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   fontSize: 12,
      //   color: '#010101',
      // }}
    >
      {/* React homework template */}
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      
      <Statistics
     
       title="Upload stats" stats={data}/>
    
      
      
      <FriendList
     friends={friends} 
  
       />
    
      
      <TransactionHistory
   
      items={transactions}
     
      />
    
    </Container>
  );
}
