import React from 'react';
import LeftmostSidebar from '../components/ui/LeftmostSidebar';
import LeftSidebar from '../components/ui/LeftSidebar';
import MainContent from '../components/ui/MainContent';
import RightSidebar from '../components/ui/RightSidebar';
import styles from '../styles/WhopClone.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <LeftmostSidebar />
      <LeftSidebar />
      <MainContent />
      <RightSidebar />
    </div>
  );
}