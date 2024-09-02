"use client"
// import React from 'react';
import styles from './if_completed.module.css';
import React from 'react';
// import styles from './if_completed.module.css';

const TopicCircle = ({ topic, completed, onClick }) => {
  return (
    <div
      className={styles.topicCircleContainer}
      onClick={onClick} // Handle click to toggle completion
    >
      <div className={`${styles.topicCircle} ${completed ? styles.completed : styles.notCompleted}`}>
        <span className={styles.topicText}>{topic}</span>
      </div>
    </div>
  );
};

export default TopicCircle;





