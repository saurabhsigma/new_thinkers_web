"use client"
import React, { useState } from 'react';
import styles from './side_chapters.module.css';
import TopicCircle from './if_completed'; // Import the TopicCircle component

const chaptersData = [
  {
    chapter: "Chapter 1: Introduction",
    topics: ["Overview", "Getting Started", "Setup", "Basic Terminology", "Objectives"]
  },
  {
    chapter: "Chapter 2: Basics",
    topics: ["Fundamentals", "Basic Concepts", "Key Principles", "Core Techniques", "First Steps"]
  },
  {
    chapter: "Chapter 3: Advanced Topics",
    topics: ["Deep Dive", "Expert Techniques", "Troubleshooting", "Complex Examples", "Optimization"]
  },
  {
    chapter: "Chapter 4: Intermediate Concepts",
    topics: ["Applications", "Use Cases", "Best Practices", "Advanced Strategies", "Common Pitfalls"]
  },
  {
    chapter: "Chapter 5: Practical Examples",
    topics: ["Case Studies", "Hands-On Projects", "Real-World Applications", "Project Reviews", "Feedback"]
  },
  {
    chapter: "Chapter 6: Review & Next Steps",
    topics: ["Summary", "Further Reading", "Q&A", "Self-Assessment", "Next Steps"]
  },
  // Add more chapters and topics as needed
];

const SideChapters = () => {
  const [activeChapter, setActiveChapter] = useState(null);
  const [completedTopics, setCompletedTopics] = useState({}); // Track completion status

  const handleChapterClick = (index) => {
    setActiveChapter(index === activeChapter ? null : index);
  };

  const handleTopicClick = (chapterIndex, topic) => {
    setCompletedTopics(prevState => ({
      ...prevState,
      [`${chapterIndex}-${topic}`]: !prevState[`${chapterIndex}-${topic}`]
    }));
  };

  const activeChapterData = activeChapter !== null ? chaptersData[activeChapter] : { topics: [] };

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <h2 className={styles.title}>Table of Contents</h2>
        <ul className={styles.chapterList}>
          {chaptersData.map((chapter, chapterIndex) => (
            <li
              key={chapterIndex}
              className={`${styles.chapterItem} ${activeChapter === chapterIndex ? styles.activeChapter : ''}`}
            >
              <button 
                className={styles.chapterButton} 
                onClick={() => handleChapterClick(chapterIndex)}
              >
                {chapter.chapter}
              </button>
              {activeChapter === chapterIndex && (
                <ul className={styles.topicList}>
                  {chapter.topics.map((topic, topicIndex) => (
                    <li key={topicIndex} className={styles.topicItem}>
                      {topic}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.topicsContainer}>
        {activeChapterData.topics.map((topic, index) => (
          <TopicCircle
            key={index}
            topic={topic}
            completed={!!completedTopics[`${activeChapter}-${topic}`]}
            onClick={() => handleTopicClick(activeChapter, topic)}
          />
        ))}
      </div>
    </div>
  );
};

export default SideChapters;
