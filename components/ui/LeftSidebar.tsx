'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { Avatar, Flex, Text, Box, Container } from 'frosted-ui';
import { ChevronDown, ChevronUp, ChevronRight } from 'lucide-react';

interface MenuItem {
  text: string;
  avatar: string;
  enabled: boolean;
}

interface DropdownMenuProps {
  title: string;
  items: MenuItem[];
  defaultOpen: boolean;
  onItemClick: (itemText: string) => void;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ title, items, defaultOpen = false, onItemClick }) => {
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
              onClick={() => item.enabled && onItemClick(item.text.toLowerCase())}
              className={`p-2 rounded cursor-pointer mb-1 ${item.enabled ? 'hover:bg-gray-700 text-white' : 'text-gray-400 cursor-not-allowed'}`}
            >
              {item.avatar && (
                <Avatar
                  src={item.avatar}
                  color="info"
                  fallback={item.text[0]}
                  size="1"
                  className={`mr-2 ${!item.enabled}`}
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

interface LeftSidebarProps {
  setSelectedContent: React.Dispatch<React.SetStateAction<string>>;
}

const LeftSidebar: React.FC<LeftSidebarProps> = ({ setSelectedContent }) => {
  const menuItems = {
    'WELCOME!': [
      { text: 'My Resume', avatar: '/iconStuff.png', enabled: true },
      { text: 'Introduce Ryan', avatar: '/announcement.webp', enabled: true }
    ],
    'SUPPORT': [
      { text: 'Item 1', avatar: '/support-avatar1.png', enabled: false },
      { text: 'Item 2', avatar: '/support-avatar2.png', enabled: false }
    ],
    'IMPORTANT': [
      { text: 'Announcements', avatar: '/announcement.webp', enabled: false },
      { text: 'Chat', avatar: '/chat.webp', enabled: false },
      { text: 'Whop Forum', avatar: '/announcement.webp', enabled: false },
      { text: 'Rate My Page', avatar: '/announcement.webp', enabled: false },
      { text: 'Suggestions', avatar: '/forum.webp', enabled: true },
      { text: 'Academy (course)', avatar: '/academy.webp', enabled: false },
      { text: 'Milestone Info', avatar: '/milestone.webp', enabled: false },
      { text: 'Data', avatar: '/forum.webp', enabled: true }
    ]
  };

  const handleItemClick = (itemText: string) => {
    switch (itemText) {
      case 'my resume':
        setSelectedContent('my resume');
        break;
      case 'introduce ryan':
        window.open('https://www.linkedin.com/in/ryanqvu/', '_blank');
        break;
      case 'suggestions':
        setSelectedContent('suggestions');
        break;
        case 'data':
          setSelectedContent('data');
          break;
      // Add more cases for other menu items as needed
      default:
        console.log(`Clicked on ${itemText}`);
    }
  };

  return (
    <Container style={{padding: '8px 8px'}}>
      <Box className="w-64 bg-[#111111] flex flex-col h-full rounded overflow-hidden">
        <Box className="relative h-24">
          <Image src="/whopBG.png" alt="Whop Background" layout="fill" objectFit="cover"/>
          <Flex 
            className="absolute top-0 left-0 right-0 p-2 items-center justify-between backdrop-blur fade-in-bottom"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
          >
            <Flex align="center" gap="8">
              <Text size="2" className="text-white">Whop University</Text>
              <Flex align="center" gap="1">
                <Avatar fallback="i" size='1' src="/person.svg" alt="Person Icon" />
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
              onItemClick={handleItemClick}
            />
          ))}
        </nav>
      </Box>
    </Container>
  );
};

export default LeftSidebar;