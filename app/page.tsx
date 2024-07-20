import React from 'react';
import LeftmostSidebar from '../components/ui/LeftmostSidebar';
import LeftSidebar from '../components/ui/LeftSidebar';
import MainContent from '../components/ui/MainContent';
import RightSidebar from '../components/ui/RightSidebar';

export default function Home() {
  return (
    <div className="flex h-screen bg-[#111111]">
      <LeftmostSidebar />
      <LeftSidebar />
      <div className="flex-grow overflow-hidden">
        <MainContent />
      </div>
      <RightSidebar />
    </div>
  );
}