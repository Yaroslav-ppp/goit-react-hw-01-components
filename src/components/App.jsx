import Profile from './Profile.js';
import user from './user.json';
import Statistics from './Statistics.js';
import data from './data.json';
import FriendList from './FriendList.js';
// import FriendListItem from './FriendListItem.js';
import friends from './friends.json';
import TransactionHistory from './TransactionHistory.js';
import transactions from './transactions.json';


export function App() {
  return (
    <div
  
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 12,
        color: '#010101',
      }}
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
    
       {data.map(data => (
      <Statistics 
      key={data.id}
      stats={data}  />
      ))} 
      
      
      <FriendList
     friends={friends} 
     
    //   {...friends.map(friend => (
        
    //   <FriendListItem
    //   key={friend.id}
    //  avatar={friend.avatar}
    //  name={friend.name}
    //  isOnline = {friend.isOnline}
    //    />
    //    ))} 
       />
    
      
      <TransactionHistory 
    
    
      items={transactions}
     
      />
    
    </div>
  );
}
