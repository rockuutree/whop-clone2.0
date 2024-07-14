'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { Flex, IconButton, Badge, Avatar } from 'frosted-ui';

const LeftmostSidebar: React.FC = () => {

  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleIconClick = (index: number) => {
    setSelectedIndex(index);
  };

  const icons = [
    { src: '/iconStuff.png', alt: 'Home'},
    { src: '/iconStuff.png', alt: 'Notifications' },
    { src: '/iconStuff.png', alt: 'Chat'},
    { src: '/whopGroup.png', alt: 'Search'},
  ];

  return (
    <Flex direction="column" align="center" className="w-16 bg-[#090909] py-4">
      <Image src="/whop.png" alt="Whop Logo" width={32} height={32} className="mb-6" />
      {icons.map(({ src, alt }, index) => (
        <Badge
        key={index}
        className={`mb-4 ${
          selectedIndex === index ? 'outline outline-2 outline-purple-500' : ''
        }`}
        onClick={() => handleIconClick(index)}
      >
            <Avatar src={src} fallback={alt} alt={alt} width={24} height={24} />
        </Badge>
      ))}
      <div className="mt-auto">
        <IconButton
          aria-label="Add"
          variant="ghost"
          className={`${
            selectedIndex === icons.length ? 'outline outline-2 outline-purple-500' : ''
          }`}
          onClick={() => handleIconClick(icons.length)}
        >
          <Image src="/rocktree.jpeg" alt="Add" width={45} height={45} className="rounded-full" />
        </IconButton>
      </div>
    </Flex>
  );
};

export default LeftmostSidebar;
