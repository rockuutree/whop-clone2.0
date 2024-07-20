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
      { text: 'Welcome', avatar: '/iconStuff.png' },
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
      <Box className="w-64 bg-[#090909] flex flex-col h-full rounded">
        <Box className="relative h-24">
          <Image src="/whopBG.png" alt="Whop Background" layout="fill" objectFit="cover" className="rounded"/>
          <Box className="absolute inset-0" />
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
    </Container>
  );
};

export default LeftSidebar;