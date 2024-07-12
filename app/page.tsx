import React from 'react';
import { Flex } from 'frosted-ui';
import LeftSidebar from '../components/ui/LeftSidebar';
import MainContent from '../components/ui/MainContent';
import RightSidebar from '../components/ui/RightSidebar';
import styles from '../styles/WhopClone.module.css';

export default function Home() {
  return (
    <Flex className="h-screen bg-gray-900 text-white">
      <LeftSidebar />
      <MainContent />
      <RightSidebar />
    </Flex>
  );
}