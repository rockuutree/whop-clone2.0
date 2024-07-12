import React from 'react';
import { Flex, IconButton } from 'frosted-ui';
import { HomeIcon, BellIcon, ChatBubbleIcon, MagnifyingGlassIcon, PlusIcon } from '@radix-ui/react-icons';

const LeftmostSidebar: React.FC = () => {
  const icons = [
    { Icon: HomeIcon, notificationCount: 0 },
    { Icon: BellIcon, notificationCount: 4 },
    { Icon: ChatBubbleIcon, notificationCount: 0 },
    { Icon: MagnifyingGlassIcon, notificationCount: 0 },
  ];

  return (
    <Flex direction="column" className="w-16 bg-gray-900 py-4 items-center">
      <div className="mb-6">
        <img src="/path-to-whop-logo.svg" alt="Whop Logo" className="w-8 h-8" />
      </div>
      {icons.map(({ Icon, notificationCount }, index) => (
        <div key={index} className="relative mb-4">
          <IconButton variant="ghost" size="3" className="text-gray-400 hover:text-white">
            <Icon />
          </IconButton>
          {notificationCount > 0 && (
            <div className="absolute top-0 right-0 bg-red-500 rounded-full w-4 h-4 flex items-center justify-center text-xs text-white">
              {notificationCount}
            </div>
          )}
        </div>
      ))}
      <div className="mt-auto">
        <IconButton variant="ghost" size="3" className="text-gray-400 hover:text-white">
          <PlusIcon />
        </IconButton>
      </div>
    </Flex>
  );
};

export default LeftmostSidebar;