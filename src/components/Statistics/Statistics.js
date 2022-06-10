import PropTypes from 'prop-types';
import { StatisticsCard } from './Statistics.styled';
import { Title } from './Statistics.styled';
import { StatList } from './Statistics.styled';
import { Item } from './Statistics.styled';
import { Label } from './Statistics.styled';
import { Percentage } from './Statistics.styled';

export default function Statistics({ title, stats }) {
  return (
    <StatisticsCard>
      {title && <Title>{title}</Title>}
      <StatList>
        {stats.map(({ id, label, percentage }) => (
          <Item key={id} style={{ backgroundColor: getRandomHexColor() }}>
            <Label>{label}</Label>
            <Percentage>{percentage}%</Percentage>
          </Item>
        ))}
      </StatList>
    </StatisticsCard>
  );
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
