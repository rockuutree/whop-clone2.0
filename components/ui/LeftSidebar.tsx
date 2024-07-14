'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { Avatar, Flex, Text, Box } from 'frosted-ui';
import { ChevronDown, ChevronUp } from 'lucide-react';

const DropdownMenu = ({ title, items, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <Box className="mb-2">
      <Flex 
        align="center" 
        className={`p-2 rounded cursor-pointer ${isOpen ? '' : 'hover:bg-gray-700'}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <ChevronUp size={12} className="mr-2" /> : <ChevronDown size={12} className="mr-2" />}
        <Text weight="bold" className="text-gray-400 text-xs">{title}</Text>
      </Flex>
      {isOpen && (
        <Box className="ml-6">
          {items.map((item) => (
            <Box
              key={item}
              className="p-2 rounded cursor-pointer mb-1 hover:bg-gray-700 text-white"
            >
              {item}
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};

const LeftSidebar = () => {
  const menuItems = {
    'WELCOME!': ['Item 1', 'Item 2'],
    'SUPPORT': ['Item 1', 'Item 2'],
    'IMPORTANT': ['Announcements', 'Chat', 'Whop Forum', 'Rate My Page', 'Suggestions', 'Academy (course)', 'Milestone Info']
  };

  return (
    <Box className="w-64 bg-[#0F0F0F] flex flex-col h-full">
      <Box className="relative h-24">
        <Image src="/whopBG.png" alt="Whop Background" layout="fill" objectFit="cover" />
        <Box className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0F0F0F]" />
        <Flex className="absolute bottom-0 left-0 p-3 items-center">
          <Flex direction="column">
            <Text weight="bold" className="text-white">Whop University</Text>
            <Text color="gray">3,487 members</Text>
          </Flex>
        </Flex>
      </Box>
      <nav className="flex-1 overflow-y-auto px-2 py-4">
        {Object.entries(menuItems).map(([title, items]) => (
          <DropdownMenu 
            key={title} 
            title={title} 
            items={items} 
            defaultOpen={title === 'WELCOME!' || title === 'IMPORTANT'}
          />
        ))}
      </nav>
    </Box>
  );
};

export default LeftSidebar;