import PropTypes from 'prop-types';
import ItemList from './item';
import css from '../statistic/Statistic.module.css';

function Statistic({ title, stats }) {
  return (
    <section className={css.statistics}>
      {title === undefined ? (
        (title = null)
      ) : (
        <h2 className={css.title}>{title}</h2>
      )}
      <ul className={css.statList}>
        {stats.map(stat => (
          <ItemList
            key={stat.id}
            label={stat.label}
            percentage={stat.percentage}
          />
        ))}
      </ul>
    </section>
  );
}

Statistic.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array,
  key: PropTypes.number,
};

export default Statistic;
