import PropTypes from 'prop-types';
import Item from './item';
import css from '../statistic/Statistic.module.css';

function Statistic({ title, stats }) {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.statList}>
        {stats.map(stat => (
          <Item key={stat.id} label={stat.label} percentage={stat.percentage} />
        ))}
      </ul>
    </section>
  );
}

Statistic.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array,
};

export default Statistic;
