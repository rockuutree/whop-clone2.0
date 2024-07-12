import React from 'react';
import { Avatar } from 'frosted-ui';

const LeftSidebar: React.FC = () => {
  const menuItems = [
    'Welcome', 'Our Links', 'Introduce Yourself', 'Support', 'Genius Bar', 
    'Live Chat', 'Help Center', 'Important', 'Announcements', 'Chat', 
    'Whop Forum', 'Rate My Page', 'Suggestions', 'Academy (course)', 'Milestone Info'
  ];

  return (
    <div className="w-64 bg-gray-800 p-4 border-r border-gray-700 overflow-y-auto">
      <div className="flex items-center mb-6">
        <Avatar fallback="W" className="mr-2 bg-indigo-500 text-white" />
        <span className="font-bold text-lg">Whop University</span>
      </div>
      <nav>
        {menuItems.map((item) => (
          <div
            key={item}
            className={`p-2 rounded cursor-pointer mb-1 ${
              item === 'Suggestions' ? 'bg-gray-700' : 'hover:bg-gray-700'
            }`}
          >
            {item}
          </div>
        ))}
      </nav>
    </div>
  );
};

export default LeftSidebar;