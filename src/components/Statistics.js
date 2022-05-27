import PropTypes from 'prop-types';
export default function Statistics({ title, stats }) {
    // const {username, tag, location, avatar, stats} = props;
    const isTitle = true;
  return (
<section className = "statistics">
{isTitle &&
<h2 className = "title">{title}</h2>
}
  <ul className = "stat-list">
    <li className = "item">
      <span className = "label">{stats.label}</span>
      <span className = "percentage">{stats.percentage}</span>
    </li>
    
  </ul>
</section>
  );
}

Statistics.propTypes = {

 title: PropTypes.string,
//  stats: PropTypes.array,
 label: PropTypes.string,
 percentage: PropTypes.number
 
  };
