import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem.js';
// import friends from './friends.json';
export default function FriendList({friends}) {
  return (
  
<ul className="friend-list"
// friends={friends} 

>

{friends.map(friend => (
        <FriendListItem
        key={friend.id}
         avatar={friend.avatar}
         name={friend.name}
         isOnline = {friend.isOnline}
           />
           ))} 
           
</ul>
  );
}


FriendList.propTypes = {
 
    friends: PropTypes.array,
    
 
     };