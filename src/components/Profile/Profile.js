import PropTypes from 'prop-types';
import {UserCard} from './Profile.styled'
import {UserAvatar} from './Profile.styled'
import {Name} from './Profile.styled'
import {Tag} from './Profile.styled'
import {Location} from './Profile.styled'
import {Stats} from './Profile.styled'
import {StatsParametr} from './Profile.styled'
import {Label} from './Profile.styled'
import {Quantity} from './Profile.styled'
import {Description} from './Profile.styled'


export default function Profile({ username, tag, location, avatar, stats }) {


return (
<UserCard>
  <Description>
    <UserAvatar
      src = {avatar}
    
      alt = "User avatar"
     
    
    />
    <Name>{username}</Name>
    <Tag>@{tag}</Tag>
    <Location>{location}</Location>
  </Description>

  <Stats>
    <StatsParametr>
      <Label>Followers</Label>
      <Quantity>{stats.followers}</Quantity>
    </StatsParametr>
    <StatsParametr>
      <Label>Views</Label>
      <Quantity>{stats.views}</Quantity>
    </StatsParametr>
    <StatsParametr>
      <Label>Likes</Label>
      <Quantity>{stats.likes}</Quantity>
    </StatsParametr>
  </Stats>
</UserCard>
);
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(
    PropTypes.number.isRequired,
  ).isRequired

}

