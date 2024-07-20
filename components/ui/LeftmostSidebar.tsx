'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { Flex, IconButton, Badge, Avatar, Container, Button, SkeletonAvatar } from 'frosted-ui';
import { Home, Bell } from 'lucide-react';

const LeftmostSidebar: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleIconClick = (index: number) => {
    setSelectedIndex(index);
  };

  const profileIcons = [
    { src: '', alt: 'P' },
    { src: '', alt: 'S' },
    { src: '', alt: 'R' },
    { src: '/whopGroup.png', alt: 'Profile' },
  ];

  const utilityIcons = [
    { src: '/magnify.svg', alt: 'Search' },
    { src: '/plus.svg', alt: 'plus' },
    { src: '/building.svg', alt: 'store' },
  ];

  return (
    <Container width="9" style={{ borderRight: '0.5px solid #403f3f' }}>
      <Flex direction="column" align="center" className="bg-[#090909] py-4 space-y-6">
        <Image src="/whop.png" alt="Whop Logo" width={36} height={36} className="mb-4 mt-4" />
        <Button variant="ghost" onClick={() => handleIconClick(-1)}>
          <Home size={24} className="cursor-pointer mt-4 mb-2" color="#797979" />
        </Button>
        <Button variant="ghost" onClick={() => handleIconClick(-2)}>
          <Bell size={24} className="cursor-pointer mb-2 mt-4"  color="#797979" />
        </Button>
        <div className="@[8rem]:mx-4 bg-[#403f3f] mx-3 my-3 h-[1px] self-stretch"></div>
        
        {/* Profile Icons */}
        <Flex direction="column" align="center" className="space-y-2">
          {profileIcons.map(({ src, alt }, index) => (
            <Badge
              key={index}
              className="cursor-pointer transition-transform duration-200 ease-in-out hover:scale-110 active:scale-125"
              onClick={() => handleIconClick(index)}
            >
              <Avatar
                src={src}
                fallback={alt}
                alt={alt}
                width={36}
                height={36}
                className="cursor-pointer"
                style={{
                  outline: selectedIndex === index ? '3px solid #5b5bd2' : 'none',
                }}
              />
            </Badge>
          ))}
        </Flex>

        {/* Utility Icons */}
        <Flex direction="column" align="center" className="space-y-2">
          {utilityIcons.map(({ src, alt }, index) => (
            <Badge
              key={`utility-${index}`}
              className="cursor-pointer transition-transform duration-200 ease-in-out hover:scale-110 active:scale-125"
              onClick={() => handleIconClick(profileIcons.length + index)}
            >
              <SkeletonAvatar color="gray" size="3">
                <Image
                  src={src}
                  alt={alt}
                  width={24}
                  height={24}
                  className="cursor-pointer"
                />
              </SkeletonAvatar>
            </Badge>
          ))}
        </Flex>

        <div className="mt-auto">
          <IconButton
            aria-label="Add"
            variant="ghost"
            className={`${
              selectedIndex === profileIcons.length + utilityIcons.length ? 'outline outline-2 outline-purple-500' : ''
            }`}
            onClick={() => handleIconClick(profileIcons.length + utilityIcons.length)}
          >
            <Image
              src="/rocktree.jpeg"
              alt="Add"
              width={45}
              height={45}
              className="rounded-full"
            />
          </IconButton>
        </div>
      </Flex>
    </Container>
  );
};

export default LeftmostSidebar;