// import { css } from '@emotion/react';
import PropTypes from 'prop-types';
import FriendListItem from '../FriendListItem/FriendListItem.js';
import {List} from './FriendList.styled'
export default function FriendList({friends}) {
  return (
  
<List>

{friends.map(({id, avatar, name, isOnline})=> (
        <FriendListItem
        key={id}
         avatar={avatar}
         name={name}
         isOnline = {isOnline}
           />
           ))} 
           
</List>
  );
}


FriendList.propTypes = {
 
    friends: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired
    })).isRequired
    
     }