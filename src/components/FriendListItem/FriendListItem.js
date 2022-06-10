import PropTypes from 'prop-types';

import {Item} from './FriendListItem.styled'
import {Status} from './FriendListItem.styled'
import {Avatar} from './FriendListItem.styled';
import {Name} from './FriendListItem.styled'

export default function FriendListItem({ avatar, name, isOnline }) {

    return (

<Item>
  <Status status={isOnline}></Status>
  <Avatar src={avatar} alt="User avatar" width="48" />
  <Name>{name}</Name>
</Item>
    );
}
FriendListItem.propTypes = {

    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired
    
     }