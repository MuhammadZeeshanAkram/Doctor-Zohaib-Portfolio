import React, { useState } from 'react';
import styles from './Experience.module.css';
import history from '../../data/history.json';
import { getImageUrl } from '../../utils';

export const Experience = () => {
  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  const visibleHistory = showAll ? history : history.slice(0, 3);

  return (
    <section className={styles.container} id='experience'>
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <ul className={styles.history}>
          {visibleHistory.map((historyItem, id) => (
            <li key={id} className={styles.historyItem}>
              <img src={getImageUrl(historyItem.imageSrc)} alt={`${historyItem.organisation} Logo`} />
              <div className={styles.historyItemDetails}>
                <h3>{`${historyItem.role} , ${historyItem.organisation}`}</h3>
                <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                <ul>
                  {historyItem.experiences.map((experience, expId) => (
                    <li key={expId}>{experience}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
          <li className={styles.showMoreWrapper}>
            <button onClick={toggleShowAll} className={styles.showMoreBtn}>
              {showAll ? 'Show Less' : 'Show More'}
            </button>
          </li>
        </ul>
      </div>
    </section>
  );
};
