import React from 'react';
import Image from 'next/image';
import { Avatar, Flex, Text, Box } from 'frosted-ui';

const LeftSidebar: React.FC = () => {
  const menuItems = [
    'WELCOME!', 'SUPPORT', 'IMPORTANT', 'Announcements', 'Chat', 
    'Whop Forum', 'Rate My Page', 'Suggestions', 'Academy (course)', 'Milestone Info'
  ];

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
        {menuItems.map((item) => (
          <Box
            key={item}
            className={`p-2 rounded cursor-pointer mb-1 ${
              item === 'Suggestions' ? 'bg-gray-700' : 'hover:bg-gray-700'
            } ${['WELCOME!', 'SUPPORT', 'IMPORTANT'].includes(item) ? 'font-bold text-gray-400' : 'text-white'}`}
          >
            {item}
          </Box>
        ))}
      </nav>
    </Box>
  );
};

export default LeftSidebar;
