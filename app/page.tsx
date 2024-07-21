'use client';

import React, { useState } from 'react';
import LeftmostSidebar from '../components/ui/LeftmostSidebar';
import LeftSidebar from '../components/ui/LeftSidebar';
import MainContent from '../components/ui/MainContent';
import RightSidebar from '../components/ui/RightSidebar';

export default function Home() {
  const [selectedContent, setSelectedContent] = useState('suggestions');

  return (
    <div className="flex h-screen bg-[#111111]">
      <LeftmostSidebar />
      <LeftSidebar setSelectedContent={setSelectedContent} />
      <MainContent selectedContent={selectedContent} />
      <RightSidebar />
    </div>
  );
}