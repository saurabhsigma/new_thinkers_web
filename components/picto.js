"use client"
import React from 'react';
import styles from './picto.module.css'; // Import the CSS module

const Picto = () => {
  return (
    <div className={styles.iframeContainer}>
      <iframe
        src="https://pictoblox.ai/" // Replace with the URL of the website you want to embed
        className={styles.iframe}
        title="PictoBlock"
        frameBorder="0"
        allowFullScreen
      />
    </div>
  );
};

export default Picto;
