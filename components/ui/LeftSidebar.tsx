'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { Avatar, Flex, Text, Box, Container } from 'frosted-ui';
import { ChevronDown, ChevronUp, ChevronRight } from 'lucide-react';

const DropdownMenu = ({ title, items, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <Box className="mb-2">
      <Flex 
        align="center" 
        className={`p-2 rounded cursor-pointer ${isOpen ? '' : 'hover:bg-gray-700'}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <ChevronRight color="grey" size={16} className="mr-2" /> : <ChevronDown color="grey" size={16} className="mr-2" />}
        <Text weight="bold" className="text-gray-400 text-xs">{title}</Text>
      </Flex>
      {isOpen && (
        <Box className="ml-6">
          {items.map((item) => (
            <Flex
              key={item.text}
              align="center"
              className="p-2 rounded cursor-pointer mb-1 hover:bg-gray-700 text-white"
            >
              {item.avatar && (
                <Avatar
                  src={item.avatar}
                  fallback={item.text[0]}
                  size="1"
                  className="mr-2"
                />
              )}
              <Text>{item.text}</Text>
            </Flex>
          ))}
        </Box>
      )}
    </Box>
  );
};

const LeftSidebar = () => {
  const menuItems = {
    'WELCOME!': [
      { text: 'Ryans Resume', avatar: '/iconStuff.png' },
      { text: 'Introduce Ryan', avatar: '/announcement.webp' }
    ],
    'SUPPORT': [
      { text: 'Item 1', avatar: '/support-avatar1.png' },
      { text: 'Item 2', avatar: '/support-avatar2.png' }
    ],
    'IMPORTANT': [
      { text: 'Announcements', avatar: '/announcement.webp' },
      { text: 'Chat', avatar: '/chat.webp' },
      { text: 'Whop Forum', avatar: '/announcement.webp' },
      { text: 'Rate My Page', avatar: '/announcement.webp' },
      { text: 'Suggestions', avatar: '/forum.webp' },
      { text: 'Academy (course)', avatar: '/academy.webp' },
      { text: 'Milestone Info', avatar: '/milestone.webp' }
    ]
  };

  return (
    <Container style={{padding: '8px 8px'}}>
      <Box className="w-64 bg-[#111111] flex flex-col h-full rounded overflow-hidden">
        <Box className="relative h-24">
          <Image src="/whopBG.png" alt="Whop Background" layout="fill" objectFit="cover"/>
          <Flex 
            className="absolute top-0 left-0 right-0 p-2 items-center justify-between backdrop-blur fade-in-bottom"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }} 
            // Semi-transparent overlay
          >
            <Flex align="center" gap="8">
              <Text size="2" className="text-white">Whop University</Text>
              <Flex align="center" gap="1">
                <Avatar size="0" src="/person.svg" alt="Person Icon" />
                <Text size="2" className="text-white">3,807</Text>
              </Flex>
            </Flex>
            <ChevronDown color="white" size={20} />
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
    </Container>
  );
};

export default LeftSidebar;