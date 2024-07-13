import React from 'react';
import { IconButton } from 'frosted-ui';

const LeftmostSidebar: React.FC = () => {
  const icons = [
    { src: '/assets/iconStuff.png', alt: 'Home', notificationCount: 0 },
    { src: '/assets/iconStuff.png', alt: 'Notifications', notificationCount: 4 },
    { src: '/assets/iconStuff.png', alt: 'Chat', notificationCount: 0 },
    { src: '/assets/iconStuff.png', alt: 'Search', notificationCount: 0 },
  ];

  return (
    <div className="w-16 bg-[#090909] flex flex-col items-center py-4">
      <div className="mb-6">
        <img src="/assets/whop.png" alt="Whop Logo" className="w-8 h-8" />
      </div>
      {icons.map(({ src, alt, notificationCount }, index) => (
        <div key={index} className="relative mb-4">
          <IconButton variant="ghost" size="3" className="text-gray-400 hover:text-white">
            <img src={src} alt={alt} className="w-6 h-6" />
          </IconButton>
          {notificationCount > 0 && (
            <div className="absolute -top-1 -right-1 bg-red-500 rounded-full w-4 h-4 flex items-center justify-center text-xs text-white">
              {notificationCount}
            </div>
          )}
        </div>
      ))}
      <div className="mt-auto">
        <IconButton variant="ghost" size="3" className="text-gray-400 hover:text-white">
          <img src="/assets/iconStuff.png" alt="Add" className="w-6 h-6" />
        </IconButton>
      </div>
    </div>
  );
};

export default LeftmostSidebar;